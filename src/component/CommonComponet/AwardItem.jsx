import React from "react";
import { GrDocumentMissing } from "react-icons/gr";
import AwardDescription from "./AwardDescription";
import AwardCount from "./AwardCount";
const AwardItem = ({ descriptionParent, Awardcount, AwardIcon }) => {
  return (
    <>
      <div className="AwardBox">
        <div className="Icon5">
          <span className="AwardIcon">
            {AwardIcon ? AwardIcon : <GrDocumentMissing />}
          </span>
        </div>
        <AwardCount count={Awardcount ? Awardcount : "Count Missing"} />
        <AwardDescription
          descriptionAward={
            descriptionParent ? descriptionParent : "Title Missing"
          }
        />
      </div>
    </>
  );
};

export default AwardItem;
