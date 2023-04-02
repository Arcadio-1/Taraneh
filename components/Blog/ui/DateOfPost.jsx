import React from "react";
import ClockIcon from "../../ui/Icons/ClockIcon";

const DateOfPost = (props) => {
  const dateConverter = (date) => {
    const solar = new Date(date);
    const now = new Date().getTime();
    const dif = new Date().getTime() - solar.getTime();
    if (dif < 86400000) {
      const hours = (now - solar) / 1000 / 60 / 60;

      return `${Math.round(hours)} ساعت قبل`;
    }
    if (dif < 172800000) {
      return "دیروز";
    }
    if (dif < 259200000) {
      return "دو روز پیش";
    }
    if (dif < 345600000) {
      return "سه روز پیش";
    }
    if (dif < 432000000) {
      return "چهار روز پیش";
    }
    if (dif < 518400000) {
      return "پنج روز پیش";
    }
    if (dif < 604800000) {
      return "شش روز پیش";
    }
    if (dif < 604800000) {
      return "شش روز پیش";
    }
    if (dif < 691200000) {
      return "هفته پیش";
    }
    if (dif < 1296000000) {
      return "دو هفته پیش";
    }
    if (dif < 1900800000) {
      return "سه هفته پیش";
    }
    if (dif < 86400000 * 29) {
      return "چهار هفته پیش";
    }
    if (dif < 86400000 * 32) {
      return "یک ماه پیش";
    }
    if (dif < 86400000 * 32 * 2) {
      return "دو ماه پیش";
    }
    if (dif < 86400000 * 32 * 3) {
      return "سه ماه پیش";
    }
    if (dif < 86400000 * 32 * 4) {
      return "چهار ماه پیش";
    }
    if (dif < 86400000 * 32 * 5) {
      return "پنج ماه پیش";
    }
    if (dif < 86400000 * 32 * 6) {
      return "شش ماه پیش";
    }
    if (dif < 86400000 * 32 * 7) {
      return "هفت ماه پیش";
    }
    if (dif < 86400000 * 32 * 8) {
      return "هشت ماه پیش";
    }
    if (dif < 86400000 * 32 * 9) {
      return "نه ماه پیش";
    }
    if (dif < 86400000 * 32 * 10) {
      return "ده ماه پیش";
    }
    if (dif < 86400000 * 32 * 11) {
      return "یازده ماه پیش";
    }
    if (dif < 86400000 * 32 * 12) {
      return "یکسال پیش";
    }
    if (dif < 33177600000 * 2) {
      return "دو سال پیش";
    }
    if (dif < 33177600000 * 3) {
      return "سه سال پیش";
    }
    if (dif < 33177600000 * 4) {
      return "چهار سال پیش";
    }
    if (dif < 33177600000 * 5) {
      return "پنج سال پیش";
    }
    if (dif < 33177600000 * 6) {
      return "شش سال پیش";
    }

    console.log(solar.getDay());
    return solar.toLocaleDateString("fa-IR");

    // return dif;
  };
  return (
    <div className="dateOfPost">
      <ClockIcon />
      <span className="dateOfPost-text">{dateConverter(props.postDate)}</span>
    </div>
  );
};
export default DateOfPost;
