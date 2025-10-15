import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { History, Loader2, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { QueryHistory } from "@/types/symptom";
import { format } from "date-fns";

export const HistoryView = () => {
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

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-medical)' }}>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <History className="h-6 w-6 text-primary" />
            Query History
          </CardTitle>
          <CardDescription>
            Anonymized records of your previous symptom checks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.map((query) => (
            <Card key={query.id} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-1">
                    <CardTitle className="text-base">
                      {query.response.conditions?.[0]?.name || 'Analysis'}
                    </CardTitle>
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
                  <div>
                    <p className="text-sm font-semibold mb-1">Symptoms:</p>
                    <p className="text-sm text-muted-foreground">{query.symptoms}</p>
                  </div>
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
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};