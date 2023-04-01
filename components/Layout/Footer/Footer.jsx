import React from "react";
import Subscribe from "./components/Subscribe";
import FooterIcons from "./components/FooterIcons";
import SocialMedia from "./components/SocialMedia";
import FooterNav from "./components/FooterNav";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import getFromJson from "../../../lib/readjson";
const Footer = () => {
  const navs = [
    {
      title: "برند ها",
      items: [
        { id: 1, title: "بن مانو", link: "/" },
        { id: 2, title: "دیسترو", link: "/" },
        { id: 3, title: "پندار", link: "/" },
        { id: 4, title: "بنوان", link: "/" },
        { id: 5, title: "نسکافه", link: "/" },
        { id: 6, title: "ریو", link: "/" },
      ],
    },
    {
      title: "برند ها",
      items: [
        { id: 1, title: "بن مانو", link: "/" },
        { id: 2, title: "دیسترو", link: "/" },
        { id: 3, title: "پندار", link: "/" },
        { id: 4, title: "بنوان", link: "/" },
        { id: 5, title: "نسکافه", link: "/" },
        { id: 6, title: "ریو", link: "/" },
      ],
    },
    {
      title: "نوشیدنی ها",
      items: [
        { id: 1, title: "قهوه", link: "/" },
        { id: 2, title: "دمنوش", link: "/" },
        { id: 3, title: "کاپوچینو", link: "/" },
        { id: 4, title: "هات چاکلت", link: "/" },
        { id: 5, title: "قهوه فوری", link: "/" },
        { id: 6, title: "چای", link: "/" },
      ],
    },
    {
      title: "آموزش ها",
      items: [
        { id: 1, title: "قهوه شناسی", link: "/" },
        { id: 2, title: "انواع نوشیدنی", link: "/" },
        { id: 3, title: "اخبار دنیای کافی", link: "/" },
        { id: 4, title: "تعمیر ابزار تهیه نوشیدنی", link: "/" },
      ],
    },
    {
      title: "لینک های کاربردی",
      items: [
        { id: 1, title: "سوالات متداول", link: "/" },
        { id: 2, title: "راهنما خرید", link: "/" },
        { id: 3, title: "قوانین و مقررات", link: "/" },
        { id: 4, title: "پیگیری سفارش", link: "/" },
        { id: 5, title: "ارتباط باما", link: "/" },
      ],
    },
  ];
  const uploadHandler = async () => {
    const data = await getFromJson("Blog/blogFooterNavLinks.json");
    console.log(data);
    const request = await fetch("/api/jsonUploader", {
      method: "POST",
      body: JSON.stringify({
        items: data,
        serverName: "blog",
        collectionName: "blogFooterNavLinks",
      }),
      headers: { "Content-Type": "application/json" },
    });
    const respose = await request.json();
    console.log(respose);
  };
  return (
    <footer className="footer">
      <Subscribe />
      <FooterIcons />
      <div className="footer-navs">
        {navs.map((item, index) => {
          return (
            <FooterNav key={index} title={item.title} items={item.items} />
          );
        })}
        <p onClick={uploadHandler}>upload Json</p>
      </div>
      <div className="footer-socialAndContact">
        <Contact />
        <div>
          <SocialMedia />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
