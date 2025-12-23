import GetCoffee from "@/components/GetCoffee";

export default function Reservations() {
  return (
    <>
      <article className="s-content">
        {/* ## pageheader */}
        <section className="s-pageheader pageheader" style={{ backgroundImage: "url(images/pageheader/pageheader-reservations-bg-3000.jpg)" }}>
          <div className="row">
            <div className="column xl-12 s-pageheader__content">
              <h1 className="page-title">Reservations</h1>
            </div>
          </div>
        </section>

        {/* ## pagecontent */}
        <section className="s-pagecontent pagecontent">
          <div className="row width-narrower pageintro text-center">
            <div className="column xl-12">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio
                itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur.
              </p>
            </div>
          </div>

          <div className="row width-narrower content-block">
            <div className="column xl-12">
              <form name="rform" id="rform" className="reservation-form" method="post" action="" autoComplete="off">
                <fieldset className="row">
                  <div className="column xl-6 tab-12">
                    <label htmlFor="rname">Name: </label>
                    <input type="text" name="rname" id="rname" className="u-fullwidth" placeholder="Enter Your Name" defaultValue="" />
                  </div>

                  <div className="column xl-6 tab-12">
                    <label htmlFor="rphone">Contact Number: </label>
                    <input type="tel" name="rphone" id="rphone" className="u-fullwidth" placeholder="Enter Your Contact No." defaultValue="" />
                  </div>

                  <div className="column xl-6 tab-12">
                    <label htmlFor="rdate">Date: </label>
                    <input type="text" name="rdate" id="rdate" className="u-fullwidth" placeholder="eg: 8/01/2023" defaultValue="" />
                  </div>

                  <div className="column xl-6 tab-12">
                    <label htmlFor="rparty-size">Party Size (approx):</label>
                    <input type="number" name="rparty-size" id="rparty-size" className="u-fullwidth" placeholder="eg: 4" defaultValue="" />
                  </div>

                  <div className="column xl-12 message u-add-bottom">
                    <label htmlFor="radd-info">Additional Information: </label>
                    <textarea name="radd-info" id="radd-info" className="u-fullwidth" placeholder="Type your additional info here" />
                  </div>

                  <div className="rform__bottom column xl-12">
                    <div className="row">
                      <div className="column xl-6 tab-12">
                        <label className="rcheckbox u-add-bottom">
                          <input type="checkbox" />
                          <span className="label-text">Add any kind of mandatory acknowledgement that customers are required to agree to here.</span>
                        </label>
                      </div>

                      <div className="column xl-6 tab-12">
                        <input
                          name="submit"
                          id="submit"
                          className="btn btn--primary btn-wide btn--large u-fullwidth"
                          type="submit"
                          value="Submit Reservation"
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>

          <div className="row width-narrower row-x-center content-block content-block--grey cta-block">
            <div className="column xl-10 mob-12">
              <h3>Book with OpenTable</h3>
              <p className="attention-getter">
                For a quick and convenient way to make a reservation, you can also book through{" "}
                <a href="https://www.opentable.com/" target="_blank" rel="noopener noreferrer">
                  OpenTable
                </a>
                . Simply click the button below to secure your table in just a few easy steps.
              </p>

              <GetCoffee />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
