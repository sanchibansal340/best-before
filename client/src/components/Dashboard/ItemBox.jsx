import React from 'react';

function ItemBox({ item, handleDelete }) {
    const { itemName, expDate } = item;
    const remDays = Math.ceil((new Date(expDate) - Date.now()) / (1000 * 60 * 60 * 24));

    return (
        <main className={`ItemBox card text-center col-lg-5 mb-3 ${remDays <= 0 ? 'border-danger' : ''}`}>
            <div className="card-body">
                <h5 className="fw-bold">
                    Expires in 
                    <span>
                        {` ${remDays} `}
                    </span>
                    days
                </h5>
                <h5 className="card-title text-muted">
                    {itemName}
                </h5>
                <button className="btn btn-danger" onClick={() => handleDelete(item)}>
                    Delete this Item
                </button>
            </div>
        </main>
    )
}

export default ItemBox;
