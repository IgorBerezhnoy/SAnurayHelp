import React from 'react';

type productsType={
    products:productType[]
    deleteProduct:(id:number)=>void

}
type productType={
    id: number
    src: string
    title: string,
    description: string
    price: number
}



export const ProductCart = (props:productsType) => {



    return (
        <div>
            {props.products.map(el=>{
                return  <div key={el.id} className="products ios apple" id="iphone-x">
                    <button onClick={()=>props.deleteProduct(el.id)}>delete</button>
                    <img className="product-image"
                         src={el.src}/>
                    <p className="product-name">{el.title}</p>
                    <p className="product-description">{el.description}</p>
                    <div>
                        <div>
                            <button >-</button>
                            <input type="text"/>
                            <button>+</button>
                        </div>
                    </div>
                    <p className="product-price">{el.price}</p>
                    <button className="add-to-cart" id="test">ADD TO CART</button>
                </div>
            })}
        </div>
    );
};
