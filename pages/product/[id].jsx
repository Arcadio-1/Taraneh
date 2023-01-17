import { Router } from "next/router";
import React from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { getComments, getPaths, getSingleProduct } from "../api/helper";

const ProductDetailsPage = (props) => {
  // console.log(props);
  const { status, message, product, comments } = props;
  // const
  // console.log(comments);
  return <ProductDetails product={product} comments={comments} />;
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const productJson = await getSingleProduct(id);
  const commentsJson = await getComments(id);
  const product = JSON.parse(productJson);
  const comments = JSON.parse(commentsJson);
  // console.log(productJson);
  if (product.status === "error") {
    return {
      props: { status: product.status, message: product.message, product: {} },
      revalidate: 600,
    };
  }
  if (product.status === "notFound") {
    return {
      props: { status: product.status, message: product.message, product: {} },
      revalidate: 600,
    };
  }
  if (product.status === "success") {
    return {
      props: {
        status: product.status,
        message: product.message,
        product: product.product,
        comments: comments.comments[id],
      },
      revalidate: 6000,
    };
  }
}

export async function getStaticPaths() {
  const pathsJson = await getPaths();
  const paths = JSON.parse(pathsJson);
  // console.log(paths);
  if (!paths || paths.status === "error") {
    console.log(paths.message || "خطا");
    return;
  }
  const { allPath } = paths;
  const pathesParams = allPath.map((item) => {
    // return { params: { id: item.id, title: item.title } };
    return { params: { id: item.id } };
  });
  // console.log(pathesParams);

  return { paths: pathesParams, fallback: false };
}

export default ProductDetailsPage;
