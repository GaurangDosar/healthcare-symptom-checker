// Mock Supabase client for LOCAL TESTING ONLY
// This allows you to test with the local Gemini server without Supabase

export const supabase = {
  functions: {
    invoke: async (functionName: string, options: any) => {
      try {
        const url = functionName === 'get-history' 
          ? 'http://localhost:3001/get-history'
          : 'http://localhost:3001/check-symptoms';
        
        const response = await fetch(url, {
          method: functionName === 'get-history' ? 'GET' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: functionName === 'get-history' ? undefined : JSON.stringify(options.body),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Network error' }));
          return { 
            data: null, 
            error: { message: errorData.error || `HTTP ${response.status}` } 
          };
        }

        const data = await response.json();
        return { data, error: null };
      } catch (error: any) {
        console.error('Local client error:', error);
        return { 
          data: null, 
          error: { message: error.message || 'Network error' } 
        };
      }
    },
  },
};
