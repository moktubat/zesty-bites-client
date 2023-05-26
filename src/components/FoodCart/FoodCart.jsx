
const FoodCart = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl pb-8">
            <p className="absolute right-0 mr-5 mt-4 px-2 rounded-xl bg-black text-white">${price}</p>
            <img className="object-cover w-full h-64 md:h-40 lg:h-48 rounded" src={image} alt="" />
            <div className="">
                <h2 className="text-3xl font-bold text-center pt-3">{name}</h2>
                <p className="py-2">{recipe}</p>
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-outline bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506] mt-3 hover:text-[#BB8506]">
                add to cart
              </button>
            </div>
        </div>
    );
};

export default FoodCart;