import React from "react";
import Card1 from "../card1/Card1";
import Card2 from "../card2/Card2";
import Card3 from "../card3/Card3";
import Card4 from "../card4/Card4";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Home = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div>
        <Card1 />
      </div>
      {/* Card 2 */}
      <div className="mt-[80px]">
        <Card2 />
      </div>
      {/* Card 3 */}

      <div className="mt-[50px]">
        <Card3 />
      </div>
      {/* Card 4 */}

      <div>
        <Card4 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
