import React from "react";
import Modal from "../Layout/Module/Modal";
import { Product } from "../../Types/interfaces";
import Rate from "../ProductDetails/components/Header/Components/Rate";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import TagsImage from "../ProductDetails/components/Body/Components/Image/TagsImage";
import MainImage from "../ProductDetails/components/Body/Components/Image/MainImage";
import SubImage from "../ProductDetails/components/Body/Components/Image/SubImage";
import Actions from "../ProductDetails/components/Body/Components/Content/Actions";
import Status from "../ProductDetails/components/Body/Components/Content/Status";
import ShortDescription from "../ProductDetails/components/Body/Components/Content/ShortDescription";
import CheckList from "../ProductDetails/components/Body/Components/Content/CheckList";
import Meta from "../ProductDetails/components/Body/Components/Content/Meta";
import Sharing from "../ProductDetails/components/Body/Components/Content/Sharing";
import OrderForm from "../ProductDetails/components/Body/Components/Content/OrderForm/OrderForm";
import Message from "../ProductDetails/components/Body/Components/Message/Message";
import Link from "next/link";
import CloseIcon from "../ui/Icons/CloseIcon";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui/uiSlice";

type Props = {
  product: Product;
  modalRef: any;
  onClose: () => void;
};
const ProductModal = (props: Props) => {
  console.log(props.product.title);
  const dispatch = useDispatch();

  const {
    packaging,
    category,
    categoryAddress,
    title,
    id,
    brandFn,
    brandEn,
    statistics,
    imageLink,
    price,
    sell,
    imgList,
    status,
    description,
    producingCountry,
    packingCountry,
    coffeeType,
    taste,
    tags,
  } = props.product;
  // const address = [
  //   { id: 3, title: category, link: `/pruducts/${categoryAddress}` },
  //   { id: 4, title: title, link: `/product/${id}/${title}` },
  // ];
  return (
    <Modal>
      <div className=" productModal" ref={props.modalRef}>
        <div
          className="mb-5 hover:cursor-pointer"
          onClick={() => {
            props.onClose();
            dispatch(uiAction.hideBackDrop());
          }}
        >
          <CloseIcon />
        </div>
        <div className="productModal-body">
          <div className=" productModal-content flex max-md:flex-col">
            <div className="productDetails-image">
              <TagsImage offPersent={price.offPersent} sell={sell} />
              <MainImage
                subImages={imgList}
                mainImage={imageLink}
                title={title}
              />
              <SubImage title={title} subImages={imgList} />
              <Actions />
            </div>
            <div className="productDetails-details flex flex-col gap-5">
              <div className="productDetails-content">
                <div className="productModal-header">
                  {/* <div className="mb-4 flex items-center justify-start gap-1">
                    <label className="text-md">دسته بندی :</label>
                    <Link
                      className="font-normal text-lg text-dark_2"
                      href={`/pruducts/${categoryAddress}`}
                    >
                      {category}
                    </Link>
                  </div> */}
                  <div className="text-2xl mb-5">
                    <h1>{title}</h1>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-3">
                    <div>
                      <label>برند :</label>
                      <span>{brandFn}</span>
                    </div>
                    <div>
                      <Rate
                        rate={statistics.rate}
                        buyerLiked={statistics.buyerLiked}
                      />
                    </div>
                  </div>
                </div>
                <Status status={status} />
                <ShortDescription description={description} />
                <CheckList
                  packingCountry={packingCountry}
                  producingCountry={producingCountry}
                  coffeeType={coffeeType}
                  taste={taste}
                />
                <Meta tags={tags} category={category} />
                <Sharing />
              </div>
              <div className="productDetails-message">
                <OrderForm
                  availableWeights={packaging.value}
                  availableGrind={packaging.availableGrind}
                  price={price}
                  id={id}
                />
                <Message />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
