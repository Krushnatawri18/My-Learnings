import React, { useState, useMemo, useTransition, useEffect } from 'react';

const generateNames = () => {
    return Array.from({ length: 1000 }, (_, i) => `Person ${i + 1}`);
};

const SlowSearch = () => {
    const allNames = useMemo(() => generateNames(), []);
    const [query, setQuery] = useState('');
    const [filtered, setFiltered] = useState(allNames);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        // Simulate slow filtering
        const now = performance.now();
        while (performance.now() - now < 200) { } // block for 200ms

        const lower = value.toLowerCase();
        startTransition(() => {
            const result = allNames.filter((name) =>
                name.toLowerCase().includes(lower)
            );
            setFiltered(result);
        });
    };

    useEffect(() => {
        console.log('Rendered');
    }, [query]);

    return (
        <div>
            <h2>Search List</h2>
            {/* fetching and rendering that large list blocks the main thread causing lag in input box */}
            <input
                type="text" 
                value={query}
                onChange={handleChange}
                placeholder="Type a name..."
            />
            {isPending && <div style={{ color: 'orange ' }}>Searching..</div>}
            <ul>
                {filtered.slice(0, 50).map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SlowSearch;
