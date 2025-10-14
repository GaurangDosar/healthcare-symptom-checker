export interface Condition {
  name: string;
  probability_rank: number;
  confidence_score: number;
  reasoning: string;
}

export interface SymptomCheckResponse {
  conditions: Condition[];
  recommended_next_steps: string[];
  needed_info?: string[] | null;
  disclaimer: string;
  llm_metadata: {
    provider: string;
    model: string;
    prompt_version: string;
  };
}

export interface SymptomCheckRequest {
  symptoms: string;
  age?: number | null;
  sex?: 'male' | 'female' | 'other' | null;
  consentToStore: boolean;
}

export interface QueryHistory {
  id: string;
  symptoms: string;
  age: number | null;
  sex: string | null;
  response: SymptomCheckResponse;
  created_at: string;
}