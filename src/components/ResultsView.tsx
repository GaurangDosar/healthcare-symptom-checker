import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, Info, ChevronDown, ChevronUp, Code, AlertCircle } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { SymptomCheckResponse } from "@/types/symptom";

interface ResultsViewProps {
  result: SymptomCheckResponse;
}

export const ResultsView = ({ result }: ResultsViewProps) => {
  const [showRawJson, setShowRawJson] = useState(false);
  const [expandedConditions, setExpandedConditions] = useState<Set<number>>(new Set());
  const [expandedSteps, setExpandedSteps] = useState(false);
  
  // Determine emergency level and message based on conditions and recommendations
  const getEmergencyInfo = () => {
    if (!result.conditions || result.conditions.length === 0) return null;

    // Check conditions and next steps for emergency keywords with strict context
    const allText = [
      ...result.conditions.map(c => c.name.toLowerCase() + ' ' + c.reasoning.toLowerCase()),
      ...(result.recommended_next_steps || []).map(s => s.toLowerCase())
    ].join(' ');

    // Only show warning for TRULY serious indicators
    // Critical: Requires immediate 911/emergency services
    if (
      allText.includes('call 911') || 
      allText.includes('call 108') ||
      allText.includes('call emergency') || 
      allText.includes('life-threatening') ||
      allText.includes('immediately call') ||
      (allText.includes('emergency') && allText.includes('immediately'))
    ) {
      return {
        title: 'Critical Emergency - Call 108 Now!!!',
        description: 'Life-threatening symptoms require immediate emergency services',
        level: 'critical'
      };
    } 
    
    // Emergency: Requires ER visit or urgent care TODAY
    else if (
      allText.includes('emergency room') || 
      allText.includes('emergency department') || 
      allText.includes('go to emergency') ||
      allText.includes('visit emergency') ||
      (allText.includes('immediate') && (allText.includes('medical attention') || allText.includes('medical care')))
    ) {
      return {
        title: 'Emergency Medical Attention Required',
        description: 'Visit emergency room or urgent care immediately',
        level: 'emergency'
      };
    } 
    
    // Urgent: Requires same-day or next-day medical consultation
    // BUT only if combined with serious context words
    else if (
      (allText.includes('urgent care') && !allText.includes('if symptoms worsen')) ||
      (allText.includes('seek urgent') && allText.includes('medical')) ||
      (allText.includes('same day') && allText.includes('medical'))
    ) {
      return {
        title: 'Medical Attention Needed',
        description: 'Consult a healthcare provider as soon as possible (same-day or next-day)',
        level: 'urgent'
      };
    }

    // Don't show warning for routine advice like "monitor symptoms" or "if worse, see doctor"
    return null;
  };

  const emergencyInfo = getEmergencyInfo();
  const hasEmergency = emergencyInfo !== null;

  // Toggle condition expansion
  const toggleCondition = (index: number) => {
    const newExpanded = new Set(expandedConditions);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedConditions(newExpanded);
  };

  // Helper function to truncate text to 2 lines (approximately 140 characters)
  const truncateText = (text: string, maxLength: number = 140) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Helper function to highlight important medical terms
  const highlightText = (text: string) => {
    const importantTerms = [
      'emergency', 'urgent', 'severe', 'immediate', 'critical', 'serious',
      'fever', 'pain', 'bleeding', 'difficulty breathing', 'chest pain',
      'symptoms', 'diagnosis', 'treatment', 'consult', 'healthcare',
      '911', 'doctor', 'hospital', 'medical', 'condition'
    ];
    
    let highlightedText = text;
    importantTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      highlightedText = highlightedText.replace(
        regex, 
        match => `<strong class="font-semibold text-foreground">${match}</strong>`
      );
    });
    
    return highlightedText;
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 0.7) return "bg-secondary text-secondary-foreground";
    if (score >= 0.4) return "bg-primary/20 text-primary";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Emergency Warning - Dynamic based on severity */}
      {hasEmergency && emergencyInfo && (
        <Card 
          className={`
            ${emergencyInfo.level === 'critical' ? 'border-destructive bg-destructive/15 animate-pulse' : 
              emergencyInfo.level === 'emergency' ? 'border-warning bg-warning/10 animate-pulse' :
              emergencyInfo.level === 'urgent' ? 'border-warning bg-warning/5' :
              'border-primary bg-primary/5'
            }
            hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl cursor-pointer
          `}
          style={{ boxShadow: 'var(--shadow-warning)' }}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle 
                className={`h-8 w-8 ${
                  emergencyInfo.level === 'critical' ? 'text-destructive' : 'text-warning'
                }`} 
              />
              <div>
                <CardTitle 
                  className={`text-xl ${
                    emergencyInfo.level === 'critical' ? 'text-destructive' : 'text-warning'
                  }`}
                >
                  {emergencyInfo.title}
                </CardTitle>
                <CardDescription 
                  className={`font-semibold ${
                    emergencyInfo.level === 'critical' ? 'text-destructive/80' : 'text-warning/80'
                  }`}
                >
                  {emergencyInfo.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}

      {/* Conditions */}
      <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-primary/30" style={{ boxShadow: 'var(--shadow-medical)' }}>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Possible Conditions
          </CardTitle>
          <CardDescription>
            Ranked by likelihood based on provided symptoms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {result.conditions?.map((condition, index) => {
            const isExpanded = expandedConditions.has(index);
            const shouldTruncate = condition.reasoning.length > 140;
            const displayText = isExpanded ? condition.reasoning : truncateText(condition.reasoning);
            
            return (
              <div 
                key={index} 
                className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/50 hover:z-10 relative cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-semibold text-xl">{condition.name}</h3>
                      <Badge variant="outline" className={getConfidenceColor(condition.confidence_score)}>
                        {(condition.confidence_score * 100).toFixed(0)}% confidence
                      </Badge>
                    </div>
                    <div 
                      className="text-base text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: highlightText(displayText) }}
                    />
                    {shouldTruncate && (
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => toggleCondition(index)}
                        className="p-0 h-auto font-normal text-primary"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="h-4 w-4 mr-1" />
                            Show less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-4 w-4 mr-1" />
                            Show more
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                    #{condition.probability_rank}
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Recommended Next Steps */}
      <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-warning/30" style={{ boxShadow: 'var(--shadow-medical)' }}>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-warning" />
            Recommended Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {result.recommended_next_steps?.slice(0, expandedSteps ? undefined : 2).map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mt-0.5">
                  {index + 1}
                </span>
                <span 
                  className="flex-1 text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: highlightText(step) }}
                />
              </li>
            ))}
          </ul>
          {result.recommended_next_steps && result.recommended_next_steps.length > 2 && (
            <Button
              variant="link"
              size="sm"
              onClick={() => setExpandedSteps(!expandedSteps)}
              className="mt-4 p-0 h-auto font-normal text-primary"
            >
              {expandedSteps ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  Show {result.recommended_next_steps.length - 2} more steps
                </>
              )}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Additional Information Needed */}
      {result.needed_info && (
        <Card className="shadow-lg border-primary/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:border-primary/50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Additional Information Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            {Array.isArray(result.needed_info) ? (
              <ul className="space-y-2">
                {result.needed_info.map((info, index) => (
                  <li key={index} className="text-base text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span dangerouslySetInnerHTML={{ __html: highlightText(info) }} />
                  </li>
                ))}
              </ul>
            ) : (
              <p 
                className="text-base text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: highlightText(result.needed_info) }}
              />
            )}
          </CardContent>
        </Card>
      )}

      {/* Raw JSON Viewer (for grading/debugging) */}
      <Collapsible open={showRawJson} onOpenChange={setShowRawJson}>
        <Card className="border-dashed hover:shadow-lg transition-all duration-300 hover:scale-[1.005] hover:border-accent/50">
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full justify-between p-6 h-auto hover:bg-accent/50"
            >
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="font-semibold">View Raw JSON Response</span>
              </div>
              {showRawJson ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0">
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-xs">
                {JSON.stringify(result, null, 2)}
              </pre>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
};