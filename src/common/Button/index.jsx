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
}) => {
  const buttonStyle = {
    backgroundColor: bgcolor,
    color: txtcolor,
    padding: !name ? "15px 20px" : "15px 25px",
    border: border || "none",
  };

  const content = (
    <>
      {isicon && <DynamicIcon name={icon} color={iconcolor} />}
      {isimg && imgicon && (
        <Image src={imgicon} width={20} height={20} alt={`${name}-icon`} />
      )}
      {name && <h6 className="m-0">{name}</h6>}
    </>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
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