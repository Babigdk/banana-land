import "./banana.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const Banana = ({ banana }) => {
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12">{banana.country}</h5>
      </div>
      <div className="row">
        <h3 className="col-md-12">{banana.address}</h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={`/images/${banana.photo}.jpeg`} alt="Banana" />
        </div>
        <div className="col-md-5">
          <p className="price">${banana.price}</p>
          <p>{banana.description}</p>
          <img
            src={emailIcon}
            height="50"
            alt="inquiry"
            onClick={inquiryClick}
          />
          {inquiryShown && <Inquiry banana={banana} />}
        </div>
      </div>
    </div>
  );
};

export default Banana;