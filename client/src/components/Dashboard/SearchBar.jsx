import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <main className="SearchBar">
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
        </main>
    )
}

export default SearchBar;
