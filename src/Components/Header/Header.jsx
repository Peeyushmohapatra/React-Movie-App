import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"


const Header = () => {
  return (
    <div className='mainHeader'>
        <div className="leftHeader">
            <Link to="/">
            <h2>Movie App</h2>
            </Link>
            <div className="searchItems">
                <input type="text" placeholder='Search Here' />
                <button>Search</button>
            </div>
        </div>
        <div className="rightHeader">
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
        </div>
    </div>
  )
}

export default Header