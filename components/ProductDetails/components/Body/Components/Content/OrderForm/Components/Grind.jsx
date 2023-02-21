import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { sendDataAction } from "../../../../../../../../store/ManageData/SendData/SendDataSlice";
import GrindIcon from "../../../../../../../ui/Icons/GrindIcon";
const Grind = ({ availableGrind, grindAlert, setAlert }) => {
  const dispatchGrind = useDispatch();
  return (
    <div className="productDetails-form-grind">
      <div className="productDetails-form-grind-container">
        <label className="title">
          <GrindIcon />
          درجه آسیاب :
        </label>
        <div>
          <ul className="list">
            {availableGrind.map((item, index) => {
              switch (item) {
                case 1:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio1">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                grind: value,
                                type: "setGrind",
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio1"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/1.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span>دانه قهوه (بدون آسیاب)</span>
                        </div>
                      </label>
                    </li>
                  );
                case 2:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio2">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                grind: value,
                                type: "setGrind",
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio2"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/2.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span>بسیار درشت</span>
                        </div>
                      </label>
                    </li>
                  );
                case 3:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio3">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                grind: value,
                                type: "setGrind",
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio3"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/3.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span>درشت</span>
                        </div>
                      </label>
                    </li>
                  );
                case 4:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio4">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                grind: value,
                                type: "setGrind",
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio4"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/4.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span>متوسط رو به درشت</span>
                        </div>
                      </label>
                    </li>
                  );
                case 5:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio5">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                grind: value,
                                type: "setGrind",
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio5"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/5.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span> متوسط</span>
                        </div>
                      </label>
                    </li>
                  );
                case 6:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio6">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                grind: value,
                                type: "setGrind",
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio6"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/6.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span>نسبتا ریز</span>
                        </div>
                      </label>
                    </li>
                  );
                case 7:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio7">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                type: "setGrind",
                                grind: value,
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio7"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/7.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span> ریز</span>
                        </div>
                      </label>
                    </li>
                  );
                case 8:
                  return (
                    <li className="item" key={item}>
                      <label key={index} htmlFor="radio8">
                        <input
                          onChange={(e) => {
                            const value = e.target.value;
                            dispatchGrind(
                              sendDataAction.setProduct({
                                type: "setGrind",
                                grind: value,
                              })
                            );
                            setAlert(false);
                          }}
                          type="radio"
                          name="grind"
                          id="radio8"
                          value={item}
                        />
                        <div className="button">
                          <Image
                            src={"/image/ui/grind/8.png"}
                            width={25}
                            height={25}
                            alt={item}
                          />
                          <span>بسیار ریز</span>
                        </div>
                      </label>
                    </li>
                  );
                default:
                  return "";
              }
            })}
          </ul>
        </div>
      </div>
      {grindAlert && (
        <p className="productDetails-form-alert">
          لطفا وزن بسته مورد نظرتان را انتخاب کنید!
        </p>
      )}
    </div>
  );
};

export default Grind;
