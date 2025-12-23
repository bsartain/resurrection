import GetCoffee from "@/components/GetCoffee";

export default function Menu() {
  return (
    <>
      <article className="s-content">
        {/* ## pageheader */}
        <section className="s-pageheader pageheader" style={{ backgroundImage: "url(images/pageheader/pageheader-menu-bg-3000.jpg)" }}>
          <div className="row">
            <div className="column xl-12 s-pageheader__content">
              <h1 className="page-title">Discover Our Menu</h1>
            </div>
          </div>
        </section>

        {/* ## pagecontent */}
        <section className="s-pagecontent pagecontent">
          <div className="row width-narrower pageintro text-center">
            <div className="column xl-12">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eos quas blanditiis, quos sint nostrum fugit aperiam inventore optio
                itaque molestias corporis, ipsa tenetur eligendi nihil iste porro, natus culpa consequuntur? Maxime, corporis tempore. Sed tenetur
                veritatis velit recusandae eum.
              </p>
            </div>
          </div>

          <div className="row width-narrower content-block">
            <div className="column xl-12">
              <div className="menu-block">
                {/* Starter Menu */}
                <div className="menu-block__group">
                  <h2 className="h6 menu-block__cat-name">Starter</h2>
                  <ul className="menu-list">
                    {[
                      { name: "Garlic Bread", desc: "Slices of freshly baked bread, brushed with garlic butter and parsley.", price: 4.99 },
                      {
                        name: "Quesadilla",
                        desc: "Flour tortilla filled with cheese, sautéed onions, and bell peppers. Served with sour cream and salsa.",
                        price: 7.99,
                      },
                      {
                        name: "Caprese Skewers",
                        desc: "Cherry tomatoes, fresh mozzarella, and basil skewered on a stick and drizzled with balsamic glaze.",
                        price: 6.99,
                      },
                      {
                        name: "Spinach and Artichoke Dip",
                        desc: "Creamy dip made with spinach, artichoke hearts, and a blend of cheeses, served with tortilla chips",
                        price: 7.99,
                      },
                      { name: "Bruschetta", desc: "Toasted bread topped with fresh tomatoes, basil, and balsamic glaze.", price: 5.99 },
                    ].map((item) => (
                      <li key={item.name} className="menu-list__item">
                        <div className="menu-list__item-desc">
                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                        </div>
                        <div className="menu-list__item-price">
                          <span>$</span>
                          {item.price.toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mains Menu */}
                <div className="menu-block__group">
                  <h2 className="h6 menu-block__cat-name">Mains</h2>
                  <ul className="menu-list">
                    {[
                      {
                        name: "Grilled Salmon",
                        desc: "Fresh salmon fillet served with roasted vegetables and garlic mashed potatoes.",
                        price: 18.99,
                      },
                      {
                        name: "Grilled Filet Mignon",
                        desc: "Tender and juicy filet mignon seasoned with herbs, grilled to your preference, and served with roasted vegetables.",
                        price: 28.5,
                      },
                      {
                        name: "Pesto Chicken Pasta",
                        desc: "Grilled chicken breast tossed with linguine in a basil pesto cream sauce, garnished with sun-dried tomatoes and parmesan cheese.",
                        price: 18.5,
                      },
                      {
                        name: "Vegetable Stir-Fry",
                        desc: "A medley of colorful vegetables stir-fried in a savory soy-ginger sauce, served with steamed jasmine rice.",
                        price: 15.0,
                      },
                      {
                        name: "Portobello Mushroom Burger",
                        desc: "Grilled portobello mushroom cap served on a brioche bun with melted Swiss cheese, caramelized onions, and garlic aioli.",
                        price: 14.0,
                      },
                    ].map((item) => (
                      <li key={item.name} className="menu-list__item">
                        <div className="menu-list__item-desc">
                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                        </div>
                        <div className="menu-list__item-price">
                          <span>$</span>
                          {item.price.toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desserts Menu */}
                <div className="menu-block__group">
                  <h2 className="h6 menu-block__cat-name">Desserts</h2>
                  <ul className="menu-list">
                    {[
                      {
                        name: "Vanilla Ice Cream",
                        desc: "Creamy vanilla ice cream served with a choice of toppings: chocolate sauce, caramel, or fresh berries.",
                        price: 4.99,
                      },
                      {
                        name: "Yogurt and Strawberry Delight",
                        desc: "Greek yogurt topped with fresh strawberries, honey, and a sprinkle of granola.",
                        price: 5.99,
                      },
                      {
                        name: "Chocolate Lava Cake",
                        desc: "Warm, gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream.",
                        price: 8.5,
                      },
                      {
                        name: "Classic Tiramisu",
                        desc: "Layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder and topped with chocolate shavings.",
                        price: 7.99,
                      },
                      {
                        name: "Decadent Chocolate Fondue",
                        desc: "Rich and velvety chocolate fondue served with an assortment of fresh fruits and marshmallows for dipping.",
                        price: 11.99,
                      },
                    ].map((item) => (
                      <li key={item.name} className="menu-list__item">
                        <div className="menu-list__item-desc">
                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                        </div>
                        <div className="menu-list__item-price">
                          <span>$</span>
                          {item.price.toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Drinks Menu */}
                <div className="menu-block__group">
                  <h2 className="h6 menu-block__cat-name">Drinks</h2>
                  <ul className="menu-list">
                    {[
                      {
                        name: "Signature Mojito",
                        desc: "A refreshing blend of white rum, fresh mint leaves, lime juice, simple syrup, and soda water.",
                        price: 8.99,
                      },
                      {
                        name: "Berry Burst Smoothie",
                        desc: "A delicious blend of mixed berries, banana, yogurt, and a touch of honey for natural sweetness.",
                        price: 6.5,
                      },
                      {
                        name: "Cucumber Lime Sparkler",
                        desc: "A refreshing drink made with cucumber, lime juice, soda water, and a hint of mint.",
                        price: 4.5,
                      },
                      { name: "Iced Caramel Macchiato", desc: "Chilled espresso with milk and caramel syrup over ice.", price: 5.5 },
                      {
                        name: "Fresh Squeezed Lemonade",
                        desc: "Classic lemonade made with fresh lemon juice and a touch of sweetness.",
                        price: 3.99,
                      },
                    ].map((item) => (
                      <li key={item.name} className="menu-list__item">
                        <div className="menu-list__item-desc">
                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                        </div>
                        <div className="menu-list__item-price">
                          <span>$</span>
                          {item.price.toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row width-narrower row-x-center content-block content-block--grey cta-block">
            <div className="column xl-10 mob-12">
              <h3>Feast on a Flavorful and Unique Moment</h3>
              <p className="attention-getter">
                Eaque temporibus culpa perferendis expedita assumenda mollitia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                quaerat maxime perferendis expedita sunt odi.
              </p>
              <GetCoffee />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
