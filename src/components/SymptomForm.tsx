import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import type { SymptomCheckRequest } from "@/types/symptom";

interface SymptomFormProps {
  onSubmit: (data: SymptomCheckRequest) => Promise<void>;
  isLoading: boolean;
}

export const SymptomForm = ({ onSubmit, isLoading }: SymptomFormProps) => {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState<string>("");
  const [sex, setSex] = useState<'male' | 'female' | 'other' | ''>("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ symptoms?: string; age?: string }>({});

  const validate = (): boolean => {
    const newErrors: { symptoms?: string; age?: string } = {};
    
    if (!symptoms.trim()) {
      newErrors.symptoms = "Symptoms are required";
    } else if (symptoms.length < 10) {
      newErrors.symptoms = "Please provide at least 10 characters describing your symptoms";
    } else if (symptoms.length > 1000) {
      newErrors.symptoms = "Symptoms description must be less than 1000 characters";
    }

    const ageNum = age ? parseInt(age) : null;
    if (age && (isNaN(ageNum!) || ageNum! < 0 || ageNum! > 150)) {
      newErrors.age = "Age must be between 0 and 150";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    const ageNum = age ? parseInt(age) : null;
    
    await onSubmit({
      symptoms: symptoms.trim(),
      age: ageNum,
      sex: sex || null,
      consentToStore: consent
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg" style={{ boxShadow: 'var(--shadow-medical)' }}>
      <CardHeader>
        <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Symptom Checker
        </CardTitle>
        <CardDescription>
          Describe your symptoms to receive educational information about possible conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Symptoms */}
          <div className="space-y-2">
            <Label htmlFor="symptoms" className="text-base font-semibold">
              Symptoms <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="symptoms"
              placeholder="Describe your symptoms in detail (e.g., headache for 3 days, mild fever, feeling tired)..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-[120px] resize-none"
              disabled={isLoading}
              aria-required="true"
              aria-invalid={!!errors.symptoms}
            />
            <div className="flex justify-between items-center">
              {errors.symptoms && (
                <p className="text-sm text-destructive" role="alert">{errors.symptoms}</p>
              )}
              <span className="text-xs text-muted-foreground ml-auto">
                {symptoms.length}/1000 characters
              </span>
            </div>
          </div>

          {/* Optional Demographics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age (optional)</Label>
              <Input
                id="age"
                type="number"
                placeholder="e.g., 28"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                disabled={isLoading}
                min="0"
                max="150"
                aria-invalid={!!errors.age}
              />
              {errors.age && (
                <p className="text-sm text-destructive" role="alert">{errors.age}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="sex">Sex (optional)</Label>
              <Select value={sex} onValueChange={(value) => setSex(value as any)} disabled={isLoading}>
                <SelectTrigger id="sex">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start space-x-3 rounded-lg border p-4 bg-muted/30">
            <Checkbox 
              id="consent" 
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
              disabled={isLoading}
            />
            <div className="space-y-1 leading-none">
              <Label
                htmlFor="consent"
                className="text-sm font-normal cursor-pointer"
              >
                Save anonymized query for history (optional)
              </Label>
              <p className="text-xs text-muted-foreground">
                Only symptoms, age, and sex will be stored anonymously. No personal identification.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full text-base h-12"
            disabled={isLoading}
            style={{ background: 'var(--gradient-primary)' }}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing symptoms...
              </>
            ) : (
              'Check Symptoms'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};