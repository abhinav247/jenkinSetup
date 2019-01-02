import React from 'react';
import LogoImg from "../assets/img/logo.png";
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

export default class Header extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        return (
            <div className="header">
              <div className="logo">
                <a href="index.html">
                  <img src={LogoImg} title="logo" />
                </a>
              </div>
              <div className="top-nav">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="categories.html">Categories</a>
                  </li>
                  <li>
                    <a href="#">Economics</a>
                  </li>
                  <li>
                    <a href="#">Health</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="clear"> </div>
            </div>
          )

     }
}