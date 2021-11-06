import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import '../../assets/styles/main.scss';
import ShowToast from '../../utils/ShowToast';

function AddItem() {
    const [itemName, setItemName] = useState("");
    const [expDate, setExpDate] = useState(Date.now());
    const [error, setError] = useState({});

    const history = useHistory();

    const resetForm = () => {
        setItemName("");
        setExpDate(Date.now());
    }

    const onSubmit = async(e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/items/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                itemName, expDate
            }),
        });

        resetForm();

        const data = await response.json();

        if(!response.ok) {
            setError(data);
        }
        else {
            <ShowToast message={data} />
            history.push('/dashboard');
            setError({});
        }
    }

    return (
        <main className="AddItem container">
            <Link to="/dashboard" className="btn mb-3">
                <i className="fas fa-long-arrow-alt-left"></i> 
                {' '} 
                Back to Dashboard
            </Link>
            <section className="card align-items-center py-4 bg-primary">
                <form onSubmit={onSubmit}>
                    <div className="row g-3 align-items-center">
                        <label className="form-label">
                            <span className="fw-bold">
                                Name of item:
                            </span>
                            <input 
                                type="text" 
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                                className="form-control" 
                                placeholder="Item Name" 
                            />
                        </label>
                    </div>
                    <div className="row">
                        <label className="form-label">
                            <span className="fw-bold">
                                Enter expiry date {' '}
                                <span className="fst-italic">
                                    (if only year is given, select 1 January of that year)
                                </span>
                            </span> 
                            <input 
                                type="date" 
                                value={expDate}
                                onChange={(e) => setExpDate(e.target.value)} 
                                className="form-control form-control-date" 
                            />
                        </label>
                    </div>
                    <div className="row">
                        <button type="submit" 
                            className="btn btn-second my-3"
                        >
                            Add item
                        </button>
                    </div>
                </form>
            </section>
            <section className="alert alert-danger errors text-center mt-4" role="alert">
                {(error.title || error.expDate) ? (
                    <small className="text-danger fw-bold">
                        {error.title}
                        <br />
                        {error.expDate}
                    </small>
                ) : ""}
            </section>
        </main>
    )
}

export default AddItem
