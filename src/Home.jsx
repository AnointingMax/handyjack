import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getNewestProducts, getRandomCategories } from "./api";
import { IMAGE_BASEURL } from "./constants";
import Loader from "./Loader";

function Home() {
	const { data: categories, isLoading: isCategoriesLoading } = useQuery(
		["categories"],
		() => getRandomCategories()
	);

	const { data: products, isLoading: isProductsLoading } = useQuery(
		["newest"],
		() => getNewestProducts()
	);

	return (
		<div className="home-container">
			<div className="main-slider slider slick-initialized slick-slider">
				<div
					className="slider-item"
					style={{
						backgroundImage: "url('assets/images/slideshow1-2.jpg')",
						backgroundPosition: "50%",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-12 offset-lg-6 offset-md-6">
								<div className="slider-caption">
									<span className="lead">Welcome to</span>
									<h1 className="mt-2 mb-5">
										<span className="text-color">Market </span>Place
									</h1>
									<Link to="/vendors" className="btn btn-main">
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="category section pb-4">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="title text-center">
								<h2>Categories</h2>
								<p>Browse through your favourites</p>
							</div>
						</div>
					</div>
					<div className="row">
						{isCategoriesLoading ? (
							<Loader />
						) : (
							<>
								{categories.map((category, index) => (
									<div className="col-lg-3 col-sm-12 col-md-6 mb-4" key={index}>
										<div className="cat-item mb-4 mb-lg-0">
											<div className="item-info">
												<h4 className="mb-4 text-capitalize">
													{category.name}
												</h4>

												<Link
													to={`/category/${category.slug}`}
													className="read-more"
												>
													Shop now
												</Link>
											</div>
										</div>
									</div>
								))}
							</>
						)}
					</div>
				</div>
			</section>

			<section className="section products-main">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="title text-center">
								<h2>New arrivals</h2>
								<p>Browse through a catalogue of the newest products</p>
							</div>
						</div>
					</div>

					<div className="row">
						{isProductsLoading ? (
							<Loader />
						) : !!products?.length ? (
							<>
								{products?.map((product, index) => (
									<div
										className="col-lg-4 col-12 col-md-6 col-sm-6"
										key={index}
									>
										<div className="product">
											<div className="product-wrap">
												<Link to={`/product/${product._id}`}>
													<img
														className="img-fluid w-100 mb-3 imege"
														src={`${IMAGE_BASEURL}${product.images.multipleImages.bucket[0]}/${product.images.multipleImages.key[0]}`}
														alt="product-img"
													/>
												</Link>
											</div>

											<div className="product-info">
												<h2 className="product-title h5 mb-0">
													<Link to={`/product/${product._id}`}>
														{product.name}
													</Link>
												</h2>
												<span className="price">
													&#8358; {product.price.toLocaleString()}
												</span>
											</div>
										</div>
									</div>
								))}
							</>
						) : (
							<div className="col-12 d-flex justify-content-center">
								Nothing to see
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
export default Home;
