import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupdImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu | Zesty Bites</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="our menu"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={desserts} title="Desserts" img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" img={soupdImg}></MenuCategory>
    </div>
  );
};

export default Menu;
