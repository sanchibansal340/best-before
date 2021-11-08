import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function SearchBar() {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);

    // Fetch all items
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }

        axios.get('http://localhost:5000/api/items/', {headers})
            .then(response => setItems(response.data.items))
            .catch(err => console.log(err));    
    }, []);

    let filteredItems = search.length === 0 ? items : items.filter(item => item.itemName.toLowerCase().includes(search.toLowerCase()))
    if(filteredItems.length === 0) {
        filteredItems = items;
    }

    return (
        <main className="SearchBar">
            <form className="mb-4">
                <input
                    value={search}
                    onInput={e => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search all items"
                    className="w-100 py-2"
                />
            </form>
            <ItemList items={filteredItems} setItems={setItems} />
        </main>
    )
}

export default SearchBar;
