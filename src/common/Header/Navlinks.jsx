import Link from "next/link";
import styles from "./styles.module.css";
import React, { useState, useRef, useEffect } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

const Navlinks = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    }
  }, [isMobileServiceOpen]);

  // Helper for safe class joining
  const cn = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <>
      <div className={styles.navWrapper}>
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
          className={cn(styles.hamburger, mounted && isMobileMenuOpen && styles.active)}
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Custom Mobile Sidebar */}
      <div
        className={cn(styles.mobileSidebar, mounted && isMobileMenuOpen && styles.show)}
        style={{ visibility: mounted && isMobileMenuOpen ? "visible" : "hidden" }}
      >
        <div className={styles.mobileSidebarHeader}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className={styles.mobileSidebarBody}>
          <ul className={styles.mobileNavList}>
            {links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className={styles.navLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span
                    className={styles.navLink}
                    onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                  >
                    {link.label}
                    <span className={cn(styles.mobileArrow, isMobileServiceOpen && styles.rotate)}>
                      {mounted && <DynamicIcon name="chevron-down" color="#153b56" size={20} />}
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
                        <Link
                          href={service.href}
                          target="_blank"
                          className={styles.dropdownLink}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
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

      {/* Overlay to close menu */}
      {mounted && isMobileMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  );
};

export default Navlinks;
