import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../store/ui/uiSlice";
import EditIcon from "../../../ui/Icons/EditIcon";
import NotifCard from "../../../ui/NotifCard";
import ChangeBirthdate from "./Components/ChangeBirthdate";
import ChangeEmail from "./Components/ChangeEmail";
import ChangeMobileNumber from "./Components/ChangeMobileNumber";
import ChangePassword from "./Components/ChangePassword";
import { ChangePersonalInfo } from "./Components/ChangePersonalInfo";
import Link from "next/link";
import BackIcon from "../../../ui/Icons/BackIcon";

const PersonalInfo = () => {
  const { data } = useSession();
  const dispatch = useDispatch();

  const [isShowPersonalInfoEditWindow, setIsShowPersonalInfoEditWindow] =
    useState(false);
  const [
    isShowPersonalInfoEditWindowAnimation,
    setIsShowPersonalInfoEditWindowAnimation,
  ] = useState(false);

  const [isShowMobileNumberEditWindow, setIsShowMobileNumberEditWindow] =
    useState(false);
  const [
    isShowMobileNumberEditWindowAnimation,
    setIsShowMobileNumberEditWindowAnimation,
  ] = useState(false);

  const [isShowEmailEditWindow, setIsShowEmailEditWindow] = useState(false);
  const [isShowEmailEditWindowAnimation, setIsShowEmailEditWindowAnimation] =
    useState(false);

  const [isShowPasswordEditWindow, setIsShowPasswordEditWindow] =
    useState(false);
  const [
    isShowPasswordEditWindowAnimation,
    setIsShowPasswordEditWindowAnimation,
  ] = useState(false);

  const [isShowBirthdateEditWindow, setIsShowBirthdateEditWindow] =
    useState(false);
  const [
    isShowBirthdateEditWindowAnimation,
    setIsShowBirthdateEditWindowAnimation,
  ] = useState(false);

  const toggolIsShowEditpersonalInfoWindow = () => {
    if (isShowPersonalInfoEditWindow) {
      setIsShowPersonalInfoEditWindowAnimation((prev) => {
        return (prev = false);
      });

      setTimeout(() => {
        setIsShowPersonalInfoEditWindow((prev) => {
          return (prev = false);
        });
      }, 1000);
      dispatch(uiAction.hideBackDrop());
    }

    if (!isShowPersonalInfoEditWindow) {
      setIsShowPersonalInfoEditWindow((prev) => {
        return (prev = true);
      });
      setTimeout(() => {
        setIsShowPersonalInfoEditWindowAnimation((prev) => {
          return (prev = true);
        });
      }, 10);

      dispatch(uiAction.showBackDrop());
    }
  };
  const toggolIsShowEditMobileNumberWindow = () => {
    if (isShowMobileNumberEditWindow) {
      setIsShowMobileNumberEditWindowAnimation((prev) => {
        return (prev = false);
      });

      setTimeout(() => {
        setIsShowMobileNumberEditWindow((prev) => {
          return (prev = false);
        });
      }, 1000);
      dispatch(uiAction.hideBackDrop());
    }

    if (!isShowMobileNumberEditWindow) {
      setIsShowMobileNumberEditWindow((prev) => {
        return (prev = true);
      });
      setTimeout(() => {
        setIsShowMobileNumberEditWindowAnimation((prev) => {
          return (prev = true);
        });
      }, 10);

      dispatch(uiAction.showBackDrop());
    }
  };

  const toggolIsShowEditEmailWindow = () => {
    if (isShowEmailEditWindow) {
      setIsShowEmailEditWindowAnimation((prev) => {
        return (prev = false);
      });

      setTimeout(() => {
        setIsShowEmailEditWindow((prev) => {
          return (prev = false);
        });
      }, 1000);
      dispatch(uiAction.hideBackDrop());
    }

    if (!isShowEmailEditWindow) {
      setIsShowEmailEditWindow((prev) => {
        return (prev = true);
      });
      setTimeout(() => {
        setIsShowEmailEditWindowAnimation((prev) => {
          return (prev = true);
        });
      }, 10);

      dispatch(uiAction.showBackDrop());
    }
  };

  const toggolIsShowEditPasswordWindow = () => {
    if (isShowPasswordEditWindow) {
      setIsShowPasswordEditWindowAnimation((prev) => {
        return (prev = false);
      });

      setTimeout(() => {
        setIsShowPasswordEditWindow((prev) => {
          return (prev = false);
        });
      }, 1000);
      dispatch(uiAction.hideBackDrop());
    }

    if (!isShowPasswordEditWindow) {
      setIsShowPasswordEditWindow((prev) => {
        return (prev = true);
      });
      setTimeout(() => {
        setIsShowPasswordEditWindowAnimation((prev) => {
          return (prev = true);
        });
      }, 10);

      dispatch(uiAction.showBackDrop());
    }
  };

  const toggolIsShowEditBirthdateWindow = () => {
    if (isShowBirthdateEditWindow) {
      setIsShowBirthdateEditWindowAnimation((prev) => {
        return (prev = false);
      });

      setTimeout(() => {
        setIsShowBirthdateEditWindow((prev) => {
          return (prev = false);
        });
      }, 1000);
      dispatch(uiAction.hideBackDrop());
    }

    if (!isShowBirthdateEditWindow) {
      setIsShowBirthdateEditWindow((prev) => {
        return (prev = true);
      });
      setTimeout(() => {
        setIsShowBirthdateEditWindowAnimation((prev) => {
          return (prev = true);
        });
      }, 10);

      dispatch(uiAction.showBackDrop());
    }
  };

  const {
    _id,
    name,
    family,
    mobile,
    email,
    password,
    codeMeli,
    address,
    birthdate,
  } = data.user.email;
  const date = new Date(birthdate);
  const new_birthdate = date.toLocaleDateString("fa-IR");
  return (
    <div className="personalInfo">
      <NotifCard />
      {isShowPersonalInfoEditWindow && (
        <ChangePersonalInfo
          effectBool={isShowPersonalInfoEditWindowAnimation}
          name={name}
          family={family}
          codeMeli={codeMeli}
          id={_id}
          onClose={toggolIsShowEditpersonalInfoWindow}
        />
      )}
      {isShowMobileNumberEditWindow && (
        <ChangeMobileNumber
          effectBool={isShowMobileNumberEditWindowAnimation}
          mobile={mobile}
          id={_id}
          onClose={toggolIsShowEditMobileNumberWindow}
        />
      )}
      {isShowEmailEditWindow && (
        <ChangeEmail
          effectBool={isShowEmailEditWindowAnimation}
          email={email}
          id={_id}
          onClose={toggolIsShowEditEmailWindow}
        />
      )}
      {isShowPasswordEditWindow && (
        <ChangePassword
          effectBool={isShowPasswordEditWindowAnimation}
          password={password}
          id={_id}
          onClose={toggolIsShowEditPasswordWindow}
        />
      )}
      {isShowBirthdateEditWindow && (
        <ChangeBirthdate
          effectBool={isShowBirthdateEditWindowAnimation}
          birthdate={birthdate}
          id={_id}
          onClose={toggolIsShowEditBirthdateWindow}
        />
      )}
      <div className="personalInfo-title">
        <div className="p-1">
          <Link href={"/profile"}>
            <BackIcon />
          </Link>
        </div>
        <h1>اطلاعات حساب کاربری</h1>
      </div>
      <div className="container rounded-lg border-gray-300 grid grid-cols-2 border px-2 pb-2">
        <div className="col ">
          <div className="item border-l border-b">
            <div className="head">
              <h2 className="title">نام و نام خانوادگی</h2>
              <p className="content">{`${name} ${family}`}</p>
            </div>
            <div className="action">
              <button onClick={toggolIsShowEditpersonalInfoWindow}>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className="item border-l border-b">
            <div className="head">
              <h2 className="title">شماره موبایل</h2>
              <p className="content fnNum">{`${mobile}`}</p>
            </div>
            <div className="action">
              <button onClick={toggolIsShowEditMobileNumberWindow}>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className="item border-l border-b">
            <div className="head">
              <h2 className="title">رمز عبور</h2>
              <p className="content">{`•••••••`}</p>
            </div>
            <div className="action">
              <button onClick={toggolIsShowEditPasswordWindow}>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className="item border-l">
            <div className="head">
              <h2 className="title">تاریخ تولد</h2>
              <p className="content">{`${new_birthdate}`}</p>
            </div>
            <div className="action">
              <button onClick={toggolIsShowEditBirthdateWindow}>
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="item border-b">
            <div className="head">
              <h2 className="title">کد ملی</h2>
              <p className="content fnNum">{`${codeMeli}`}</p>
            </div>
            <div className="action">
              <button onClick={toggolIsShowEditpersonalInfoWindow}>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className="item border-b">
            <div className="head">
              <h2 className="title">ایمیل</h2>
              <p className="content">{`${email}`}</p>
            </div>
            <div className="action">
              <button onClick={toggolIsShowEditEmailWindow}>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className="item border-b">
            <div className="head">
              <h2 className="title">روش بازگرداندن پول من</h2>
              <p className="content">{`-------`}</p>
            </div>
            <div className="action">
              <button>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className="item">
            <div className="head">
              <h2 className="title">شغل</h2>
              <p className="content">{`--------`}</p>
            </div>
            <div className="action">
              <button>
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
