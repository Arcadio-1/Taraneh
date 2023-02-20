import React from "react";

const Informatin = ({ productDetails }) => {
  const {
    packaging,
    category,
    categoryAddress,
    title,
    id,
    brandFn,
    brandEn,
    statistics,
    imageLink,
    price,
    sell,
    imgList,
    status,
    description,
    producingCountry,
    packingCountry,
    coffeeType,
    taste,
    tags,
  } = productDetails;
  const { arabica, robusta, bitter, caffeine, perfume, pickle } = taste;
  const { value, availableGrind } = packaging;
  return (
    <div className="subCard-information">
      <table className="subCard-information-table">
        <tbody className="subCard-information-tbody">
          <tr>
            <th>برند</th>
            <td>
              <p className="textValue">
                {brandFn} / {brandEn}
              </p>
            </td>
          </tr>
          <tr>
            <th>نام محصول</th>
            <td>
              <p className="textValue">{title}</p>
            </td>
          </tr>
          {packingCountry && (
            <tr>
              <th>بسته بندی</th>
              <td>
                <p className="textValue">{packingCountry}</p>
              </td>
            </tr>
          )}
          {producingCountry && (
            <tr>
              <th>محصول</th>
              <td>
                <p className="textValue">{producingCountry}</p>
              </td>
            </tr>
          )}
          {arabica && (
            <tr>
              <th>عربیکا</th>
              <td>
                <p>
                  <span className="numValue">{arabica}</span>
                  <span className="sideOfValue">%</span>
                </p>
              </td>
            </tr>
          )}
          {robusta && (
            <tr>
              <th>ربوستا</th>
              <td>
                <p>
                  <span className="numValue">{robusta}</span>
                  <span className="sideOfValue">%</span>
                </p>
              </td>
            </tr>
          )}
          {caffeine && (
            <tr>
              <th>کافئین</th>
              <td>
                <p>
                  <span className="numValue">{caffeine}</span>
                  <span className="sideOfValue">/10</span>
                </p>
              </td>
            </tr>
          )}
          {perfume && (
            <tr>
              <th>عطر و بو</th>
              <td>
                <p>
                  <span className="numValue">{perfume}</span>
                  <span className="sideOfValue">/10</span>
                </p>
              </td>
            </tr>
          )}
          {pickle && (
            <tr>
              <th>ترشی</th>
              <td>
                <p>
                  <span className="numValue">{pickle}</span>
                  <span className="sideOfValue">/10</span>
                </p>
              </td>
            </tr>
          )}
          {bitter && (
            <tr>
              <th>تلخی</th>
              <td>
                <p>
                  <span className="numValue">{bitter}</span>
                  <span className="sideOfValue">/10</span>
                </p>
              </td>
            </tr>
          )}
          {availableGrind && (
            <tr>
              <th>درجه های آسیاب</th>
              <td>
                <table className="subCard-information-innerTable">
                  <tbody>
                    {availableGrind.map((item, index) => {
                      switch (item) {
                        case 1:
                          return (
                            <tr key={index} className="textValue">
                              <td>دانه قهوه (بدون آسیاب)</td>
                            </tr>
                          );
                        case 2:
                          return (
                            <tr key={index} className="textValue">
                              <td>فرنچ پرس (بسیار درشت)</td>
                            </tr>
                          );
                        case 3:
                          return (
                            <tr key={index} className="textValue">
                              <td>فرنچ پرس (درشت)</td>
                            </tr>
                          );
                        case 4:
                          return (
                            <tr key={index} className="textValue">
                              <td>فرنچ پرس (متوسط رو به درشت)</td>
                            </tr>
                          );
                        case 5:
                          return (
                            <tr key={index} className="textValue">
                              <td>فرنچ پرس ( متوسط)</td>
                            </tr>
                          );
                        case 6:
                          return (
                            <tr key={index} className="textValue">
                              <td>فرنچ پرس (نسبتا ریز)</td>
                            </tr>
                          );
                        case 7:
                          return (
                            <tr key={index} className="textValue">
                              <td>فرنچ پرس ( ریز)</td>
                            </tr>
                          );
                        case 8:
                          return (
                            <tr key={index} className="textValue">
                              <td>فرنچ پرس (بسیار ریز)</td>
                            </tr>
                          );
                        default:
                          return "";
                      }
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          )}
          {packaging.value && (
            <tr>
              <th>وزن بسته</th>
              <td>
                <table className="subCard-information-innerTable">
                  <tbody>
                    {value.map((item, index) => {
                      return (
                        <tr className="textValue" key={index}>
                          <td>
                            <span className="numValue">{item}</span>
                            <span className="sideValue"> گرمی</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Informatin;
