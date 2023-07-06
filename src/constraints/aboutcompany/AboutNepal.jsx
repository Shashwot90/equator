import React from "react";
import { Footer, Header, Navbarr, OtherHeader } from "../../components";
import image1 from "../../assets/1680085598_83817-004-C5DB59F8.jpg";
import "./aboutcompany.css";

const AboutNepal = () => {
  return (
    <>
      <Header />
      <Navbarr />
      <OtherHeader name="ABOUT NEPAL" />
      <div
        class="about wow fadeInUp hii"
        data-wow-delay="0.1s"
        
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="about-img">
                <img
                  src={image1}
                  alt="himal"
                  style={{maxWidth: '100%', height: '510px', marginBottom: '29px' }}
                />
              </div>
            </div>
            <div class="col-lg-12">
              <div class="section-header text-left">
                <p>About Nepal</p>
                 
              </div>
              <div class="about-text">
                <p>
                  Nepal, nestled in South Asia between the Himalayas and the
                  Gangetic plains, is a captivating land of diverse geography
                  and rich cultural heritage. Its breathtaking landscapes range
                  from the soaring peaks of the Himalayas, including Mount
                  Everest, to the fertile Terai plains in the south.
                </p>

                <p>
                  The capital city, Kathmandu, is a vibrant hub of ancient
                  temples, palaces, and traditional architecture. UNESCO World
                  Heritage Sites like Durbar Square, Pashupatinath Temple,
                  Swayambhunath Stupa, and Boudhanath Stupa showcase the
                  country's historical and religious significance.
                </p>

                <p>
                  Nepal is renowned as a trekker's paradise, with famous routes
                  like the Annapurna Circuit and Everest Base Camp attracting
                  adventurers from around the world. The country's national
                  parks, such as Chitwan and Sagarmatha, offer opportunities to
                  witness diverse wildlife, including tigers, rhinoceros,
                  elephants, and rare bird species.
                </p>

                <p>
                  Nepalese culture is a blend of Hindu and Buddhist traditions,
                  creating a unique spiritual atmosphere. Festivals like Dashain
                  and Tihar showcase vibrant celebrations and rituals. The
                  warmth and hospitality of the Nepalese people make visitors
                  feel welcome and embraced by the local culture.
                </p>

                <p>
                  Nepalese cuisine is a delightful fusion of flavors influenced
                  by neighboring countries like India and Tibet. Dal Bhat, a
                  lentil soup served with rice, is a staple dish, while momo, a
                  type of dumpling, has gained popularity both within Nepal and
                  internationally.
                </p>

                <p>
                  Despite its natural and cultural riches, Nepal faces
                  challenges such as political transitions, earthquakes, and
                  economic development. However, the resilience and
                  determination of the Nepalese people shine through, making
                  Nepal an enchanting destination that offers not only stunning
                  landscapes and historical wonders but also a deep sense of
                  spirituality and warm hospitality to all who visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutNepal;
