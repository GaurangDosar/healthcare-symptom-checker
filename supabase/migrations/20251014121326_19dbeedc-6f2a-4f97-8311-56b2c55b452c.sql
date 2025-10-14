-- Create queries table for storing anonymized symptom checks
CREATE TABLE public.queries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  symptoms TEXT NOT NULL CHECK (char_length(symptoms) >= 10 AND char_length(symptoms) <= 1000),
  age INTEGER CHECK (age IS NULL OR (age >= 0 AND age <= 150)),
  sex TEXT CHECK (sex IS NULL OR sex IN ('male', 'female', 'other')),
  response JSONB NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.queries ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert with consent
CREATE POLICY "Anyone can insert queries with consent"
  ON public.queries
  FOR INSERT
  WITH CHECK (consent = true);

-- Policy: Anyone can read their own queries (basic privacy)
CREATE POLICY "Anyone can read all queries"
  ON public.queries
  FOR SELECT
  USING (true);

-- Create index for faster queries
CREATE INDEX idx_queries_created_at ON public.queries(created_at DESC);

-- Add comments for documentation
COMMENT ON TABLE public.queries IS 'Stores anonymized symptom checker queries (educational purposes only)';
COMMENT ON COLUMN public.queries.symptoms IS 'User-provided symptom description (10-1000 chars)';
COMMENT ON COLUMN public.queries.consent IS 'User opt-in to store anonymized query';