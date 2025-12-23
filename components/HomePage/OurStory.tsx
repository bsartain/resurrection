// components/About.tsx
import Image from "next/image";
import Link from "next/link";
import GetCoffee from "../GetCoffee";

export default function OurStory() {
  return (
    <section id="about" className="s-about">
      <div className="row s-about__content">
        <div className="column xl-12 s-about__content-grid grid-block">
          {/* Header */}
          <div className="s-about__content-header section-header">
            <h2 className="text-display-title with-line">Our Story</h2>
            <div className="s-about__content-header-inner">
              <p className="text-desc">
                "Visiting a new church can be overwhelming sometimes. As you consider our church, we hope you will discover a loving community of
                believers connected to our ancient Christian roots and planted deeply here in the heart of Rock Hill, SC. Please reach out if you have
                any questions or need directions."
              </p>
              <p>
                <strong>- Rev. Bill Scott</strong>
              </p>
              <GetCoffee />

              {/* Images */}
              <div className="s-about__content-media">
                <Image
                  className="s-about__media-big"
                  src="/images/potluck.jpeg"
                  alt="Resurrection Church Potluck"
                  width={800}
                  height={600}
                  priority
                />
                <Image className="s-about__media-small" src="/images/shepherd-boy.jpeg" alt="Resurrection Kids Play" width={400} height={400} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="s-about__content-main">
            <p className="attention-getter">
              Resurrection Anglican Church is a welcoming community in the heart of Rock Hill where people of all ages can explore faith, grow in
              relationship with God, and belong to something deeper than themselves. As part of the global Anglican tradition, our worship is deeply
              rooted in Scripture and the historic practices of the church, drawing from ancient Christian rhythms that help us center our lives on
              the life, death, and resurrection of Jesus. Whether you’re curious about faith for the first time or returning after a long season away,
              you’ll find a place where questions are welcome, and hearts are open.
            </p>

            <p className="attention-getter">
              At Resurrection, community isn’t just a word — it’s something we live out together. From joyful Sunday gatherings to opportunities to
              connect throughout the week, we seek to <strong>Experience the Trinity, Embody Community, and Engage the City</strong> — inviting
              everyone into a life of worship, service, and genuine connection. Children are welcomed as full participants in the life of the church,
              and families are encouraged to grow together in faith. We’re a parish that loves this neighborhood and wants to walk alongside you
              however you’re journeying — with open arms and open doors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
