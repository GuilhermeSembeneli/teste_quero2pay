import Arrow from "components/Arrow";
import Slider from "react-slick";
import { GlobalContainerSlider, SliderContainer } from "./style";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const SliderView: React.FC = ({ children }) => {
  return (
    <GlobalContainerSlider>
      <SliderContainer
        as={Slider}
        prevArrow={<Arrow />}
        nextArrow={<Arrow />}
        {...settings}
      >
        {children}
      </SliderContainer>
    </GlobalContainerSlider>
  );
};
