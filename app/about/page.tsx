export default function About() {
  return (
    <>
      <article className="s-content">
        {/* ## pageheader */}
        <section className="s-pageheader" style={{ backgroundImage: "url(images/family-worship.jpeg)" }}>
          <div className="row">
            <div className="column xl-12 s-pageheader__content">
              <h1 className="page-title">About Us</h1>
            </div>
          </div>
        </section>

        {/* ## pagecontent */}
        <section className="s-pagecontent pagecontent">
          <div className="row width-narrower pageintro">
            <div className="column xl-12">
              <p className="lead">
                Resurrection Anglican Church is a vibrant Anglican congregation in Rock Hill, SC, committed to sharing the extravagant love of God
                through worship, community, and service. Rooted in the life, death, and resurrection of Jesus Christ, the church seeks to help people
                experience the Trinity, build authentic relationships, and engage the wider city with compassion and faith. With a focus on welcoming
                all and living out biblical truth. Resurrection offers a place for spiritual growth, connection, and mission in the heart of the
                community.
              </p>
            </div>
          </div>

          <div className="row width-narrow content-block content-block--media-right">
            <div className="column content-block__text">
              <h3>Our Mission</h3>
              <p>
                <strong>Experience the Trinity... Embody community... Engage the City </strong>
              </p>{" "}
              <p>
                We believe that God’s rescue plan is extravagant. Jesus’ life, death and resurrection saves us from our sins and allows us to be in
                relationship with the Triune God. Salvation brings the indwelling of the Holy Spirit, uniting us to Jesus Christ and sealing us as
                sons and daughters of the Father. We gather on Sundays to corporately praise Father, Son and Spirit, lifting up our voices and hearts
                in celebration. But we also gather to prepare us participate in God’s Mission. Basking in the love that is the Trinity, growing in
                relationship with God and Church, prepares us, fills us, gifts us with the stamina, the desire, the clarity on how to rightly engage
                the larger community, taking the light into the darkness, showing the world God’s extravagant love.
              </p>
            </div>
            <div className="column content-block__media">
              <figure>
                <img src="images/about-img-01.jpg" srcSet="images/about/about-img-01.jpg 1x, images/about/about-img-01@2x.jpg 2x" alt="" />
              </figure>
            </div>
          </div>

          <div className="row width-narrow content-block content-block--media-left">
            <div className="column content-block__text">
              <h3>A Dining Experience to Remember</h3>
              <p>
                Eaque temporibus culpa perferendis expedita assumenda mollitia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla. Distinctio
                obcaecati nesciunt asperiores dolorum tenetur voluptates, nemo alias doloremque.
              </p>
              <p>Voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla.</p>
            </div>
            <div className="column content-block__media">
              <figure>
                <img src="images/about/about-img-02.jpg" srcSet="images/about/about-img-02.jpg 1x, images/about/about-img-02@2x.jpg 2x" alt="" />
              </figure>
            </div>
          </div>

          <div className="row width-narrow content-block content-block--media-right">
            <div className="column content-block__text">
              <h3>Locally Inspired, Sustainably Sourced</h3>
              <p>
                Eaque temporibus culpa perferendis expedita assumenda mollitia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla. Distinctio
                obcaecati nesciunt asperiores dolorum tenetur voluptates, nemo alias doloremque.
              </p>
            </div>
            <div className="column content-block__media">
              <figure>
                <img src="images/about/about-img-03.jpg" srcSet="images/about/about-img-03.jpg 1x, images/about/about-img-03@2x.jpg 2x" alt="" />
              </figure>
            </div>
          </div>

          <div className="row width-narrow content-block content-block--grey">
            <div className="column xl-12">
              <h3>Our Culinary Excellence</h3>
              <p>
                Eaque temporibus culpa perferendis expedita assumenda mollitia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                voluptates voluptatum animi numquam quas ea praesentium quaerat maxime sunt odit inventore itaque est et autem sequi nulla. Distinctio
                obcaecati nesciunt asperiores dolorum tenetur voluptates, nemo alias doloremque. Quos cumque ipsum laudantium odio vero aut odit
                nostrum aliquam? Nostrum in facilis, minus fuga quasi voluptas explicabo possimus incidunt, expedita tempora eius rem nobis sequi.
                Doloribus esse sint suscipit quam nisi blanditiis voluptate explicabo.
              </p>
            </div>
          </div>

          <div className="row width-narrow content-block">
            <div className="column xl-12">
              <h3>Our Culinary Philosophy</h3>

              <div className="grid-list-items list-items">
                {[
                  {
                    title: "Quality",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum.",
                  },
                  {
                    title: "Heritage",
                    text: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas.",
                  },
                  {
                    title: "Precision",
                    text: "Mollitia accusamus consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum.",
                  },
                  {
                    title: "Harmony",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus consectetur adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum.",
                  },
                  {
                    title: "Inclusivity",
                    text: "Molestias, autem impedit culpa dolores excepturi, quidem unde ducimus, rerum commodi deserunt earum, minus voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe doloremque provident quas.",
                  },
                  {
                    title: "Innovation",
                    text: "Mollitia accusamus consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisicing elit excepturi corrupti nam quae exercitationem cupiditate, provident ipsa delectus vero possimus reprehenderit quas ut officiis tempora voluptatum.",
                  },
                ].map((item) => (
                  <div key={item.title} className="grid-list-items__item list-items__item u-remove-bottom">
                    <div className="list-items__item-header">
                      <h6 className="list-items__item-small-title">{item.title}</h6>
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
