import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import HomeBanner from "@/component/Home/HomeBanner";
import { useState } from "react";
import Services from "@/component/Home/Services";
import Excellence from "@/component/Home/Excellence";
import QuickAction from "@/common/QuickAction";
import MultiCheckup from "@/component/Home/MultiCheckup";
import Experts from "@/component/Home/Experts";
import Testimonials from "@/component/Home/Testimonials";
import FooterCTA from "@/component/Home/FooterCTA";
import Footer from "@/common/Footer";

const HomePageComponent = () => {
  const [open, setOpen] = useState(false);

  const handleTogglecontactForm = () => {
    setOpen(!open);
  };

  const handleScrollToAddress = () => {
    const addressSection = document.getElementById("addressSection");
    if (addressSection) {
      addressSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="p-0 position-relative">
        <Header handleTogglecontactForm={handleTogglecontactForm} />
        <HomeBanner handleScrollToAddress={handleScrollToAddress} />
        <Excellence handleTogglecontactForm={handleTogglecontactForm} />
        <Testimonials handleTogglecontactForm={handleTogglecontactForm} />
        <MultiCheckup handleTogglecontactForm={handleTogglecontactForm} />
        <Experts handleTogglecontactForm={handleTogglecontactForm} />
        <Services handleTogglecontactForm={handleTogglecontactForm} />
        <FooterCTA handleTogglecontactForm={handleTogglecontactForm} />
        <QuickAction handleTogglecontactForm={handleTogglecontactForm} />
        <Footer />
      </div>
      <Popup open={open} onClose={() => handleTogglecontactForm()}>
        <Form handleTogglecontactForm={handleTogglecontactForm} />
      </Popup>
    </>
  );
};

export default HomePageComponent;
