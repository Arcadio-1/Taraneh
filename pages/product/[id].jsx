import { Router } from "next/router";
import React from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { getComments, getPaths, getSingleProduct } from "../api/helper";

const ProductDetailsPage = (props) => {
  const { status, message, product, comments } = props;
  return <ProductDetails product={product} comments={comments} />;
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const productJson = await getSingleProduct(id);
  const commentsJson = await getComments(id);
  const product = JSON.parse(productJson);
  const comments = JSON.parse(commentsJson);
  console.log(comments);
  if (product.status === "error") {
    return {
      props: {
        status: product.status,
        message: product.message,
        product: {},
        comments: [],
      },
      revalidate: 6000,
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
      revalidate: 6000,
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
      revalidate: 6000,
    };
  }
  if (product.status === "success" && comments.status === "success") {
    return {
      props: {
        status: product.status,
        message: product.message,
        product: product.product,
        comments: comments.commentsList,
      },
      revalidate: 6000,
    };
  }
}

export async function getStaticPaths() {
  const pathsJson = await getPaths();
  const paths = JSON.parse(pathsJson);
  if (!paths || paths.status === "error") {
    console.log(paths.message || "خطا");
    return;
  }
  const { allPath } = paths;
  const pathesParams = allPath.map((item) => {
    return { params: { id: item.id } };
  });

  return { paths: pathesParams, fallback: false };
}

export default ProductDetailsPage;