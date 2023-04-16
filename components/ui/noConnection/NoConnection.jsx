import Image from "next/image";
import Link from "next/link";
import ClickIcon from "../Icons/ClickIcon";
import HomeIcon_2 from "../Icons/HomeIcon_2";
const NoConnection = () => {
  return (
    <div className="noConnection">
      <div className="noConnection-head">
        <h1 className="noConnection-title">خط در اتصال به اینترنت</h1>
        <Link href={"/"}>
          <div className="noConnection-btn">
            <span className="noConnection-btn-text">بازگشت به صفحه اصلی</span>
            <HomeIcon_2 />
            <ClickIcon />
          </div>
        </Link>
      </div>
      <div className="noConnection-image">
        <Image
          className="noConnection-heroImg"
          src={"/image/ui/noConnection.png"}
          width={300}
          height={300}
          alt="404"
        />
      </div>
    </div>
  );
};
export default NoConnection;
