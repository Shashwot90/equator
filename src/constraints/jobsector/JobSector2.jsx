import React from 'react'
import { Footer, Header, Navbarr, OtherHeader} from '../../components';
import image1 from '../../assets/1680429383_workshop.jpg';
import image2 from '../../assets/1680429451_IT-Personnel.jpg';
import image3 from '../../assets/1680429491_iStock_000008930645Large.jpg'
import image4 from '../../assets/1680429572_ls.jpg';
import image5 from '../../assets/1680429614_staff.jpg';
import image6 from '../../assets/1680429644_iStock_000019069412XSmall.jpg';
import './jobsector.css';

const JobSector2 = () => {
  return (
    <>
      <Header />
      <Navbarr />
      <OtherHeader name="JOB SECTOR" />
      <div class="container">
        <div class="job-sectors-area">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <a href="/work-shop-technician">
                <div class="bg-items">
                  <div
                    class="items"
                    style={{ backgroundImage : `url(${image1})` }}
                  >
                    <div class="job-sector-title">
                      <p>Work Shop Technician</p>
                    </div>

                    <div class="tl5"></div>
                    <div class="br5"></div>
                    <div class="details">
                      <p>Work Shop Technician</p>
                      <h6>Read more</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <a href="/IT-personnels">
                <div class="bg-items">
                  <div
                    class="items"
                    style={{ backgroundImage : `url(${image2})` }}
                  >
                    <div class="job-sector-title">
                      <p>IT personnels</p>
                    </div>

                    <div class="tl5"></div>
                    <div class="br5"></div>
                    <div class="details">
                      <p>IT personnels</p>
                      <h6>Read more</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <a href="/medical-staffs">
                <div class="bg-items">
                  <div
                    class="items"
                    style={{ backgroundImage : `url(${image3})` }}
                  >
                    <div class="job-sector-title">
                      <p>Medical &amp; Health Personnels</p>
                    </div>

                    <div class="tl5"></div>
                    <div class="br5"></div>
                    <div class="details">
                      <p>Medical &amp; Health Personnels</p>
                      <h6>Read more</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <a href="/tailoring-and-laundry-personnels">
                <div class="bg-items">
                  <div
                    class="items"
                    style={{ backgroundImage : `url(${image4})` }}
                  >
                    <div class="job-sector-title">
                      <p>Garment / Tailoring and laundry Personnels</p>
                    </div>

                    <div class="tl5"></div>
                    <div class="br5"></div>
                    <div class="details">
                      <p>Garment / Tailoring and laundry Personnels</p>
                      <h6>Read more</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <a href="/office-staff">
                <div class="bg-items">
                  <div
                    class="items"
                    style={{ backgroundImage : `url(${image5})`}}
                  >
                    <div class="job-sector-title">
                      <p>Office Staff</p>
                    </div>

                    <div class="tl5"></div>
                    <div class="br5"></div>
                    <div class="details">
                      <p>Office Staff</p>
                      <h6>Read more</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <a href="/cleaning-section">
                <div class="bg-items">
                  <div
                    class="items"
                    style= {{ backgroundImage : `url(${image6})` }}
                  >
                    <div class="job-sector-title">
                      <p>Cleaning Section</p>
                    </div>

                    <div class="tl5"></div>
                    <div class="br5"></div>
                    <div class="details">
                      <p>Cleaning Section</p>
                      <h6>Read more</h6>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          class="pagination-wrapper"
          style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center' }}
        >
          <ul class="pagination" role="navigation">
            <li class="page-item">
              <a
                class="page-link"
                href="/job-sector"
                rel="prev"
                aria-label="« Previous"
              >
                ‹
              </a>
            </li>

            <li class="page-item">
              <a
                class="page-link"
                href="/job-sector"
              >
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">2</span>
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
}

export default JobSector2