import React from 'react';

function ItemBox({ item }) {
    const { itemName, expDate } = item;

    return (
        <main className="ItemBox card text-center col-lg-5 mb-3">
            <div className="card-body">
                <h5 className="fw-bold">
                    Expires in 
                    <span>
                        {` ${Math.ceil((new Date(expDate) - Date.now()) / (1000 * 60 * 60 * 24))} `}
                    </span>
                    days
                </h5>
                <h5 className="card-title text-muted">
                    {itemName}
                </h5>
            </div>
        </main>
    )
}

export default ItemBox;
