import ProductItem from "./ProductItem";
import { useState } from 'react';
import BasketItem from "./BasketItem";


const BasketList = () => {

    const [basket, setBasket] = useState([])

    const addToBasket = (product) => {
    setBasket([...basket, product])
    }

    const products = [
        {
            id: 1,
            name: "Яблоко"
        },
        {
            id: 2,
            name: "Груша"
        },
    ]

    return (
        <div>
            <h1>Список товаров</h1>
            { products.map(
                product => <ProductItem
                    item={product}
                    key={product.id}
                    addToBasket={addToBasket}
                />
            ) }
                <h2>Корзина</h2>
                <div>{basket.map((product, index) => <BasketItem item={product} key={index}/>)}</div>
        </div>
    )
}

export default BasketList;
