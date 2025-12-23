import Link from "next/link";
import GetCoffee from "../GetCoffee";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="s-footer">
        <div className="row s-footer__top row-x-center">
          <div className="column xl-4 lg-6 tab-8 mob-12">
            <GetCoffee />
          </div>
        </div>

        <div className="row s-footer__main-content">
          <div className="column xl-6 md-12 s-footer__block s-footer__about">
            <div className="s-footer__logo text-white">
              <h4 className="text-white" style={{ marginTop: 0 }}>
                Resurrection Anglican Church
              </h4>
            </div>

            <p>
              Resurrection Anglican Church is a Christ-centered Anglican parish in Rock Hill, SC, devoted to worship, spiritual formation, and living
              out God’s love through authentic community and service.
            </p>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5186883709703!2d-81.00478361283956!3d34.95728165073925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88568c74b4684edd%3A0xd0c91ab7c5b8691d!2sResurrection%20Anglican%20Church!5e0!3m2!1sen!2sus!4v1766173594197!5m2!1sen!2sus"
              width="400"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            {/* <iframe
              src="https://resurrectionrh.churchcenter.com/calendar?embed=true&amp;view=list"
              className="Calendar___StyledIframe-sc-12vrsfi-1 cyIfJV"
            ></iframe> */}
          </div>
          {/* end s-footer__about */}

          <div className="column xl-6 md-12 s-footer__block s-footer__info">
            <div className="row">
              <div className="column xl-6 lg-12">
                <h5>Location</h5>
                <p>
                  1822 Eden Terrace, Rock Hill, <br />
                  SC 29730
                </p>
              </div>

              <div className="column xl-6 lg-12">
                <h5>Contacts</h5>
                <ul className="link-list">
                  <li>
                    <a href="mailto:#0">info@resurrectionanglicanchurch.com</a>
                  </li>
                  <li>
                    <a href="tel:+2135551212">(213) 555-1234</a>
                  </li>
                </ul>
              </div>

              <div className="column">
                <h5>Services</h5>
                <ul className="opening-hours">
                  <li>
                    <span className="opening-hours__days">Sunday</span>
                    <span className="opening-hours__time">4:00pm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end s-footer__info */}
        </div>
        {/* end s-footer__main-content */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5186883709703!2d-81.00478361283956!3d34.95728165073925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88568c74b4684edd%3A0xd0c91ab7c5b8691d!2sResurrection%20Anglican%20Church!5e0!3m2!1sen!2sus!4v1766173594197!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0, marginTop: "70px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="row s-footer__bottom">
          <div className="column xl-6 lg-12">
            <ul className="s-footer__social social-list">
              <li>
                <a href="#0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                  </svg>
                  <span className="u-screen-reader-text">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
          {/* end section-footer__social */}

          <div className="column xl-6 lg-12">
            <p className="ss-copyright">
              <span>© Resurrection Anglican Church {new Date().getFullYear()}</span>
              <span>Website by Brett Sartain</span>
            </p>
          </div>
        </div>
        {/* end section-footer__bottom */}

        <div className="ss-go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
            >
              <path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
            </svg>
          </a>
          <span>Back To Top</span>
        </div>
        {/* end ss-go-top */}
      </footer>
    </>
  );
}
