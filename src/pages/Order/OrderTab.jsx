import FoodCart from "../../components/FoodCart/FoodCart";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 rounded justify-center gap-10 mx-10">
            {
                items.map(item => <FoodCart
                key={item._id}
                item={item}
                ></FoodCart>)
            }
            </div>
    );
};

export default OrderTab;