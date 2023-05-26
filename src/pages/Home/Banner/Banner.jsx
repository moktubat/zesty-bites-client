import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/home/01.jpg";
import bannerImg2 from "../../../assets/home/02.jpg";
import bannerImg3 from "../../../assets/home/03.png";
import bannerImg4 from "../../../assets/home/04.jpg";
import bannerImg5 from "../../../assets/home/05.png";
import bannerImg6 from "../../../assets/home/06.png";

const Banner = () => {
  return (
    <div>
      <Carousel showStatus={false} className="text-center" autoPlay infiniteLoop>
      <div>
        <img src={bannerImg1} alt="Banner 1" />
      </div>
      <div>
        <img src={bannerImg2} alt="Banner 2" />
      </div>
      <div>
        <img src={bannerImg3} alt="Banner 3" />
      </div>
      <div>
        <img src={bannerImg4} alt="Banner 4" />
      </div>
      <div>
        <img src={bannerImg5} alt="Banner 5" />
      </div>
      <div>
        <img src={bannerImg6} alt="Banner 6" />
      </div>
    </Carousel>
    </div>
  );
};

export default Banner;
