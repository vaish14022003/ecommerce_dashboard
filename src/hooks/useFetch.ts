// src/hooks/useFetch.ts
import { useState, useEffect } from "react";

type FetchFunction<T> = () => Promise<{ data: T }>;

const useFetch = <T>(fetchFunction: FetchFunction<T>, deps: any[] = []) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let mounted = true;

        fetchFunction()
            .then((res) => {
                if (mounted) setData(res.data);
            })
            .catch((error) => console.error("Fetch error:", error))
            .finally(() => {
                if (mounted) setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, deps);

    return { data, loading };
};

export default useFetch;
