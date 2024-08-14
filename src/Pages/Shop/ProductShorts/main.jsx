import './main.scss'
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';

function Shorts(){
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function getShorts() {
            const res = await axios.get('https://66b1ec391ca8ad33d4f5befb.mockapi.io/ShortsAndSkirts')
            setProducts(res.data)
        }
        getShorts()
    }, [])

    return(
        <div className='shop container'>

        <div className="shop_menu">

        <select
            onChange={(event) => {
                const sort = event.target.value;

                if (sort === 'highToLow') {
                    setProducts([...products].sort((a, b) => b.price - a.price));
                } else if (sort === 'lowToHigh') {
                    setProducts([...products].sort((a, b) => a.price - b.price));
                }
            }}
        >
            <option>Sort</option>
            <option value="highToLow">Sort By High To Low</option>
            <option value="lowToHigh">Sort By Low To High</option>
        </select>

        <div className="shop_menu_search">
        <input className="" type="search" placeholder="Search..." onChange={(event) => setSearch(event.target.value)}/>
        </div>

        </div>



        <div className="shop_product">
            {products.filter(obj => obj.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
                <div className="shop_product_card" key={product.id}>
                    <div className="shop_product_card_img">
                        <img src={product.img} />
                    </div>

                    <div className="shop_product_card_text">
                    <h1><Link to={`/shorts/${product.id}`} className='h1'>{product.brand_name}</Link></h1>
                        <h3><Link to={`/shorts/${product.id}`} className="h3">{product.name}</Link></h3>
                        <p>{product.id >= 7 && product.id <= 8 ? `${product.price}₽` : `${product.price}$`}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
    )

}

export default Shorts;