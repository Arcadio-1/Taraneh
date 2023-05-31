import Image from "next/image";
import Link from "next/link";
import ClickIcon from "../Icons/ClickIcon";
import HomeIcon_2 from "../Icons/HomeIcon_2";

const AccessDenied = () => {
  return (
    <div className="notFound">
      <div className="notFound-head">
        <h1 className="notFound-title">دسترسی مجاز نیست!</h1>
        <Link href={"/"}>
          <div className="notFound-btn bg-red-600">
            <span className="notFound-btn-text text-gray-50">
              بازگشت به صفحه اصلی
            </span>
            <HomeIcon_2 />
            <ClickIcon />
          </div>
        </Link>
      </div>
      <div className="notFound-image">
        <Image
          className="notFound-heroImg"
          src={"/image/access_denied.png"}
          width={300}
          height={300}
          alt="404"
        />
      </div>
    </div>
  );
};

export default AccessDenied;
