import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Zesty Bites</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Cover></Cover>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;