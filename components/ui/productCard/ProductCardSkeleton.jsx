import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="h-full p-3 rounded-lg opacity-90 backloading">
      <div className="itemLoading h-2/4 mb-4"></div>
      <div className="h-2/4 flex flex-col gap-3">
        <div className="itemLoading h-6 w-52"></div>
        <div className="itemLoading h-7 w-20"></div>
        <div className="itemLoading h-6 w-40"></div>
        <div className="itemLoading m-auto h-10 w-52 "></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
