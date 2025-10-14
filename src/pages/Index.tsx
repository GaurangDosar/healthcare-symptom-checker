import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Stethoscope, History, Settings, ArrowLeft } from "lucide-react";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { SymptomForm } from "@/components/SymptomForm";
import { ResultsView } from "@/components/ResultsView";
import { HistoryView } from "@/components/HistoryView";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { SymptomCheckRequest, SymptomCheckResponse } from "@/types/symptom";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SymptomCheckResponse | null>(null);
  const [activeTab, setActiveTab] = useState("check");
  const { toast } = useToast();

  const handleSubmit = async (data: SymptomCheckRequest) => {
    setIsLoading(true);
    try {
      const { data: responseData, error } = await supabase.functions.invoke('check-symptoms', {
        body: data
      });

      if (error) {
        console.error('Function error:', error);
        toast({
          title: "Error",
          description: error.message || "Failed to analyze symptoms. Please try again.",
          variant: "destructive"
        });
        return;
      }

      if (responseData.error) {
        toast({
          title: "Error",
          description: responseData.error,
          variant: "destructive"
        });
        return;
      }

      setResult(responseData);
      toast({
        title: "Analysis Complete",
        description: "Your symptoms have been analyzed successfully.",
      });
    } catch (err) {
      console.error('Unexpected error:', err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToForm = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Healthcare Symptom Checker
                </h1>
                <p className="text-xs text-muted-foreground">Educational purposes only</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <DisclaimerBanner />

        {result ? (
          <div className="space-y-6">
            <Button 
              variant="outline" 
              onClick={handleBackToForm}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              New Check
            </Button>
            <ResultsView result={result} />
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="check" className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" />
                Check Symptoms
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="check" className="mt-0">
              <SymptomForm onSubmit={handleSubmit} isLoading={isLoading} />
            </TabsContent>

            <TabsContent value="history" className="mt-0">
              <HistoryView />
            </TabsContent>
          </Tabs>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            This is an educational tool only. Always consult qualified healthcare professionals for medical advice.
          </p>
          <p className="mt-2 text-xs">
            Built with React, TypeScript, and OpenAI GPT-5-nano
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;