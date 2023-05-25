import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import sliderImg1 from "../../../assets/home/slide1.jpg";
import sliderImg2 from "../../../assets/home/slide2.jpg";
import sliderImg3 from "../../../assets/home/slide3.jpg";
import sliderImg4 from "../../../assets/home/slide4.jpg";
import sliderImg5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
        <SectionTitle 
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
        >

        </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-16"
      >
        <SwiperSlide>
            <img src={sliderImg1} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 pb-20">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg2} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 pb-20">Pizza</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg3} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 pb-20">Soup</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg4} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 pb-20">Dessert</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg5} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 pb-20">Salad</h3>
            </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
