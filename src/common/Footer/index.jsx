import { HomeData } from "@/constant/Home";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-7 col-12 ">
            <div className={`${styles.imgcontainer} my-3`}>
              <a
                href="https://www.pixeleyehospitals.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/pixel_logo.png"
                  alt="Pixel Eye Hospitals Logo"
                  className={styles.logo}
                />
              </a>
            </div>

            <div className={`${styles.textcontainer}`}>
              <p>{HomeData?.footer?.about}</p>
              <a
                href="https://www.pixeleyehospitals.com/about-hospital.html"
                target="_blank"
              >
                Read More ...
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-12 ">
            <div className="d-flex justify-content-md-center justify-content-start mt-5 mt-md-0">
              <div className="mt-2">
                <div className={`${styles.footertitle}`}>
                  <h6>Visiting Hours</h6>
                </div>

                {HomeData?.footer?.vistis?.map((data, i) => (
                  <div className="d-flex align-items-start gap-2 my-4" key={i}>
                    <div>
                      <DynamicIcon name="clock" size={18} />
                    </div>

                    <div className={styles.visit}>
                      <h6>{data?.weeks}</h6>
                      <p>{data?.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-3 col-12">
            <div className="d-flex justify-content-lg-center  justify-content-start mt-md-5 mt-4 mt-lg-0">
              <div className="mt-2">
                <div className={`${styles.footertitle}`}>
                  <h6>Follow Us</h6>
                </div>
                {HomeData?.footer?.socilalink?.map((data, i) => (
                  <a href={data?.link}>
                    <div
                      className={`${styles.socilalink} d-flex align-items-center gap-2 my-4`}
                    >
                      <DynamicIcon name={data?.icon} size={18} />
                      <h6>{data?.name}</h6>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-lg-5 mt-4" id="addressSection">
        <div className={`${styles.footertitle} text-md-center text-start `}>
          <h6>Reach Us</h6>
        </div>

        <div className="d-md-flex align-items-center justify-content-evenly mt-md-5 mt-4">
          <div className={styles.addressWrapper}>
            <div className={`${styles.address} d-flex align-items-start gap-2`}>
              <div className={styles.addresspin}>
                <DynamicIcon name="map-pin" size={20} />
              </div>
              <div className={styles.addresstext}>
                <p>{HomeData?.footer?.address2}</p>
              </div>
            </div>

            <div className={`${styles.number} d-flex align-items-center gap-2`}>
              <div className={styles.numberpin}>
                <DynamicIcon name="phone" size={20} />
              </div>
              <div
                className={`${styles.numbertext} d-flex align-items-center gap-2  my-4`}
              >
                <a href={HomeData?.footer?.number1href}>
                  {HomeData?.footer?.number1}
                </a>
                <a href={HomeData?.footer?.number2href}>
                  {HomeData?.footer?.number2}
                </a>
              </div>
            </div>

            <div className={`${styles.email} d-flex align-items-center gap-2`}>
              <div className={styles.emailpin}>
                <DynamicIcon name="mail" size={20} />
              </div>
              <div
                className={`${styles.emailtext} d-flex align-items-center gap-2 `}
              >
                <a href={HomeData?.footer?.emailhref}>
                  {HomeData?.footer?.email}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.addressWrapper}>
            <div className={`${styles.address} d-flex align-items-start gap-2`}>
              <div className={styles.addresspin}>
                <DynamicIcon name="map-pin" size={20} />
              </div>
              <div className={styles.addresstext}>
                <p>{HomeData?.footer?.address1}</p>
              </div>
            </div>

            <div className={`${styles.number} d-flex align-items-center gap-2`}>
              <div className={styles.numberpin}>
                <DynamicIcon name="phone" size={20} />
              </div>
              <div
                className={`${styles.numbertext} d-flex align-items-center gap-2  my-4`}
              >
                <a href={HomeData?.footer?.number1href}>
                  {HomeData?.footer?.number1}
                </a>
                <a href={HomeData?.footer?.number2href}>
                  {HomeData?.footer?.number2}
                </a>
              </div>
            </div>

            <div className={`${styles.email} d-flex align-items-center gap-2`}>
              <div className={styles.emailpin}>
                <DynamicIcon name="mail" size={20} />
              </div>
              <div
                className={`${styles.emailtext} d-flex align-items-center gap-2 `}
              >
                <a href={HomeData?.footer?.emailhref}>
                  {HomeData?.footer?.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
