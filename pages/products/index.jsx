import React, { Fragment, useEffect, useState } from "react";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";

import ShopHero from "../../components/Products/Main/ShopHero";
import ListingManage from "../../components/Products/Main/ListingManage";
import ProductsList from "../../components/Products/Main/ProductsList";
import PaginationNav from "../../components/Products/Main/PaginationNav";

import Brands from "../../components/Products/SideMenu/Brands";
import FilterByPrice from "../../components/Products/SideMenu/FilterByPrice";
import Status from "../../components/Products/SideMenu/Status";
import Categories from "../../components/Products/SideMenu/Categories";
import SideAd from "../../components/Products/SideMenu/SideAd";
import { curentPageProducts } from "../api/helper";
import LoadingSpiner from "../../components/ui/LoadingSpiner/loadingSpiner";
import FilterMenu from "../../components/Products/ModuleMenu/filterMenu";
import Head from "next/head";

const index = (props) => {
  // console.log(props);
  if (props.allProducts.length === 0) {
    <LoadingSpiner text={"محصولی یافت نشد"} />;
  }
  return (
    <Fragment>
      <Head>
        <title>فروشگاه ایرنترنتی کافه ترانه | لیست محصولات</title>
        <meta name="description" content="لیست محصولات کافه ترانه" />
      </Head>
      <div className="productsPage">
        <section className="productsPage-breadcrumbs">
          <Breadcrumbs links={[{ link: "/products", title: "محصولات" }]} />
        </section>
        <section className="productsPage-body">
          <aside className="productsPage-aside hideInMD">
            <Categories products={props.allProducts} />
            <FilterByPrice products={props.allProducts} />
            <Status />
            <Brands products={props.allProducts} />
            <SideAd products={props.allProducts} />
            <FilterMenu products={props.allProducts} />
          </aside>
          <main className="productsPage-main">
            <ShopHero />
            <ListingManage />
            <ProductsList products={props.products} />
            <PaginationNav numberOfPages={props.numberOfPages} />
          </main>
        </section>
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const request = await curentPageProducts(query);
  const response = JSON.parse(request);
  return { props: response };
}

export default index;
