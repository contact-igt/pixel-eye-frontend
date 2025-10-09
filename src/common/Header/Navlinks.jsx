import Link from "next/link";
import styles from "./styles.module.css";
import React, { useState } from 'react';

const Navlinks = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const services = [
    { href: "https://cataracts.pixeleyehospitals.com/", label: "Cataract Eye Surgery" },
    { href: "https://eyespecialist.pixeleyehospitals.com/", label: "LASIK & Refractive Surgery" },
    { href: "https://squinteyes.pixeleyehospitals.com/", label: "Squint Correction" },
    { href: "https://retina.pixeleyehospitals.com/", label: "Glaucoma Treatment" },
  ];

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "", label: "Service", dropdown: services },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${isNavOpen ? styles.active : ''}`}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li
              key={link.href}
              className={link.dropdown ? styles.dropdown : ''}
              onMouseEnter={() => link.dropdown && setIsServiceDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setIsServiceDropdownOpen(false)}
            >
              {link?.href !== "" ? (
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>) : <span className={styles.navLink}>
                {link.label}
              </span>
              }
              {link.dropdown && isServiceDropdownOpen && (
                <ul className={styles.dropdownContent}>
                  {link.dropdown.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className={styles.dropdownLink}>
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
      <button className={styles.hamburger} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Navlinks;
