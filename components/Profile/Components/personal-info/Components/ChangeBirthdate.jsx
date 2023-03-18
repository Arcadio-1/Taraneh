import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
import {
  fixNumbers,
  jalaliToGregorian,
} from "../../../../../lib/utilFunctions";
import { uiAction } from "../../../../../store/ui/uiSlice";
import Modal from "../../../../Layout/Module/Modal";
import ArrowsIcon from "../../../../ui/Icons/arrowsIcon";
import PopUpWindow from "./PopUpWindow";

const ChangeBirthdate = ({ birthdate, id, onClose, effectBool }) => {
  const dispatch = useDispatch();
  const [dateList, setDateList] = useState({ years: [], months: [], days: [] });
  const [frDate, setFrDate] = useState();
  const [userBirthdate, setUserBirthdate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [selectedDate, setSelectedYear] = useState({
    year: "",
    month: "",
    day: "",
  });

  const {
    isShowMenu: isShowYearMenu,
    menuRef: yearMenuRef,
    showMenuHandler: showYearMenuHandler,
  } = useToggleMenu();

  const {
    isShowMenu: isShowMonthMenu,
    menuRef: monthMenuRef,
    showMenuHandler: showMonthMenuHandler,
  } = useToggleMenu();

  const {
    isShowMenu: isShowDayMenu,
    menuRef: dayMenuRef,
    showMenuHandler: showDayMenuHandler,
  } = useToggleMenu();

  useEffect(() => {
    const yearNums = [];
    const monthName = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const dayNums = [];

    for (let i = 1400; i > 1300; i--) {
      yearNums.push(i);
    }
    for (let i = 1; i < 32; i++) {
      dayNums.push(i);
    }
    setDateList((prev) => {
      return (prev = {
        years: yearNums,
        months: monthName,
        days: dayNums,
      });
    });
    const date = new Date(birthdate);
    setFrDate((prev) => {
      return (prev = date.toLocaleDateString("fa-IR"));
    });
    console.log(frDate);
    if (frDate) {
      const enNum = fixNumbers(frDate);
      setUserBirthdate((prev) => {
        const tempDate = enNum.split("/");
        return (prev = {
          year: tempDate[0],
          month: tempDate[1],
          day: tempDate[2],
        });
      });
      setSelectedYear((prev) => {
        return (prev = {
          year: userBirthdate.year,
          month: userBirthdate.month - 1,
          day: userBirthdate.day,
        });
      });
    }
  }, [
    frDate,
    birthdate,
    userBirthdate.day,
    userBirthdate.month,
    userBirthdate.year,
  ]);

  const setSelectedDate = (value, type) => {
    switch (type) {
      case "year":
        setSelectedYear((prev) => {
          return (prev = {
            year: value,
            month: prev.month,
            day: prev.day,
          });
        });
        break;

      case "month":
        setSelectedYear((prev) => {
          return (prev = {
            year: prev.year,
            month: value,
            day: prev.day,
          });
        });
        break;

      case "day":
        setSelectedYear((prev) => {
          return (prev = {
            year: prev.year,
            month: prev.month,
            day: value,
          });
        });
        break;
      default:
        break;
    }
  };

  const changeBirthdateHandler = async () => {
    dispatch(
      uiAction.setSideNotif({
        status: "loading",
        title: "Loading",
        message: "لطفا صبر کنید",
      })
    );
    const dateString = `${selectedDate.year}/${selectedDate.month + 1}/${
      selectedDate.day
    }`;
    const newDate = jalaliToGregorian(dateString);
    const newDateString = `${newDate[1]}/${newDate[2]}/${newDate[0]}`;
    const dateDate = new Date(newDateString);
    console.log(dateDate);
    if (newDateString) {
      const request = await fetch("/api/auth/edit", {
        method: "POST",
        body: JSON.stringify({
          changeType: "birthdate",
          userId: id,
          newData: {
            birthdate: newDateString,
          },
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      if (data.status === "error") {
        dispatch(
          uiAction.setSideNotif({
            status: "error",
            title: "Error",
            message: data.message,
          })
        );
      }
      if (data.status === "success") {
        dispatch(
          uiAction.setSideNotif({
            status: "success",
            title: "Success",
            message:
              "تاریخ تولد با موفقیت تغییر یافت. در حال خروج جهت ورود مجدد!",
          })
        );
        setTimeout(() => {
          signOut();
        }, 3000);
      }
      console.log(data);
    }
  };

  return (
    <Modal>
      <div
        className={` transition-all duration-200 ease-in ${
          effectBool ? "opacity-100 w-0" : "opacity-0 w-0"
        }`}
      >
        <PopUpWindow
          title={"تاریخ تولد"}
          actionTitle={"ثبت تاریخ تولد"}
          actionFn={changeBirthdateHandler}
          closeWindow={onClose}
          isValid={true}
        >
          <div>
            <div className="flex flex-col">
              {userBirthdate.year && (
                <div className="flex items-center gap-10">
                  <div className="year">
                    <p className="mb-3">سال</p>
                    <div
                      className="relative"
                      ref={yearMenuRef}
                      onClick={showYearMenuHandler}
                    >
                      <input
                        id="name"
                        className="border bg-transparent border-gray-300 rounded-lg p-3 fnNum"
                        style={{ width: "100px" }}
                        type={"text"}
                        readOnly={true}
                        required
                        defaultValue={selectedDate.year}
                      />
                      <div className="absolute top-5 left-3">
                        <ArrowsIcon arrowType={"down"} />
                      </div>
                      {isShowYearMenu && (
                        <div className="absolute rounded-xl border bg-slate-100 w-40 top-16">
                          <ul className="py-2 h-60 overflow-scroll">
                            {dateList.years.map((year, index) => {
                              return (
                                <li
                                  onClick={setSelectedDate.bind(
                                    null,
                                    year,
                                    "year"
                                  )}
                                  className="fnNum text-center text-xl mb-2 cursor-pointer hover:text-white hover:bg-slate-500"
                                  key={index}
                                >
                                  {year}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="month">
                    <p className="mb-3">ماه</p>
                    <div
                      className="relative"
                      ref={monthMenuRef}
                      onClick={showMonthMenuHandler}
                    >
                      <input
                        id="name"
                        className="border bg-transparent border-gray-300 rounded-lg p-3"
                        style={{ width: "70px" }}
                        type={"text"}
                        readOnly={true}
                        required
                        defaultValue={dateList.months[selectedDate.month]}
                      />
                      <div className="absolute top-5 left-3">
                        <ArrowsIcon arrowType={"down"} />
                      </div>
                      {isShowMonthMenu && (
                        <div className="absolute rounded-xl border bg-slate-100 w-32 top-16">
                          <ul className="py-2 h-60 overflow-scroll">
                            {dateList.months.map((month, index) => {
                              return (
                                <li
                                  onClick={setSelectedDate.bind(
                                    null,
                                    index,
                                    "month"
                                  )}
                                  className="fnNum text-center text-lg mb-2 cursor-pointer hover:text-white hover:bg-slate-500"
                                  key={index}
                                >
                                  {month}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="day">
                    <p className="mb-3">روز</p>
                    <div
                      className="relative"
                      onClick={showDayMenuHandler}
                      ref={dayMenuRef}
                    >
                      <input
                        id="name"
                        className="border bg-transparent border-gray-300 rounded-lg p-3"
                        style={{ width: "50px" }}
                        type={"text"}
                        required
                        readOnly={true}
                        defaultValue={selectedDate.day}
                      />
                      <div className="absolute top-5 left-3">
                        <ArrowsIcon arrowType={"down"} />
                      </div>
                      {isShowDayMenu && (
                        <div className="absolute rounded-xl border bg-slate-100 w-20 top-16">
                          <ul className="py-2 h-60 overflow-scroll">
                            {dateList.days.map((day, index) => {
                              return (
                                <li
                                  onClick={setSelectedDate.bind(
                                    null,
                                    day,
                                    "day"
                                  )}
                                  className="fnNum text-center text-xl mb-2 cursor-pointer hover:text-white hover:bg-slate-500"
                                  key={index}
                                >
                                  {day}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </PopUpWindow>
      </div>
    </Modal>
  );
};

export default ChangeBirthdate;
