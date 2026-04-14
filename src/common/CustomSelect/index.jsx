import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";

const CustomSelect = ({ options, value, onChange, placeholder, error }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={ref} className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.trigger} ${error ? styles.triggerError : ""} ${open ? styles.triggerOpen : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={value ? styles.selected : styles.placeholder}>
          {value || placeholder}
        </span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronUp : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className={styles.dropdown}>
          {options.map((option) => (
            <li
              key={option}
              className={`${styles.option} ${value === option ? styles.optionActive : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
