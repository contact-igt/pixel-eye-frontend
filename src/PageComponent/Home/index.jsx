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

const HomePageComponent = () => {
  const [open, setOpen] = useState(false);
  const [formTitle, setFormTitle] = useState({ title: "", subtitle: "" });
  const handleTogglecontactForm = (title, subtitle) => {
    setFormTitle({ title: title, subtitle: subtitle });
    setOpen(!open);
  };

  return (
    <>
      <div className="p-0 position-relative">
        <Header />
        <HomeBanner />
        <Excellence />
        <MultiCheckup />
        <Services />
        <Experts />
        <Testimonials />
        <QuickAction handleTogglecontactForm={handleTogglecontactForm} />
      </div>

      <Popup open={open} onClose={() => handleTogglecontactForm()}>
        <Form
          handleTogglecontactForm={handleTogglecontactForm}
          title={formTitle}
        />
      </Popup>
    </>
  );
};

export default HomePageComponent;