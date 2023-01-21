import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import ProductModal from "./ProductModal";

const ProductGridSingleSix = ({
  product,
  currency,
  addToCart,
  addToWishlist,
  addToCompare,
  cartItem,
  wishlistItem,
  compareItem,
  sliderClassName,
  spaceBottomClass,
  user,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { addToast } = useToasts();
  const date = new Date().toLocaleDateString();
  var offer = null;
  product.Deal.map((items) => {
    if (items.date == date) {
      offer = items.offer;
    }
  });
  var finalProductPrice;
  var finalDiscountedPrice;
  var wholesaler = false;
  if (user?.user == true || user == null) {
    if (offer) {
      var discountedPrice = getDiscountPrice(product.price, offer).toFixed(0);
    } else if (product.discount) {
      var discountedPrice = getDiscountPrice(
        product.price,
        product.discount
      ).toFixed(0);
    } else {
      var discountedPrice = null;
    }
    finalProductPrice = product.price;
    finalDiscountedPrice = discountedPrice;
  } else {
    wholesaler = true;
    finalProductPrice = product.price;
    finalDiscountedPrice = product.wholesaler;
  }
  const singlePage = () => {
    window.location.href = `${process.env.PUBLIC_URL}/product/${product.id}`;
  };
  return (
    <Fragment>
      <div
        className={`col-xl-4 col-md-6 ${
          sliderClassName ? sliderClassName : ""
        }`}
      >
        <div
          className={`product-wrap-6 ${
            spaceBottomClass ? spaceBottomClass : ""
          }`}
        >
          <div className="product-img">
            <Link onClick={singlePage}>
              <img
                className="default-img img-fluid"
                src={product.image[0].url}
                alt=""
              />
            </Link>
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {wholesaler ? (
                  ""
                ) : (
                  <>
                    {product.discount ? (
                      <span className="pink">-{product.discount}%</span>
                    ) : (
                      <>
                        {offer ? <span className="pink">-{offer}%</span> : ""}
                      </>
                    )}
                    {offer ? (
                      <>
                        <span className="purple text-warnin">Deal</span>
                      </>
                    ) : (
                      <>
                        {product.new ? <span className="purple">New</span> : ""}
                      </>
                    )}
                  </>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="product-content">
            <h3>
              <Link onClick={singlePage}>{product.name}</Link>
            </h3>

            <div className="product-price">
              {discountedPrice !== null ? (
                <Fragment>
                  {/* <span className="old">₹{finalProductPrice}</span> */}
                  <span>₹{finalDiscountedPrice}</span>
                </Fragment>
              ) : (
                <span>₹{finalProductPrice}</span>
              )}
            </div>

            {product.rating && product.rating > 0 ? (
              <div className="product-rating">
                <Rating ratingValue={product.rating} />
              </div>
            ) : (
              ""
            )}

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
                <button
                  className={wishlistItem !== undefined ? "active" : ""}
                  disabled={wishlistItem !== undefined}
                  title={
                    wishlistItem !== undefined
                      ? "Added to wishlist"
                      : "Add to wishlist"
                  }
                  onClick={() => addToWishlist(product, addToast)}
                >
                  <i className="pe-7s-like" />
                </button>
              </div>
              <div className="pro-same-action pro-cart">
                {product.affiliateLink ? (
                  <a
                    href={product.affiliateLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Buy now"
                  >
                    <i className="pe-7s-cart"></i>
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  <Link onClick={singlePage} title="Select option">
                    <i className="pe-7s-cart"></i>
                  </Link>
                ) : product.stock && product.stock > 0 ? (
                  <button
                    onClick={() => addToCart(product, addToast)}
                    className={
                      cartItem !== undefined && cartItem.quantity > 0
                        ? "active"
                        : ""
                    }
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={
                      cartItem !== undefined ? "Added to cart" : "Add to cart"
                    }
                  >
                    <i className="pe-7s-cart"></i>
                  </button>
                ) : (
                  <button disabled className="active" title="Out of stock">
                    <i className="pe-7s-cart"></i>
                  </button>
                )}
              </div>
              {/* <div className="pro-same-action pro-compare">
                <button
                  className={compareItem !== undefined ? "active" : ""}
                  disabled={compareItem !== undefined}
                  title={
                    compareItem !== undefined
                      ? "Added to compare"
                      : "Add to compare"
                  }
                  onClick={() => addToCompare(product, addToast)}
                >
                  <i className="pe-7s-shuffle" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedprice={discountedPrice}
        finalproductprice={finalProductPrice}
        finaldiscountedprice={finalDiscountedPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        addtocompare={addToCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

ProductGridSingleSix.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItem: PropTypes.object,
  compareItem: PropTypes.object,
  currency: PropTypes.object,
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  wishlistItem: PropTypes.object,
};

export default ProductGridSingleSix;
