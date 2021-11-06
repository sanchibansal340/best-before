import React from 'react';

function ItemBox({ item }) {
    const { itemName, expDate } = item;

    return (
        <main className="ItemBox card text-center col-lg-6 mb-3">
            <div className="card-body">
                <h5 className="card-title text-primary">
                    {itemName}
                </h5>
            </div>
            <div className="card-footer text-danger fw-bold">
                Expires in {Math.ceil((new Date(expDate) - Date.now()) / (1000 * 60 * 60 * 24))} days
            </div>
        </main>
    )
}

export default ItemBox;
