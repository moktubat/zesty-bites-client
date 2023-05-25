import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white">
            <div className="bg-neutral-800 bg-opacity-60">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            </div>
            <div className="md:flex justify-center bg-neutral-800 bg-opacity-60 items-center gap-10 pb-20 pt-12 px-8 px-36">
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div>
                    <h5>March 20, 2023</h5>
                    <h4 className="uppercase font-medium">WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white mt-3">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;