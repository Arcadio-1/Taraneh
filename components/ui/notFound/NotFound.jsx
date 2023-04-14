import Image from "next/image";
import Link from "next/link";
import ClickIcon from "../Icons/ClickIcon";
import HomeIcon_2 from "../Icons/HomeIcon_2";
const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFound-head">
        <h1 className="notFound-title">صفحه مورد نظر یافت نشد</h1>
        <Link href={"/"}>
          <div className="notFound-btn">
            <span className="notFound-btn-text">بازگشت به صفحه اصلی</span>
            <HomeIcon_2 />
            <ClickIcon />
          </div>
        </Link>
      </div>
      <div className="notFound-image">
        <Image
          className="notFound-heroImg"
          src={"/image/404.png"}
          width={300}
          height={300}
          alt="404"
        />
      </div>
    </div>
  );
};
export default NotFound;
