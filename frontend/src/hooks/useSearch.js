import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useSearch = (navigateOnSearch = false, readFromUrl = false) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(readFromUrl ? searchParams.get('q') || '' : '');
    const navigate = useNavigate();

    const onSearch = (q) => {
        setQuery(q);
        if (navigateOnSearch) {
            navigate(`/products?q=${q}`);
        } else {
            setSearchParams({ q });
        }
    };

    return { query, setQuery, onSearch };
};

export default useSearch;