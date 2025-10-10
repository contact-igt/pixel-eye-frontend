import Link from "next/link";
import styles from "./styles.module.css";
import React, { useState, useRef, useEffect } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

const Navlinks = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  const services = [
    { href: "https://cataracts.pixeleyehospitals.com/", label: "Cataract Eye Surgery" },
    { href: "https://eyespecialist.pixeleyehospitals.com/", label: "LASIK & Refractive Surgery" },
    { href: "https://squinteyes.pixeleyehospitals.com/", label: "Squint Correction" },
    { href: "https://retina.pixeleyehospitals.com/", label: "Retina Treatment" },
    { href: "https://glaucoma.pixeleyehospitals.com/", label: "Glaucoma Treatment" },
  ];

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "", label: "Service", dropdown: services },
    { href: "/contacts", label: "Contacts" },
  ];

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [isMobileServiceOpen]);

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li
              key={link.label}
              className={link.dropdown ? styles.dropdown : ""}
              onMouseEnter={() => link.dropdown && setIsServiceDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setIsServiceDropdownOpen(false)}
            >
              {link.href ? (
                <Link href={link.href} className={styles.navLink}>{link.label}</Link>
              ) : (
                <span className={styles.navLink}>{link.label}</span>
              )}
              {link.dropdown && isServiceDropdownOpen && (
                <ul className={styles.dropdownContent}>
                  {link.dropdown.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} target="_blank" className={styles.dropdownLink}>
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileNav"
        aria-controls="mobileNav"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileNavLabel"></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className={styles.mobileNavList}>
            {links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link href={link.href} className={styles.navLink} data-bs-dismiss="offcanvas">{link.label}</Link>
                ) : (
                  <span
                    className={styles.navLink}
                    onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                  >
                    {link.label}
                    <span className={`${styles.mobileArrow} ${isMobileServiceOpen ? styles.rotate : ''}`}>
                      <DynamicIcon name="chevron-down" color="#153b56" size={20} />
                    </span>
                  </span>
                )}

                {link.dropdown && (
                  <ul
                    ref={dropdownRef}
                    className={styles.mobileDropdownContent}
                    style={{
                      maxHeight: isMobileServiceOpen ? `${dropdownHeight}px` : "0px",
                      opacity: isMobileServiceOpen ? 1 : 0,
                    }}
                  >
                    {link.dropdown.map((service) => (
                      <li key={service.href}>
                        <Link href={service.href} target="_blank" className={styles.dropdownLink}>
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navlinks;
