import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <div className="footer section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <Link href="/">
                <img src="/assets/img/logo.png" alt="" className="image_footer"/>
              </Link>
              <p>
                
              </p>
              <div className="social_profile">
                <ul>
                  <li>
                    <Link href="#" className="f_facebook">
                      <i className="ti-facebook" title="Facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="f_twitter">
                      <i className="ti-twitter" title="Twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="f_instagram">
                      <i className="ti-instagram" title="Instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="f_linkedin">
                      <i className="ti-linkedin" title="LinkedIn"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Epim</h4>
              <ul>
                <li>
                  <Link href="#"></Link>
                </li>
                <li>
                  <Link href="#">Formations</Link>
                </li>
                <li>
                  <Link href="#">Branches</Link>
                </li>
                <li>
                  <Link href="#">ÉVÉNEMENT</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            {/* <div className="single_footer">
              <h4>Popular </h4>
              <ul>
                <li>
                  <Link href="#">Development</Link>
                </li>
                <li>
                  <Link href="#">Arts & design</Link>
                </li>
                <li>
                  <Link href="#">Visual Design</Link>
                </li>
                <li>
                  <Link href="#">Graphic Design</Link>
                </li>
                <li>
                  <Link href="#">Code Inspection</Link>
                </li>
                <li>
                  <Link href="#">Digital Marketing</Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Contact Info</h4>
              <div className="sf_contact">
                <span className="ti-map"></span>
                <p>Plateaux 30 et 31 Imm Bureaux
AMINE Angle rue Tarfaya et Mly Ali Cherif</p>
              </div>
              <div className="sf_contact">
                <span className="ti-mobile"></span>
                <p>05 35 52 09 66</p>
              </div>
              {/* <div className="sf_contact">
                <span className="ti-mobile"></span>
                <p>
                  <Link href="tel:+05 35 52 09 66">Contact Whatsapp</Link>
                </p>
              </div> */}
              <div className="sf_contact">
                <span className="ti-email"></span>
                <p>contact@www.epim.ma</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
