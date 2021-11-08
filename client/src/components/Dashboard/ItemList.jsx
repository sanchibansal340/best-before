import React from 'react';
import ItemBox from './ItemBox';

// Note: map and extract items from user profile
function ItemList({ items, setItems }) {

    // Function: Delete an item
    async function handleDelete(item) {
        const id = item._id;

        await fetch(`/api/items/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(() => {
            setItems(items.filter((elem) => {
                return elem._id !== id;
            }));
        })
    }

    return (
        <main className="ItemList row justify-content-between">
            {items.length === 0 ? 
                (
                    <p className="alert alert-info" 
                        role="alert"
                    >
                        No items added yet
                    </p>
                ) : items.map((item) => (
                    <ItemBox item={item} key={item._id} handleDelete={handleDelete} />
                ))
            }
        </main>
    )
}

export default ItemList
