import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductRate from "./productRate";
import ProductPrice from "./ProductPrice";
import ExpansIcon from "../Icons/ExpansIcon";
import LikeIcon from "../Icons/LikeIcon";
import ProductModal from "../../productModal/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import useToggleMenu from "../../../Hook/UseToggoleMenu";
import { uiAction } from "../../../store/ui/uiSlice";

const ProductCard = (props) => {
  const { id, price, title, sell, statistics, imageLink, status } = props.item;
  console.log(imageLink);

  const isBackdropShowen = useSelector((state) => state.ui.isShowBackDrop);

  const { isShowMenu, menuRef, showMenuHandler } = useToggleMenu();
  const dispatch = useDispatch();

  const closeSideMenuHandler = useCallback(() => {
    dispatch(uiAction.hideBackDrop());
    dispatch(uiAction.closeModal());
  }, [dispatch]);

  useEffect(() => {
    if (!isBackdropShowen) {
      closeSideMenuHandler();
    }
  }, [isBackdropShowen, closeSideMenuHandler]);

  // console.log(props.item);

  return (
    <div
      className={`productCard ${props.listStyle === "1" && "showInRow"}`}
      onMouseOver={() => {}}
      // ref={menuRef}
    >
      {isShowMenu && <ProductModal modalRef={menuRef} product={props.item} />}
      <div className="productCard-thumbnail">
        <div className="productCard-thumbnail-tags">
          {price.offPersent > 0 && (
            <p className="productCard-thumbnail-tags-offPersent">
              %{price.offPersent}
            </p>
          )}
          {sell === "special" && (
            <p className="productCard-thumbnail-tags-special">فروش ویژه</p>
          )}
          {sell === "topsell" && (
            <p className="productCard-thumbnail-tags-topSell">پرفروش</p>
          )}
        </div>
        <div className="productCard-thumbnail-icons">
          <div
            onClick={() => {
              showMenuHandler();
              dispatch(uiAction.showBackDrop());
            }}
            title="مشاهده سریع"
            className="productCard-thumbnail-icons-expans"
          >
            <ExpansIcon />
          </div>
          <div
            title="افزودن به علاقه مندی ها"
            className="productCard-thumbnail-icons-like"
          >
            <LikeIcon />
          </div>
        </div>
        <div className="productCard-thumbnail-image">
          <Link href={`product/${id}/${title}`}>
            <Image src={imageLink} alt={title} width={400} height={400} />
          </Link>
        </div>
      </div>
      <div className="productCard-down">
        <div className="productCard-content">
          <h3 className="productCard-content-title">{title}</h3>
          <p
            className={`productCard-content-availability ${
              status === "Available" ? "available" : "notAvailable"
            }`}
          >
            {status === "Available" ? "موجود" : "ناموجود"}
          </p>
          <ProductRate rate={statistics.rate} />
          <ProductPrice price={price.value} offPersent={price.offPersent} />
        </div>
        <div className="productCard-action">
          {/* <button className="productCard-action-submitBtn">
            افزودن به سبد
          </button> */}
          {/* <div className="productCard-action-quantity">
          <div className="productCard-action-quantity-plus">
            <PlusIcon />
          </div>
          <input
            type={"text"}
            readOnly={true}
            className="productCard-action-quantity-input"
          />
          <div className="productCard-action-quantity-minus">
            <MinusIcon />
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
