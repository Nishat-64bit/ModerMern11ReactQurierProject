import React from "react";
import "./Award.css";
import AwardItem from "../CommonComponet/AwardItem";
import Flex from '../CommonComponet/Flex'
import { GrTrophy } from "react-icons/gr";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdLocalCarWash } from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";



const Award = () => {
  return (
    <>
      <div className="AwardSection">
        <div className="container">
          <Flex className={"AwardFlex"}>

          <AwardItem descriptionParent={`Awards won`}
            Awardcount={`26+`} 
            AwardIcon={<GrTrophy />}
          />

          <AwardItem descriptionParent={`States covered`}
            Awardcount={`65+`} 
            AwardIcon={<IoStatsChartOutline />}
            />

          <AwardItem descriptionParent={`Happy clients`}
            Awardcount={`689K+`} 
            AwardIcon={<IoPersonAddOutline />}
            />

          <AwardItem descriptionParent={`Goods delivered`}
            Awardcount={`130M+`} 
            AwardIcon={<MdLocalCarWash />}
            />
          <AwardItem descriptionParent={`Goods delivered`}
            Awardcount={`130M+`} 
            AwardIcon={<TiShoppingBag />}
            />

          </Flex>
        </div>
      </div>
    </>
  );
};

export default Award;
