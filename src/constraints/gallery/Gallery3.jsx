import React from "react";
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import image1 from '../../assets/1680088474_IMG_9.jpg';
import image2 from '../../assets/1680088474_IMG_10.jpg';
import image3 from '../../assets/1680088474_IMG_11.jpg';
import image4 from '../../assets/1680088582_IMG_1.jpg';
import './gallery.css'

const Gallery3 = () => {
  return (
    <>
    <Header />
    <Navbarr />
    <OtherHeader  name="GALLERY" />
      <div class="Gallery">
        <div class="container">
          <h1 class="text-center gallery-tittle">Gallary</h1>
          <div class="gallery" id="gallery">
            <div class="row">
              <div class="col-md-3">
                <div class="gallery-item"  //style="grid-row-end: span NaN;"
                >
                  <div class="content">
                    <img
                      src={image1}
                      alt=""
                      class="byebye"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="gallery-item"  //style="grid-row-end: span NaN;"
                >
                  <div class="content">
                    <img
                      src={image2}
                      alt=""
                      class="byebye"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="gallery-item"  //style="grid-row-end: span NaN;"
                >
                  <div class="content">
                    <img
                      src={image3}
                      alt=""
                      class="byebye"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="gallery-item"  //style="grid-row-end: span NaN;"
                >
                  <div class="content">
                    <img
                      src={image4}
                      alt=""
                      class="byebye"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pagination-wrapper"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ul class="pagination" role="navigation">
            <li class="page-item">
              <a
                class="page-link"
                href="/gallery2"
                rel="prev"
                aria-label="« Previous"
              >
                ‹
              </a>
            </li>

            <li class="page-item">
              <a
                class="page-link"
                href="/gallery1"
              >
                1
              </a>
            </li>
            <li class="page-item">
              <a
                class="page-link"
                href="/gallery2"
              >
                2
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">3</span>
            </li>

            <li
              class="page-item disabled"
              //aria-disabled="true"
              aria-label="Next »"
            >
              <span class="page-link" aria-hidden="true">
                ›
              </span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery3;
