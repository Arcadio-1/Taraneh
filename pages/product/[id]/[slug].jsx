import Head from "next/head";
import React, { Fragment } from "react";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";
import { getProduct } from "../../api/shop/data/getSingleProduct/helper";
import { getComments } from "../../api/shop/data/getComments/helper";

const ProductDetailsPage = (props) => {
  const { status, message, product, comments } = props;
  return (
    <Fragment>
      <Head>
        <title>{`فروشگاه اینترنتی کافه ترانه | ${product.title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={`${product.description}`} />
      </Head>
      <ProductDetails product={product} comments={comments.comments} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const productJson = await getProduct(id);
  const commentsJson = await getComments(id);
  const product = JSON.parse(productJson);
  const comments = JSON.parse(commentsJson);
  if (product.status === "error") {
    return {
      props: {
        status: product.status,
        message: product.message,
        product: {},
        comments: [],
      },
    };
  }
  if (product.status === "notFound") {
    return {
      props: {
        status: product.status,
        message: product.message,
        product: {},
        comments: [],
      },
    };
  }
  if (product.status === "success" && comments.status === "notfound") {
    return {
      props: {
        status: product.status,
        message: product.message,
        product: product.product,
        comments: [],
      },
    };
  }
  if (product.status === "success" && comments.status === "success") {
    return {
      props: {
        status: product.status,
        message: product.message,
        product: product.product,
        comments: comments.comments,
      },
    };
  }
}
export default ProductDetailsPage;
