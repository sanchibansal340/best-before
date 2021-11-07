import React, { useEffect, useState } from 'react';
import ItemBox from './ItemBox';

// Note: map and extract items from user profile
function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            const res = await fetch('http://localhost:5000/api/items/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
            });

            const data = await res.json();
            setItems(data.items);
        }

        fetchItems();
    }, []);

    return (
        <main className="ItemList row justify-content-between">
            {items.length === 0 ? (
                <p className="alert alert-info" 
                    role="alert"
                >
                    No items added yet
                </p>
            ) : items.map((item) => (
                <ItemBox item={item} key={item._id} />
            ))}
        </main>
    )
}

export default ItemList
