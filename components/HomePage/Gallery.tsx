"use client";

import "glightbox/dist/css/glightbox.min.css";

const galleryItems = [
  {
    thumb: "/images/instagram/01.jpg",
    thumb2x: "/images/instagram/01@2x.jpg",
    large: "/images/instagram/large/01.jpg",
  },
  {
    thumb: "/images/instagram/02.jpg",
    thumb2x: "/images/instagram/02@2x.jpg",
    large: "/images/instagram/large/02.jpg",
  },
  {
    thumb: "/images/instagram/03.jpg",
    thumb2x: "/images/instagram/03@2x.jpg",
    large: "/images/instagram/large/03.jpg",
  },
  {
    thumb: "/images/instagram/04.jpg",
    thumb2x: "/images/instagram/04@2x.jpg",
    large: "/images/instagram/large/04.jpg",
  },
  {
    thumb: "/images/instagram/06.jpg",
    thumb2x: "/images/instagram/06@2x.jpg",
    large: "/images/instagram/large/06.jpg",
  },
  {
    thumb: "/images/instagram/07.jpg",
    thumb2x: "/images/instagram/07@2x.jpg",
    large: "/images/instagram/large/07.jpg",
  },
  {
    thumb: "/images/instagram/08.jpg",
    thumb2x: "/images/instagram/08@2x.jpg",
    large: "/images/instagram/large/08.jpg",
  },
  {
    thumb: "/images/instagram/09.jpg",
    thumb2x: "/images/instagram/09@2x.jpg",
    large: "/images/instagram/large/09.jpg",
  },
  {
    thumb: "/images/instagram/10.jpg",
    thumb2x: "/images/instagram/10@2x.jpg",
    large: "/images/instagram/large/10.jpg",
  },
  {
    thumb: "/images/instagram/11.jpg",
    thumb2x: "/images/instagram/11@2x.jpg",
    large: "/images/instagram/large/11.jpg",
  },
  {
    thumb: "/images/instagram/12.jpg",
    thumb2x: "/images/instagram/12@2x.jpg",
    large: "/images/instagram/large/12.jpg",
  },
  {
    thumb: "/images/instagram/13.jpg",
    thumb2x: "/images/instagram/13@2x.jpg",
    large: "/images/instagram/large/13.jpg",
  },
  {
    thumb: "/images/instagram/14.jpg",
    thumb2x: "/images/instagram/14@2x.jpg",
    large: "/images/instagram/large/14.jpg",
  },
  {
    thumb: "/images/instagram/15.jpg",
    thumb2x: "/images/instagram/15@2x.jpg",
    large: "/images/instagram/large/15.jpg",
  },
  {
    thumb: "/images/instagram/16.jpg",
    thumb2x: "/images/instagram/16@2x.jpg",
    large: "/images/instagram/large/16.jpg",
  },
  // {
  //   thumb: "/images/instagram/17.jpg",
  //   thumb2x: "/images/instagram/17@2x.jpg",
  //   large: "/images/instagram/large/17.jpg",
  // },
  // {
  //   thumb: "/images/instagram/18.jpg",
  //   thumb2x: "/images/instagram/18@2x.jpg",
  //   large: "/images/instagram/large/18.jpg",
  // },
];

export default function Gallery() {
  return (
    <>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <a key={index} href={item.thumb} className="glightbox gallery-item">
            <div className="gallery-image" style={{ backgroundImage: `url(${item.thumb})` }} />
          </a>
        ))}
      </div>
    </>
  );
}
