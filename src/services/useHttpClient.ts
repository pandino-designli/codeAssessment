import { useCallback, useState } from 'react';

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async <T>(
      url: string,
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
      body: any = null,
      headers: Record<string, string> = {},
    ): Promise<T> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method,
          body: body ? JSON.stringify(body) : null,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        });

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();
        return data;
      } catch (err: any) {
        setError(err.message || 'Unknown error occurred!');
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { isLoading, error, sendRequest };
};
