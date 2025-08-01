import React, { useState, useMemo } from 'react';

const generateNames = () => {
  return Array.from({ length: 1000 }, (_, i) => `Person ${i + 1}`);
};

const SlowSearch = () => {
  const allNames = useMemo(() => generateNames(), []);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(allNames);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Simulate slow filtering
    const now = performance.now();
    while (performance.now() - now < 200) {} // block for 300ms

    const lower = value.toLowerCase();
    const result = allNames.filter((name) => name.toLowerCase().includes(lower));
    setFiltered(result);
  };

  return (
    <div>
      <h2>Search List</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type a name..."
      />
      <ul>
        {filtered.slice(0, 50).map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlowSearch;
