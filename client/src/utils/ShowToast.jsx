import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ShowToast({ msgBody, msgError }) {
    const variant = msgError ? 'Danger' : 'Success';
    const [show, setShow] = useState(false);

    return (
        <ToastContainer position="bottom-end">
            <Toast 
                bg={variant.toLowerCase()}
                onClose={() => setShow(false)} 
                show={show} 
                delay={3000} 
                autohide
            >
                <Toast.Body 
                    className={variant === 'Dark' && 'text-white'}
                >
                    {msgBody}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ShowToast;
