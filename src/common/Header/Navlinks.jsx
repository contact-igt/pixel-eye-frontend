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
    { href: "/service/cataract-eye-surgery", label: "Cataract Eye Surgery" },
    { href: "/service/smart-surface-lasik", label: "Smart Surface LASIK" },
    { href: "/service/custom-eyes-lasik", label: "Custom Eyes LASIK" },
    { href: "/service/prk", label: "PRK (Photorefractive Keratectomy)" },
  ];

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service", dropdown: services },
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
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
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
