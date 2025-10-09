import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import FAQ from "@/component/Home/Faq";
import HomeBanner from "@/component/Home/HomeBanner";
import { useState } from "react";
import styles from "./styles.module.css";
import Services from "@/component/Home/Services";
import Excellence from "@/component/Home/Excellence";
import QuickAction from "@/common/QuickAction";
import MultiCheckup from "@/component/Home/MultiCheckup";
import Experts from "@/component/Home/Experts";
import Testimonials from "@/component/Home/Testimonials";
import FooterCTA from "@/component/Home/FooterCTA";

const HomePageComponent = () => {
  const [open, setOpen] = useState(false);
  const handleTogglecontactForm = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="p-0 position-relative">
        <Header handleTogglecontactForm={handleTogglecontactForm} />
        <HomeBanner />
        <Excellence />
        <MultiCheckup />
        <Services />
        <Experts />
        <Testimonials />
        <FooterCTA />
        <QuickAction handleTogglecontactForm={handleTogglecontactForm} />
      </div>

      <Popup open={open} onClose={() => handleTogglecontactForm()}>
        <Form
          handleTogglecontactForm={handleTogglecontactForm}
        />
      </Popup>
    </>
  );
};

export default HomePageComponent;