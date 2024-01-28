import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  prodcutId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "shreyas";

const ProductCard = ({
  prodcutId,
  price,
  photo,
  name,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt="" />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
