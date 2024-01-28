import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {
    // add to cart
  };

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          prodcutId="abc"
          name="iphone"
          price={70000}
          stock={11}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/l/71Pda7cwUL_SX522_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
