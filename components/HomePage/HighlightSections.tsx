"use client";
import { useEffect, useState } from "react";

const highlihtsSection = [
  {
    header: "Experience the Trinity",
    copy: "Come encounter the living God—Father, Son, and Holy Spirit—in worship that draws you into the beauty, mystery, and love of the Trinity.",
    image: "/images/praise.jpg",
    imageDirection: "right",
  },
  {
    header: "Embody Community",
    copy: "Join a welcoming family where we share life together, support one another, and grow in faith through genuine relationships rooted in Christ.",
    image: "/images/little-girl.jpg",
    imageDirection: "left",
  },
  {
    header: "Engage the City",
    copy: "Step out with us to love and serve Rock Hill, bringing hope, compassion, and the good news of Jesus to our neighbors and neighborhoods.",
    image: "/images/outreach.jpg",
    imageDirection: "right",
  },
];

export default function HighlightSections() {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const getWindowInnerWidth = () => {
      window.innerWidth <= 1100 ? setIsMobileView(true) : setIsMobileView(false);
    };
    getWindowInnerWidth();
  }, []);
  return (
    <>
      {isMobileView ? (
        <section id="highlights" className="s-highlights">
          {highlihtsSection.map((item: any, index: number) => {
            return (
              <div key={index} className="highlight-container">
                <div className="highlight-text-container">
                  <div className="highlight-text">
                    <h2 className="text-display-title">{item.header}</h2>
                    <p>{item.copy}</p>
                  </div>
                </div>
                <div className="highlight-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              </div>
            );
          })}
        </section>
      ) : (
        <section id="highlights" className="s-highlights">
          {highlihtsSection.map((item: any, index: number) => {
            if (item.imageDirection === "right") {
              return (
                <div key={index} className="highlight-container">
                  <div className="highlight-text-container">
                    <div className="highlight-text">
                      <h2 className="text-display-title">{item.header}</h2>
                      <p>{item.copy}</p>
                    </div>
                  </div>
                  <div className="highlight-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                </div>
              );
            } else if (item.imageDirection === "left") {
              return (
                <div key={index} className="highlight-container">
                  <div className="highlight-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                  <div className="highlight-text-container">
                    <div className="highlight-text">
                      <h2 className="text-display-title">{item.header}</h2>
                      <p>{item.copy}</p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return;
            }
          })}
        </section>
      )}
    </>
  );
}
