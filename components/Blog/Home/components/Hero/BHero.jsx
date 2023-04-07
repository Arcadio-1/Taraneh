import Link from "next/link";

const BHero = () => {
  return (
    <div className="b-hero">
      <div className="b-hero-image"></div>
      <div className="b-hero-popup">
        <h1 className="b-hero-popup-title">فروشگاه کافه ترانه</h1>
        <Link href={"/products"}>
          <h2 className="b-hero-popup-description">
            از محصولات متنوع فروشگاه دیدن فرمایید
          </h2>
          <button className="b-hero-popup-button">مشاهده محصولات</button>
        </Link>
        <h1 className="b-hero-popup-addres">www.CafeTarane.com</h1>
      </div>
    </div>
  );
};
export default BHero;
