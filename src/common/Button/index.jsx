import Image from "next/image";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Button = ({
  name,
  bgcolor,
  txtcolor,
  icon,
  iconcolor,
  isicon,
  isimg,
  imgicon,
  href,
  handleTogglecontactForm,
  disabled,
  border,
  target,
  suffix,
  hideTextOnMobile,
}) => {
  const buttonStyle = {
    backgroundColor: bgcolor,
    color: txtcolor,
    padding: !name ? "15px 20px" : "15px 25px",
    border: border || "none",
  };

  const content = (
    <>
      {isicon && !suffix && <DynamicIcon name={icon} color={iconcolor} />}
      {isimg && imgicon && !suffix && (
        <Image src={imgicon} width={24} height={24} alt={`${name}-icon`} />
      )}
      {name && <h6 className={`m-0 ${hideTextOnMobile ? styles.hideOnMobile : ''}`}>{name}</h6>}
      {isimg && imgicon && suffix && (
        <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
      )}
      {isicon && suffix && <DynamicIcon name={icon} color={iconcolor} />}
    </>
  );

  return href ? (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`btn text-decoration-none`}
    >
      <button
        onClick={href ? undefined : handleTogglecontactForm}
        className={`btn text-center d-flex align-items-center justify-content-center gap-2 ${styles.button} ${!name ? "rounded-circle " : ""} w-100 h-100`}
        style={buttonStyle}
        disabled={disabled}
      >
        {content}
      </button>
    </a>
  ) : (
    <button
      className={`btn text-center d-flex align-items-center justify-content-center gap-2 ${styles.button}`}
      onClick={handleTogglecontactForm}
      style={buttonStyle}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;