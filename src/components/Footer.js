import React from 'react';
import g1copy from "../assets/img/g1 copy.png";
import likeImg from "../assets/img/likes.png";
import g2copy from "../assets/img/g2 copy.png";
import linkImg from "../assets/img/link.png";
import viewImg from "../assets/img/views.png";
import g4 from "../assets/img/g4.jpg";
import g3 from "../assets/img/g3.jpg";
import g5 from "../assets/img/g5.jpg";
import g6 from "../assets/img/g6.jpg";
import g7 from "../assets/img/g7.jpg";
import g8 from "../assets/img/g8.jpg";
import r1 from "../assets/img/r1.jpg";
import r2 from "../assets/img/r2.jpg";

export default class Footer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <div className="footer">
              <div className="wrap">
                <div className="box1">
                  <h4>Ur's Account</h4>
                  <ul>
                    <li>
                      <a href="#">My Channel</a>
                    </li>
                    <li>
                      <a href="#">Subscription</a>
                    </li>
                    <li>
                      <a href="#">Locations</a>
                    </li>
                    <li>
                      <a href="#">Favourites</a>
                    </li>
                    <li>
                      <a href="#">Add</a>
                    </li>
                    <li>
                      <a href="#">Ur-specials</a>
                    </li>
                    <li>
                      <a href="#">Submission Rules</a>
                    </li>
                  </ul>
                </div>
                <div className="box1">
                  <h4>Policy & Terms</h4>
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Submission Rules</a>
                    </li>
                    <li>
                      <a href="#">Company Buzz</a>
                    </li>
                    <li>
                      <a href="#">My Staff</a>
                    </li>
                    <li>
                      <a href="#">Moodle Hosting</a>
                    </li>
                    <li>
                      <a href="#">OpenCart Hosting</a>
                    </li>
                  </ul>
                </div>
                <div className="box1">
                  <h4>Community</h4>
                  <ul>
                    <li>
                      <a href="#">Standard Support</a>
                    </li>
                    <li>
                      <a href="#">Premier Support</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Host Affiliate</a>
                    </li>
                    <li>
                      <a href="#">Infographics</a>
                    </li>
                    <li>
                      <a href="#">indian Hosting</a>
                    </li>
                    <li>
                      <a href="#">Green Web Hosting</a>
                    </li>
                  </ul>
                </div>
                <div className="box1">
                  <div className="hide-box">
                    <h4>About Us</h4>
                    <ul>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Terms of Service</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Guarantee</a>
                      </li>
                      <li>
                        <a href="#">Link to Us</a>
                      </li>
                      <li>
                        <a href="#">We're Hiring</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box1">
                  <h4>Stay in touch on</h4>
                  <ul className="social">
                    <li>
                      <img src="images/facebook.png" title="facebook" />
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <img src="images/twitter.png" title="twitter" />
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <img src="images/gplus.png" title="google+" />
                      <a href="#">Google+</a>
                    </li>
                  </ul>
                </div>
                <div className="clear"> </div>
              </div>
            </div>
          );

     }

}