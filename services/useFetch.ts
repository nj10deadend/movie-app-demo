import { useState, useEffect } from 'react';

// function useFetch<T = any>(
//     endpoint: string,
//     query: string,
//     options?: RequestInit
// ): UseFetchResult<T> {
//     const [data, setData] = useState<T | null>(null);
//     const [loading, setIsLoading] = useState<boolean>(true);
//     const [error, setError] = useState<Error | null>(null);

//     useEffect(() => {
//         let isMounted = true;
//         setIsLoading(true);
//         setError(null);

//         getMovies(endpoint, query, options)
//             .then((response: T) => {
//                 if (isMounted) {
//                     setData(response);
//                     setIsLoading(false);
//                 }
//             })
//             .catch((err: Error) => {
//                 if (isMounted) {
//                     setError(err);
//                     setIsLoading(false);
//                 }
//             });

//         return () => {
//             isMounted = false;
//         };
//     }, [endpoint, options, query]);

//     return { data, loading, error };
// }

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch: boolean = true) => {
    const [data, setData] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await fetchFunction();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err as Error : new Error('An unknown error occurred'));
        } finally {
            setIsLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setIsLoading(false);
        setError(null);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
        return () => {};
    }, []);

    return { data, isLoading, error, refetch: fetchData, reset };
}

export default useFetch;