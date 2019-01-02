import React from "react";

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
import { getVideos } from "../actions/videosData";
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getVideos } = this.props;
    getVideos();
  }

  render() {
    return (
      <div>
        <div className="clear"> </div>
        <div className="content">
          <div className="left-content">
            <div className="searchbar">
              <div className="search-left">
                <p>Latest Video Form VideosTube</p>
              </div>
              <div className="search-right">
                <input type="text" />
                <input type="submit" value="" />
              </div>
            </div>
            <div className="clear"> </div>

            <div className="box">
              <div className="grids">
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g1copy} title="video-name" />
                  </a>
                  <div className="time">
                    <span>00:10</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g2copy} title="video-name" />
                  </a>
                  <div className="time">
                    <span>2:10</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g4} title="video-name" />
                  </a>
                  <div className="time">
                    <span>10:10</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"> </div>
              <div className="grids">
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g3} title="video-name" />
                  </a>
                  <div className="time">
                    <span>2:30</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g5} title="video-name" />
                  </a>
                  <div className="time">
                    <span>5:10</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g4} title="video-name" />
                  </a>
                  <div className="time">
                    <span>2:00</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"> </div>
              <div className="grids">
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g6} title="video-name" />
                  </a>
                  <div className="time">
                    <span>12:10</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g7} title="video-name" />
                  </a>
                  <div className="time">
                    <span>20:10</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <h3>Consectetur adipisicing elit</h3>
                  <a href="single.html">
                    <img src={g8} title="video-name" />
                  </a>
                  <div className="time">
                    <span>2:50</span>
                  </div>
                  <div className="grid-info">
                    <div className="video-share">
                      <ul>
                        <li>
                          <a href="#">
                            <img src={likeImg} title="links" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={linkImg} title="Link" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src={viewImg} title="Views" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="video-watch">
                      <a href="single.html">Watch Now</a>
                    </div>
                    <div className="clear"> </div>
                    <div className="lables">
                      <p>
                        Labels:<a href="categories.html">Lorem</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"> </div>
            </div>
            <div className="clear"> </div>
            <ul className="dc_pagination dc_paginationA dc_paginationA03">
              <li>
                <a href="#" className="first">
                  First
                </a>
              </li>
              <li>
                <a href="#" className="previous">
                  Previous
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#" className="current">
                  3
                </a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#" className="next">
                  Next
                </a>
              </li>
              <li>
                <a href="#" className="last">
                  Last
                </a>
              </li>
            </ul>
            <div className="clear"> </div>
          </div>
          <div className="right-content">
            <div className="popular">
              <h3>Popular Videos</h3>
              <p>
                <img src="images/l1.png" title="likes" /> 10,000
              </p>
              <div className="clear"> </div>
            </div>
            <div className="grid1">
              <h3>Consectetur adipisicing elit</h3>
              <a href="#">
                <img src={g7} title="video-name" />
              </a>
              <div className="time1">
                <span>2:50</span>
              </div>

              <div className="grid-info">
                <div className="video-share">
                  <ul>
                    <li>
                      <a href="#">
                        <img src={likeImg} title="links" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={linkImg} title="Link" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={viewImg} title="Views" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="video-watch">
                  <a href="#">Watch Now</a>
                </div>
                <div className="clear"> </div>
                <div className="lables">
                  <p>
                    Labels:<a href="#">Lorem</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="clear"> </div>
            <div className="Recent-Vodeos">
              <h3>Recent-Videos</h3>
              <div className="video1">
                <img src={r1} title="video2" />
                <span>Lorem ipsum dolor sit amet,</span>
                <p>
                  s consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <div className="clear"> </div>
              </div>
              <div className="video1 video2">
                <img src={r2} title="video2" />
                <span>Lorem ipsum dolor sit amet,</span>
                <p>
                  s consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <div className="clear"> </div>
              </div>
              <div className="r-all">
                <a href="#">View All</a>
              </div>
            </div>
          </div>
          <div className="clear"> </div>
        </div>
        <div className="clear"> </div>

        <div className="copy-right">
          <p>
            &#169 2013 Videostube. All Rights Reserved | Design by &nbsp;
            <a href="http://w3layouts.com">W3Layouts</a>
          </p>
        </div>
      </div>
    );
  }
}

export default connect(
  () => {
    return {};
  },
  {
    getVideos
  }
)(Home);
