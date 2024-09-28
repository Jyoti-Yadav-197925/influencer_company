import React from 'react';
import MyProject from './MyProject';
import { Col, Container, Row } from 'react-bootstrap';
import style from './ActiveInfluencer.module.css';
// import card_profile_img from '../../assets/card_profile_img.png'; // Uncomment if needed
// import post_img from '../../assets/post_img.png'; // Uncomment if needed
// import reel_img from '../../assets/reel_img.png'; // Uncomment if needed

const ActiveInfluencer = () => {
  const cardArray = ['', '']; // Array for cards

  return (
    <div>
      <MyProject />
      <section>
        <Container>
          <Row className='mt-5'>
            <h2>Active Projects</h2>
          </Row>
          <Row className="my-5">
            <div className={style.active_influencer_card_sec}>
              {cardArray.map((card, index) => (
                <Col key={index} className={`p-4 border ${style.card_profile}`}>
                  <div className="d-flex my-4 px-3">
                    <div>
                      <img src={''} alt="" /> {/* Add your image */}
                    </div>
                    <div className="px-3 pt-3">
                      <h5>William Joy</h5>
                      <p>Certified fitness Coach | Zumba trainer</p>
                      <button className={`${style.paid_btn} py-2 px-4`}>$500 Paid</button>
                    </div>
                  </div>
                  <div className="px-3 pt-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas ut,
                      enim accusantium cumque possimus sequi quisquam assumenda! Odio nesciunt nulla eius
                      quia est laborum eaque doloremque ipsa nihil numquam.
                    </p>
                  </div>
                  <div className="d-flex justify-content-between my-4 px-3" style={{ color: '#2C3E50' }}>
                    <div>
                      <span>Follower</span><br />
                      <span>54k</span>
                    </div>
                    <div>
                      <span>View</span><br />
                      <span>54k</span>
                    </div>
                    <div>
                      <span>Engagement</span><br />
                      <span>54%</span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img src={''} alt="" /> {/* Add your post image */}
                    </div>
                    <div className="mt-3 mx-4">
                      <h4>Post</h4>
                      <p className="text-muted">2 posts with the products and how to use product with caption and promo code</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img src={''} alt="" /> {/* Add your reel image */}
                    </div>
                    <div className="mt-3 mx-4">
                      <h4>Reel</h4>
                      <p className="text-muted">1 reel with the products and how to use product with caption and promo code</p>
                    </div>
                  </div>
                  <div>
                    <button className={`${style.completed_btn} w-100 py-3 my-5`}>Mark As Completed</button>
                  </div>
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ActiveInfluencer;
