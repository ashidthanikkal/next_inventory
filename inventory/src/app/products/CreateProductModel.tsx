import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../(components)/Header";

type ProductFormData = {
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
};

type CreateProductModelProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModel = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModelProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    rating: 0,
    stockQuantity: 0,
  });

  if (!isOpen) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "rating" || name === "price" || name === "stockQuantity"
          ? parseFloat(value)
          : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  const labelCssStyles = "block text-sm font-medium text-gray-700 ";
  const inputCssStyles =
    "block w-full border-2 border-gray-500 rounded-md p-2 mt-1 mb-2";

  return (
    <div className="fixed inset-0 bg-gray-600 opacity-80 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Name */}
          <label htmlFor="productName" className={labelCssStyles}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            onChange={handleChange}
            value={formData.name}
            className={inputCssStyles}
            required
          />
          {/* Price */}
          <label htmlFor="productPrice" className={labelCssStyles}>
            Product Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="PRICE"
            onChange={handleChange}
            value={formData.price}
            className={inputCssStyles}
            required
          />
          {/* StockQuantity */}
          <label htmlFor="stockQuantity" className={labelCssStyles}>
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="STOCK QUANTITY"
            onChange={handleChange}
            value={formData.stockQuantity}
            className={inputCssStyles}
            required
          />
          {/* Rating */}
          <label htmlFor="stockQuantity" className={labelCssStyles}>
            Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="RATING"
            onChange={handleChange}
            value={formData.rating}
            className={inputCssStyles}
            required
          />
          {/* CREATE ACTIONS */}

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModel;
