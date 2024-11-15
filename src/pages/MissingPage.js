import React from 'react'
import { Link } from 'react-router-dom';

const MissingPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Oops! The page you’re looking for doesn’t exist.</p>
        <p className="lead">It might have been moved or deleted.</p>
        <Link to="/" className="btn btn-primary">Go to Home</Link>
      </div>
    </div>
  )
}

export default MissingPage