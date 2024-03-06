import React from "react";
import "./aimage.css";
import SecondFrame from "./frames/SecondFrame";
import OneFrame from "./frames/OneFrame";
import ThreeFrame from "./frames/ThreeFrame";
const Aimage = () => {
  return (
    <>
      <div className="imges-all">
        <div className="all-img">
          <OneFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_1660-1PS-grafton-boys-and-desktop-main-rectangle-portrait-2.jpg"
            }
            img2={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/kids-14201PS-DESKTOP-MAIN-CATEGORY.jpg"
            }
          />
          <SecondFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_2530brocton-boys-mobile-and-desktop-main-rectangle-portrait.jpg"
            }
            img2={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_1517-1-boys-mobile-and-desktop-main-rectangle-portrait.jpg"
            }
            img3={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/kids-14171-boys-mobile-and-desktop-main-rectangle-portrait.jpg"
            }
          />
          <ThreeFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_7459b-DESKTOP-MAIN-CATEGORY.jpg"
            }
            img2={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_1818-1-boys-and-desktop-main-rectangle-portrait.jpg"
            }
          />
          <OneFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_3128-boys-and-desktop-main-rectangle-portrait.jpg"
            }
            img2={"https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_7373knighton-boys-DESKTOP-MAIN-CATEGORY.jpg"}
          />
                    <SecondFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_7259-boys-DESKTOP-MAIN-CATEGORY.jpg"
            }
            img2={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_5836-boys-mobile-and-desktop-main-rectangle-portrait.jpg"
            }
            img3={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_8677-boys-mobile-and-desktop-main-rectangle-portrait.jpg"
            }
          />
          <ThreeFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/bkids-14149-DESKTOP-MAIN-CATEGORY.jpg"
            }
            img2={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_5887-boysDESKTOP-LIGHT-BOX-.jpg"
            }
          />
           <OneFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/DSC_5843boys-and-desktop-main-rectangle-portrait.jpg"
            }
            img2={"https://www.peterposh.co.uk/wp-content/uploads/2023/12/kids-14123-DESKTOP-MAIN-CATEGORY.jpg"}
          />
                          <SecondFrame
            img1={
              "https://www.peterposh.co.uk/wp-content/uploads/2023/12/kids-14122boys-DESKTOP-MAIN-CATEGORY.jpg"
            }
            img2={
              ""
            }
            img3={
              "https://images.squarespace-cdn.com/content/v1/5e3859dbb0bbb745054e02b1/f20029d8-43a4-44b8-95a9-f5d642177ae2/beckbury-boys-sub-cat.jpeg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Aimage;
