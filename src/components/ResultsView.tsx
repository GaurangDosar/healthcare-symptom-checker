import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, Info, ChevronDown, ChevronUp, Code } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { SymptomCheckResponse } from "@/types/symptom";

interface ResultsViewProps {
  result: SymptomCheckResponse;
}

export const ResultsView = ({ result }: ResultsViewProps) => {
  const [showRawJson, setShowRawJson] = useState(false);
  
  // Check if this is an emergency case
  const hasEmergency = result.recommended_next_steps?.some(step => 
    step.toLowerCase().includes('emergency') || 
    step.toLowerCase().includes('911') ||
    step.toLowerCase().includes('urgent')
  );

  const getConfidenceColor = (score: number) => {
    if (score >= 0.7) return "bg-secondary text-secondary-foreground";
    if (score >= 0.4) return "bg-primary/20 text-primary";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Emergency Warning */}
      {hasEmergency && (
        <Card className="border-warning bg-warning/10 animate-pulse" style={{ boxShadow: 'var(--shadow-warning)' }}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-warning" />
              <div>
                <CardTitle className="text-warning text-xl">Emergency Symptoms Detected</CardTitle>
                <CardDescription className="text-warning/80 font-semibold">
                  Seek immediate medical attention
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}

      {/* Conditions */}
      <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-medical)' }}>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Possible Conditions
          </CardTitle>
          <CardDescription>
            Ranked by likelihood based on provided symptoms (for educational purposes only)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {result.conditions?.map((condition, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-all"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-semibold text-lg">{condition.name}</h3>
                    <Badge variant="outline" className={getConfidenceColor(condition.confidence_score)}>
                      {(condition.confidence_score * 100).toFixed(0)}% confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {condition.reasoning}
                  </p>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                  #{condition.probability_rank}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recommended Next Steps */}
      <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-medical)' }}>
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            Recommended Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {result.recommended_next_steps?.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mt-0.5">
                  {index + 1}
                </span>
                <span className="flex-1 text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Additional Information Needed */}
      {result.needed_info && result.needed_info.length > 0 && (
        <Card className="shadow-lg border-primary/30">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Additional Information Helpful
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.needed_info.map((info, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary">•</span>
                  {info}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Raw JSON Viewer (for grading/debugging) */}
      <Collapsible open={showRawJson} onOpenChange={setShowRawJson}>
        <Card className="border-dashed">
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