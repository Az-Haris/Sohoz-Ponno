import { useState } from "react";
import { CiSquarePlus, CiSquareMinus   } from "react-icons/ci";

const ProductQuantityController = ({ min = 1, max = 10, onChange }) => {
  const [quantity, setQuantity] = useState(min);

  const handleDecrease = () => {
    if (quantity > min) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  return (
    <div className="flex items-center gap-0">
      <button
        onClick={handleDecrease}
        className={`text-2xl ${quantity === min ? "text-slate-400" : "text-primary"} cursor-pointer`}
      >
        <CiSquareMinus  />
      </button>
      <span className="px-3 text-lg font-medium">{quantity}</span>
      <button
        onClick={handleIncrease}
        className={`text-2xl ${quantity === max ? "text-slate-400" : "text-primary"} cursor-pointer`}
      >
        <CiSquarePlus />
      </button>
    </div>
  );
};

export default ProductQuantityController;
