import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import cardImg from "../../../assets/others/recommed.jpg";

const ChefRecommend = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover w-full h-64 md:h-40 lg:h-48"
              src={cardImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="py-2 text-center">
              Lettuce, Eggs, Parmesan Cheese,
              <br />
              Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506] mt-3 hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover w-full h-64 md:h-40 lg:h-48"
              src={cardImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="py-2 text-center">
              Lettuce, Eggs, Parmesan Cheese,
              <br />
              Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506] mt-3 hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              className="object-cover w-full h-64 md:h-40 lg:h-48"
              src={cardImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="py-2 text-center">
              Lettuce, Eggs, Parmesan Cheese,
              <br />
              Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506] mt-3 hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
