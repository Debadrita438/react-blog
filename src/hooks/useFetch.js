import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConstant = new AbortController();
        fetch(url, { signal: abortConstant.signal })
        .then(res => {
            if(!res.ok) {
                throw Error('Couldn\'t fetch data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('User has aborted the fetch.');
            } else {
                setIsPending(false);
                setError(err.message);
            }
        });
        return () => abortConstant.abort();
    }, [url]);
    return { data, isPending, error };
}

export default useFetch;