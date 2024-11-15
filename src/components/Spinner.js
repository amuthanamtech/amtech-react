import React, { useEffect } from 'react';

const Spinner = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
