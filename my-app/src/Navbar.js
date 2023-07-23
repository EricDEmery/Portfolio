import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("Home")} aria-current="page">Home</button>
          </li>
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("Blog")} aria-current="page">Blog</button>
          </li>
          <li className="nav-item">
            <button className="nav-link active" onClick={() => props.setPage("Portfolio")} aria-current="page">Portfolio</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}