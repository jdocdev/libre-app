import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useSearch = (navigateOnSearch = false, readFromUrl = false) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(readFromUrl ? searchParams.get('q') || '' : '');
    const [offset, setOffset] = useState(parseInt(searchParams.get('offset')) || 0);
    const [limit] = useState(3); // Fijo en 3 productos por página

    const navigate = useNavigate();

    useEffect(() => {
        if (readFromUrl) {
            setQuery(searchParams.get('q') || '');
            setOffset(parseInt(searchParams.get('offset')) || 0);
        }
    }, [searchParams, readFromUrl]);

    const onSearch = (q) => {
        const newOffset = 0; // Reset offset on new search
        setQuery(q);
        setOffset(newOffset);
        if (navigateOnSearch) {
            navigate(`/products?q=${q}&offset=${newOffset}&limit=${limit}`);
        } else {
            setSearchParams({ q, offset: newOffset, limit });
        }
    };

    const onPageChange = (newOffset) => {
        setOffset(newOffset);
        if (navigateOnSearch) {
            navigate(`/products?q=${query}&offset=${newOffset}&limit=${limit}`);
        } else {
            setSearchParams({ q: query, offset: newOffset, limit });
        }
    };

    return { query, setQuery, offset, limit, onSearch, onPageChange };
};

export default useSearch;