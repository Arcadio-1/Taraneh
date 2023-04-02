import React from "react";

const HomePageLoading = () => {
  return (
    <div className="blogSkaleton">
      <section className="blogSkaleton-hero animation"></section>
      <section className="blogSkaleton-selected">
        <h2 className="blogSkaleton-selected-title">مطالب منتخب</h2>
        <ul className="blogSkaleton-selected-list">
          <li className="blogSkaleton-selected-list-item animation"></li>
          <li className="blogSkaleton-selected-list-item animation"></li>
          <li className="blogSkaleton-selected-list-item animation"></li>
          <li className="blogSkaleton-selected-list-item animation"></li>
          <li className="blogSkaleton-selected-list-item animation"></li>
          <li className="blogSkaleton-selected-list-item animation"></li>
          <li className="blogSkaleton-selected-list-item animation"></li>
          <li className="blogSkaleton-selected-list-item animation"></li>
        </ul>
      </section>
      <section className="blogSkaleton-new">
        <h2 className="blogSkaleton-new-title">آخرین مطالب</h2>
        <div className="blogSkaleton-new-container">
          <div className="blogSkaleton-new-list">
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
            <li className="blogSkaleton-new-list-item animation"></li>
          </div>
          <div className="blogSkaleton-new-main">
            <div className="blogSkaleton-new-main-image animation"></div>
            <div className="blogSkaleton-new-main-text animation"></div>
          </div>
        </div>
      </section>
      <section className="blogSkaleton-random">
        <h2 className="blogSkaleton-random-title">مطالب تصادفی</h2>
        <div className="blogSkaleton-random-container">
          <ul className="blogSkaleton-random-list">
            <li className="blogSkaleton-random-list-item">
              <article className="blogSkaleton-random-list-item-container">
                <div className="blogSkaleton-random-list-item-image animation"></div>
                <div className="blogSkaleton-random-list-item-text animation"></div>
              </article>
            </li>
            <li className="blogSkaleton-random-list-item">
              <article className="blogSkaleton-random-list-item-container">
                <div className="blogSkaleton-random-list-item-image animation"></div>
                <div className="blogSkaleton-random-list-item-text animation"></div>
              </article>
            </li>
            <li className="blogSkaleton-random-list-item">
              <article className="blogSkaleton-random-list-item-container">
                <div className="blogSkaleton-random-list-item-image animation"></div>
                <div className="blogSkaleton-random-list-item-text animation"></div>
              </article>
            </li>
            <li className="blogSkaleton-random-list-item">
              <article className="blogSkaleton-random-list-item-container">
                <div className="blogSkaleton-random-list-item-image animation"></div>
                <div className="blogSkaleton-random-list-item-text animation"></div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section className="blogSkaleton-related">
        <section className="blogSkaleton-related-container">
          <h2 className="blogSkaleton-related-title">
            آموزش های مرتبط با خرید قهوه
          </h2>
          <ul className="blogSkaleton-related-list">
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
          </ul>
        </section>
        <section className="blogSkaleton-related-container">
          <h2 className="blogSkaleton-related-title">
            آموزش های مرتبط با خرید قهوه
          </h2>
          <ul className="blogSkaleton-related-list">
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
          </ul>
        </section>
        <section className="blogSkaleton-related-container">
          <h2 className="blogSkaleton-related-title">
            آموزش های مرتبط با خرید قهوه
          </h2>
          <ul className="blogSkaleton-related-list">
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
            <li className="blogSkaleton-related-list-item animation"></li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default HomePageLoading;
