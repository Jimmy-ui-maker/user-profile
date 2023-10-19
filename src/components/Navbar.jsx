import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md shadow" data-aos="fade-down" data-aos-delay="5000">
    <div className="container">
      <Link href="/" className="navbar-brand">
        <span className="fw-bold  text-success">
          User Page
        </span>
      </Link>
      <button
        className="navbar-toggler shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/add-user" className="nav-link text-success">
              Add User
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
