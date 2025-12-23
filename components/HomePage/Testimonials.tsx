"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonials = [
  {
    name: "Brett S",
    text: "I came to Resurrection during a season when my faith felt dry and disconnected, unsure of what I was really searching for. What I found was a church where Christ is encountered deeply and faith is taken seriously. Experiencing the Eucharist and entering into the rhythms of Anglican spiritual formation brought new life to my walk with God. What once felt distant now feels alive, not as an obligation but a gift. This community has opened my eyes to the beauty of the Trinity and has truly become home.",
    order: 1,
  },
  {
    name: "Miles S",
    text: "I came to Resurrection unsure of what I was looking for, but I found a church that takes faith seriously and welcomes honest questions. The worship is reverent without feeling distant, and the community has been genuinely kind. It didn’t take long to feel like I belonged.",
    order: 2,
  },
  {
    name: "Mike Y",
    text: "Resurrection has helped me slow down and reconnect with God in a meaningful way. The rhythms of worship, Scripture, and prayer have brought depth to my faith, and the people here live it out with humility and grace. It’s a place that feels rooted and alive.",
    order: 3,
  },
  {
    name: "Sarah B",
    text: "From the moment I walked in, I felt at ease. Resurrection is a church where beauty, tradition, and warmth come together. The worship draws me closer to God, and the community makes it easy to feel known and supported. It’s been a gift to our family.",
    order: 4,
  },
  {
    name: "Emily H",
    text: "Resurrection has been a place of renewal for me. The worship is thoughtful and Christ-centered, and the community is welcoming without pressure. I’ve found space to grow, ask questions, and rediscover joy in my faith.",
    order: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="s-testimonials">
      <div className="row s-testimonials__content">
        <h3 className="s-testimonials__title text-center">People of Our Parish</h3>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.25,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          pagination={{ type: "bullets", clickable: true, el: ".testimonial-pagination" }}
        >
          {testimonials.map((item: any) => {
            return (
              <SwiperSlide>
                <strong>{item.name}</strong>
                <div>{item.text}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="testimonial-pagination"></div>
      </div>
    </section>
  );
}
