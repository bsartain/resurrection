"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const menuItems = [
  {
    name: "Rev. Bill Scott",
    desc: "Pastor/Rector",
    img: "/images/bill.webp",
    img2x: "/images/menu/bill@2x.webp",
  },
  {
    name: "Rev. Jean Roach",
    desc: "Deacon",
    img: "/images/jean.jpeg",
    img2x: "/images/jean@2x.jpeg",
  },
  {
    name: "Rev. Daniel McGregor",
    desc: "Transitional Deacon",
    price: 10,
    img: "/images/daniel.jpeg",
    img2x: "/images/daniel@2x.jpeg",
  },
  {
    name: "Jen Snow",
    desc: "Deacon",
    img: "/images/jen.png",
    img2x: "/images/jen@2x.png",
  },
  {
    name: "Kate Orton",
    desc: "Worship Director and Parish Administrator",
    img: "/images/kate.jpeg",
    img2x: "/images/kate@2x.jpeg",
  },
  {
    name: "Louise Soileau",
    desc: "Children's Ministry Director",
    img: "/images/louise.jpeg",
    img2x: "/images/louise@2x.jpeg",
  },
  {
    name: "Anthony Massotti",
    desc: "Discipleship Director",
    img: "/images/anthony.jpeg",
    img2x: "/images/anthony@2x.jpeg",
  },
];

console.log("MENU ITEMS: ", menuItems);

export default function MenuSlider() {
  return (
    <>
      <section className="s-menublock">
        {/* Header and Explore All Menu link */}
        <div className="row s-menublock__top">{/* ... */}</div>
        <div className="row s-menublock__top">
          <div className="column xl-8 lg-12">
            <div className="s-menublock__content-header section-header">
              <h2 className="text-display-title with-line">Leadership</h2>
              <p className="attention-getter">
                Our leadership team is here to serve you with care and compassion. Whether you have questions, need guidance, or simply want to
                connect, we are committed to walking alongside you in your journey of faith. We welcome you with open hearts and a listening ear.
              </p>
            </div>
            {/* <!-- end s-menublock__content-header --> */}
          </div>
        </div>
        <div className="row">
          <div className="column xl-12 menublock__slider-nav">
            <div className="menublock-buttons">
              <div className="menublock-btn-prev">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </div>
              <div className="menublock-btn-next">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row s-menublock__slider-wrap">
          <div className="column xl-12">
            <div className="swiper-container s-menublock__slider swiper-container-initialized swiper-container-horizontal">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-1085f25be1eaa83da"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                {menuItems.map((item, i: number) => (
                  <div
                    key={i}
                    className="s-menublock__slide swiper-slide swiper-slide-active"
                    role="group"
                    aria-label="1 / 5"
                    style={{ width: "444px", marginRight: "60px" }}
                  >
                    <div className="menublock-item menublock-item-background-image" style={{ backgroundImage: `url("${item.img}")` }}>
                      {/* <div className="menublock-item__thumb">
                        <img src={item.img} srcSet={`${item.img} 1x, ${item.img2x} 2x`} alt="" />
                      </div> */}
                    </div>
                    <div className="menublock-item__text">
                      <h5>{item.name}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
