import React from "react";
import BuyProductButton from "../../components/BuyProductButton";
import Header from "../../components/Header";
import InfoSideBar from "../../components/InfoSideBar";
import Request from "../../components/Request";
import SideBar from "../../components/SideBar";
import SimpleSlider from "../../components/StoreSlider";

class Store extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<React.Fragment>
				<SideBar />
				<div className="main-layout">
					<SimpleSlider/>
					{/* <div className="slider">
						<div className="slider-card">
							<div className="slider-card__content">
								<div className="slider-card__left">
									<h3>Up to 90% off weapons, kits &amp; more</h3>
									<h4>Black Friday Deals</h4>
								</div>
								<div className="slider-card__right">
									<div className="slider-card__img">
										<img src="./toolkit/images/cod.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="slider-card">
							<div className="slider-card__content">
								<div className="slider-card__left">
									<h3>Up to 30% off kits, weapons &amp; more</h3>
									<h4>Gaming day  Deals</h4>
								</div>
								<div className="slider-card__right">
									<div className="slider-card__img">
										<img src="./toolkit/images/cod.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div> */}
					<section className="store-section">
						<div className="cards__grid long">
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
															<div className="card__img-image" style={{ backgroundImage: `url("${product.imageUrl || "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"}")` }} />
														</div>
														<div className="card__below">
															<h5 className="bold">{product.name}</h5>
															<p>
																{product.price}
																<span><img src="./toolkit/images/sica-token.svg" alt="" /></span>
															</p>
															{/* <BuyProductButton onSuccess={sendRequest} product={product}/> */}
														</div>
													</div>
												)
												return (
													<div className="card">
														<div className="card__img">
															<div className="card__img-image" style={{ backgroundImage: `url("${product.imageUrl || "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"}")` }} />
														</div>
														<div className="card__below">
															<h5 className="bold">{product.name} for {product.price} tokens</h5>
															{/* <BuyProductButton onSuccess={sendRequest} product={product} /> */}
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
				</div>
				<InfoSideBar />
			</React.Fragment>
		)
	}
}

export default Store;