import Head from "next/head";
import React, { Fragment } from "react";
import ProductDetails from "../../../components/ProductDetails/ProductDetails";
import { getProduct } from "../../api/shop/data/getSingleProduct/helper";
import { getComments } from "../../api/shop/data/getComments/helper";
import { getPaths } from "../../api/shop/functions/getPaths";
import LoadingSpinner from "../../../components/ui/LoadingSpiner/loadingSpiner";

const ProductDetailsPage = (props) => {
  const { status, message, product, comments } = props;
  console.log(status);
  console.log(message);
  console.log(comments);
  return (
    <Fragment>
      <Head>
        <title>{`فروشگاه ایرنترنتی کافه ترانه | ${product.title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={`${product.description}`} />
      </Head>
      {status === "success" && (
        <ProductDetails product={product} comments={comments} />
      )}
      {status === "error" && <LoadingSpinner text={"صفحه مورد نظر یافت نشد"} />}
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const productJson = await getProduct(id);
  const commentsJson = await getComments(id);
  // console.log(commentsJson);
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
  if (product.status === "success" && comments.status === "error") {
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
        comments: comments.comments,
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
