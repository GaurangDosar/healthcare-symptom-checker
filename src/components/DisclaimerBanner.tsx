import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const DisclaimerBanner = () => {
  const [showFullDisclaimer, setShowFullDisclaimer] = useState(false);

  return (
    <>
      <Alert className="mb-6 border-warning bg-warning/10">
        <AlertCircle className="h-5 w-5 text-warning" />
        <AlertDescription className="ml-2 flex items-center justify-between flex-wrap gap-2">
          <span className="text-sm font-medium">
            Educational only — not medical advice(made for assignment). For emergencies call local emergency services.
          </span>
          <Button
            variant="link"
            className="h-auto p-0 text-primary underline"
            onClick={() => setShowFullDisclaimer(true)}
          >
            Read full disclaimer
          </Button>
        </AlertDescription>
      </Alert>

      <Dialog open={showFullDisclaimer} onOpenChange={setShowFullDisclaimer}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Important Medical Disclaimer</DialogTitle>
            <DialogDescription className="text-base space-y-4 pt-4">
              <p>
                <strong>DISCLAIMER:</strong> This tool is made only for a specific assignment by Gaurang Dosar and is not medical advice. 
                It does not replace a consultation with a licensed healthcare professional.
              </p>
              <p>
                If you are experiencing severe or life-threatening symptoms such as:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Chest pain</li>
                <li>Severe difficulty breathing</li>
                <li>Sudden weakness</li>
                <li>Uncontrolled bleeding</li>
                <li>Unresponsiveness</li>
                <li>High fever greater than 40°C (104°F)</li>
              </ul>
              <p className="font-semibold text-warning">
                Seek emergency medical care immediately by calling your local emergency services.
              </p>
              <p>
                This symptom checker uses AI technology that may provide inaccurate or incomplete information. 
                Always consult with a qualified healthcare provider for proper diagnosis and treatment.
              </p>
              <p className="text-sm text-muted-foreground">
                Your privacy is important. When you opt to save your query history, only anonymized data 
                (symptoms, age, sex) is stored. No personally identifiable information is retained.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};