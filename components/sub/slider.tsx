import React, { useRef } from "react";
import Slider, { Settings } from "react-slick"; // Import Slider component and its Settings type
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthBgImage } from "./FullWidthBgImage";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useResponsive } from "../useResponsive";

interface SliderCompProps {
  data: any[];
  label: string;
  heading: string;
  subheading: string;
  slideNum: string | number;
  autoplay: any;
  autoplaySpeed: number | undefined;
  height: string | number;
}

export const SliderComp = ({
  data,
  label,
  heading,
  subheading,
  slideNum,
  autoplay,
  autoplaySpeed,
  height,
}: SliderCompProps) => {
  const { screenType } = useResponsive();
  const sliderRef = useRef<Slider>(null); // Adjust the type to Slider from react-slick
  const settings: Settings = {
    arrows: false,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: screenType === "MOBILE" ? 2 : +slideNum,
    slidesToScroll: screenType === "MOBILE" ? 2 : +slideNum,
  };

  return (
    <>
      <div style={{ marginBottom: 20, marginLeft: 10 }}>
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
      <div className="container">
        <div className="wrapper">
          {screenType !== "MOBILE" && (
            <div
              onClick={() =>
                sliderRef.current && sliderRef.current.slickPrev()
              }
              className="prev"
            >
              <FiArrowLeftCircle style={{ fontSize: 24 }} />
            </div>
          )}

          <Slider {...settings} ref={sliderRef}>
            {data?.length > 0 &&
              data.map((item: any, index: number) => (
                <a
                  key={index}
                  href="https://blog-gray-zeta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FullWidthBgImage
                    key={index}
                    image={item.image}
                    text={item.title}
                    description={item.description}
                    label={label}
                    borderRadius={"10px"}
                    height={height}
                  />
                </a>
              ))}
          </Slider>
          {screenType !== "MOBILE" && (
            <div
              onClick={() =>
                sliderRef.current && sliderRef.current.slickNext()
              }
              className="next"
            >
              <FiArrowRightCircle style={{ fontSize: 24 }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
