import React from "react";
import BuyProductButton from "../../components/BuyProductButton";
import Header from "../../components/Header";
import Request from "../../components/Request";

class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <React.Fragment>
                <Header/><br/>
                <section>
                    <h3 className="section-title bold">Products</h3>
                    <div className="cards__grid ">
                        <Request method="GET" path="/Shop/products">
                            {({ loading, error, data, sendRequest }) => {
                                if (loading || !data) return null
                                if (error) return error.message;
                                let { products } = data;
                                return (
                                    <React.Fragment>
                                        {products.map(product => {
                                            return (
                                                <div className="card">
                                                    <div className="card__img">
                                                        <div className="card__img-image" style={{backgroundImage: `url("${product.imageUrl || "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"}")`}} />
                                                    </div>
                                                    <div className="card__below">
                                                        <h5 className="bold">{product.name} for {product.price} tokens</h5>
                                                        <BuyProductButton onSuccess={sendRequest} product_id={product.id}/>
                                                    </div>
                                                </div>                                            
                                            )
                                        })}
                                    </React.Fragment>
                                )
                            }}
                        </Request>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Shop;