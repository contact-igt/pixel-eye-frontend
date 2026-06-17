import Header from "@/common/Header"
import Form from "@/common/Form";
import { Popup } from "@/common/Popup";
import Thankyou from "@/component/Thankyou"
import { useState } from "react";


const ThankyouPageComponent = () => {
    const [open, setOpen] = useState(false);

    const handleTogglecontactForm = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="p-0 position-relative">
                <Header onOpenContact={handleTogglecontactForm} />
                <Thankyou />
            </div>
            <Popup open={open} onClose={handleTogglecontactForm}>
                <Form handleTogglecontactForm={handleTogglecontactForm} />
            </Popup>
        </>
    )
}

export default ThankyouPageComponent
