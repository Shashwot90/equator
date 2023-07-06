import React from 'react'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import image1 from '../../assets/1680088474_office_building.jpg';
import image2 from '../../assets/1680088474_IMG_27.jpg';
import image3 from '../../assets/1680088474_IMG_24.jpg';

import image5 from '../../assets/1680088474_IMG_22.jpg';
import image6 from '../../assets/1680088474_IMG_21.jpg';
import image7 from '../../assets/1680088474_IMG_20.jpg';
import './gallery.css'


const Gallery1 = () => {
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
                      className="byebye"
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
                      className="byebye"
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
                      className="byebye"
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
                      className="byebye"
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
                      className="byebye"
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
                      className="byebye"
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
                      className="byebye"
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
                      className="byebye"
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
            <li
              className="page-item disabled"
             // aria-disabled="true"
              aria-label="« Previous"
            >
              <span className="page-link" aria-hidden="true">
                ‹
              </span>
            </li>

            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/gallery2"
              >
                2
              </a>
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
                href="/gallery2"
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

export default Gallery1