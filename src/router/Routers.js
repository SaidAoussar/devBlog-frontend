import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'

const Home = ()=>(
    <div>
        <h3>Home</h3>
    </div>
)

const Category = ()=>(
    <div>
        <h3>Category</h3>
    </div>
)

const Product = ()=>(
    <div>
        <h3>Product</h3>
    </div>
)

export default function Routers() {
    return (
        <div>
            <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/category">Category</Link></li>
                  <li><Link to="/product">Product</Link></li>
              </ul>  
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
            </Routes>

        </div>
    )
}
