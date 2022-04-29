import React from 'react'


export default function () {
  
    
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      <button className='btn btn-outline-success' id='populate-user'>New User</button>
    </form>
  </div>
</nav>
  )
}
