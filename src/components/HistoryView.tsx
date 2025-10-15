import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History, Loader2, AlertCircle, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { QueryHistory } from "@/types/symptom";
import { format } from "date-fns";
import { useState, useRef, useEffect, useMemo } from "react";

const ITEMS_PER_PAGE = 5;

export const HistoryView = () => {
  const [expandedQuery, setExpandedQuery] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ['symptom-history'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('get-history', {
        body: {}
      });
      
      if (error) {
        console.error('History fetch error:', error);
        throw new Error(error.message || 'Failed to fetch history');
      }
      
      if (!data?.queries) {
        console.error('Invalid history response:', data);
        return [];
      }
      
      return data.queries as QueryHistory[];
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full max-w-4xl mx-auto border-destructive">
        <CardContent className="py-6 space-y-3">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <p className="text-destructive font-semibold">Failed to load history</p>
          </div>
          <p className="text-sm text-muted-foreground">
            {error instanceof Error ? error.message : 'Unknown error'}
          </p>
          <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
            <p className="font-semibold mb-2">Possible causes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>The <code>get-history</code> Edge Function is not deployed</li>
              <li>Database table is not created</li>
              <li>Network connection issue</li>
            </ul>
            <p className="mt-3">
              Check the browser console (F12) for detailed error information.
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => window.location.reload()}
            className="mt-2"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="text-center py-12 space-y-4">
          <History className="h-12 w-12 mx-auto text-muted-foreground" />
          <div>
            <p className="font-semibold">No History Yet</p>
            <p className="text-sm text-muted-foreground">
              Check your symptoms with consent enabled to see history here
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Pagination calculations
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, endIndex);

  // Reset to page 1 if current page is out of bounds
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-medical)' }}>
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-2">
              <CardTitle className="text-2xl flex items-center gap-2">
                <History className="h-6 w-6 text-primary" />
                Query History
              </CardTitle>
              <CardDescription>
                Anonymized records of your previous symptom checks
              </CardDescription>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-md p-2 mt-2">
                <p className="text-xs text-amber-800 dark:text-amber-200">
                  <strong>Note (Demo/Evaluation):</strong> For demonstration purposes, all queries are publicly visible. 
                  In production, database policies should be configured to restrict access to user-specific data only.
                </p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Total: {data.length} {data.length === 1 ? 'query' : 'queries'}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentPageData.map((query) => {
            const isExpanded = expandedQuery === query.id;
            
            return (
              <Card 
                key={query.id} 
                className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div 
                  className="cursor-pointer select-none"
                  onClick={() => setExpandedQuery(isExpanded ? null : query.id)}
                >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-base">
                                {query.response.conditions?.[0]?.name || 'Analysis'}
                              </CardTitle>
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                              )}
                            </div>
                            <CardDescription className="text-xs">
                              {format(new Date(query.created_at), 'PPpp')}
                              {query.age && ` • Age: ${query.age}`}
                              {query.sex && ` • Sex: ${query.sex}`}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="bg-primary/10">
                            {query.response.conditions?.length || 0} conditions
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3">
                          {/* Symptoms Preview */}
                          <div>
                            <p className="text-sm font-semibold mb-1">Symptoms:</p>
                            <p className="text-sm text-muted-foreground">
                              {query.symptoms.substring(0, 100)}{query.symptoms.length > 100 ? '...' : ''}
                            </p>
                          </div>

                          {/* Top Conditions Preview */}
                          {query.response.conditions && query.response.conditions.length > 0 && (
                            <div>
                              <p className="text-sm font-semibold mb-2">Top Conditions:</p>
                              <div className="space-y-1">
                                {query.response.conditions.slice(0, 2).map((condition, idx) => (
                                  <div key={idx} className="text-sm flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">
                                      #{condition.probability_rank}
                                    </Badge>
                                    <span>{condition.name}</span>
                                    <span className="text-muted-foreground text-xs">
                                      ({(condition.confidence_score * 100).toFixed(0)}%)
                                    </span>
                                  </div>
                                ))}
                              </div>
                              {query.response.conditions.length > 2 && (
                                <p className="text-xs text-primary mt-2 font-medium">
                                  Click to see {query.response.conditions.length - 2} more condition{query.response.conditions.length - 2 > 1 ? 's' : ''}...
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </div>

                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded 
                      ? 'max-h-[3000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                  style={{
                    transitionProperty: 'max-height, opacity',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <CardContent className="pt-0">
                    <div className="space-y-4 border-t pt-4">
                        {/* Full Symptoms */}
                        <div>
                          <p className="text-sm font-semibold mb-1">Full Symptoms:</p>
                          <p className="text-sm text-muted-foreground">{query.symptoms}</p>
                        </div>

                        {/* All Conditions */}
                        {query.response.conditions && query.response.conditions.length > 0 && (
                          <div>
                            <p className="text-base font-semibold mb-3">All Possible Conditions:</p>
                            <div className="space-y-3">
                              {query.response.conditions.map((condition, idx) => (
                                <Card key={idx} className="bg-muted/30 border-muted">
                                  <CardContent className="pt-4">
                                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                                      <div className="flex items-center gap-2">
                                        <Badge variant="secondary">
                                          #{condition.probability_rank}
                                        </Badge>
                                        <span className="font-semibold">{condition.name}</span>
                                      </div>
                                      <Badge variant="outline">
                                        {(condition.confidence_score * 100).toFixed(0)}% confidence
                                      </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                      {condition.reasoning}
                                    </p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Recommended Next Steps */}
                        {query.response.recommended_next_steps && query.response.recommended_next_steps.length > 0 && (
                          <div>
                            <p className="text-base font-semibold mb-3">Recommended Next Steps:</p>
                            <ul className="space-y-2">
                              {query.response.recommended_next_steps.map((step, idx) => (
                                <li key={idx} className="text-sm flex gap-2">
                                  <span className="text-primary font-semibold min-w-[1.5rem]">{idx + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Additional Info if needed */}
                        {query.response.needed_info && (
                          <div>
                            <p className="text-base font-semibold mb-2">Additional Information Needed:</p>
                            <ul className="space-y-1">
                              {(Array.isArray(query.response.needed_info) 
                                ? query.response.needed_info 
                                : [query.response.needed_info]
                              ).map((info, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground">• {info}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Disclaimer */}
                        {query.response.disclaimer && (
                          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-md p-3">
                            <p className="text-xs text-muted-foreground">
                              {query.response.disclaimer}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
            );
          })}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
                <span className="ml-2">
                  (Showing {startIndex + 1}-{Math.min(endIndex, data.length)} of {data.length})
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setCurrentPage(prev => Math.max(1, prev - 1));
                    setExpandedQuery(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setCurrentPage(prev => Math.min(totalPages, prev + 1));
                    setExpandedQuery(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};