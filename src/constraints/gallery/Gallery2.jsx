import React from 'react'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import image1 from '../../assets/1680088474_IMG_19.jpg';
import image2 from '../../assets/1680088474_IMG_14.jpg';
import image3 from '../../assets/1680088474_IMG_15.jpg';

import image5 from '../../assets/1680088474_IMG_16.jpg';
import image6 from '../../assets/1680088474_IMG_17.jpg';
import image7 from '../../assets/1680088474_IMG_18.jpg';
import './gallery.css'

const Gallery2 = () => {
  return (
    <>
    <Header />
    <Navbarr />
    <OtherHeader  name="GALLERY" />
      <div className="Gallery">
        <div className="container">
          <h1 className="text-center gallery-tittle">Gallary</h1>
          <div className="gallery" id="gallery">
            <div className="row">
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image1}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image2}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image3}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image5}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image6}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image7}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image1}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="gallery-item" 
                //style="grid-row-end: span NaN;"
                >
                  <div className="content">
                    <img
                      src={image2}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pagination-wrapper"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ul className="pagination" role="navigation">
            <li className="page-item">
              <a
                className="page-link"
                href="/gallery1"
                rel="prev"
                aria-label="« Previous"
              >
                ‹
              </a>
            </li>

            <li className="page-item">
              <a
                className="page-link"
                href="/gallery1"
              >
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/gallery3"
              >
                3
              </a>
            </li>

            <li className="page-item">
              <a
                className="page-link"
                href="/gallery3"
                rel="next"
                aria-label="Next »"
              >
                ›
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery2