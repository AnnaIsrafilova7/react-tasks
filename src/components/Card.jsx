

const Card = ({ product }) => {
  return (
    <div className="flex bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="w-40 shrink-0 bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-3"
        />
      </div>

      <div className="p-4 px-20 flex flex-col justify-center  gap-1">
        <span className="self-start text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-xl font-semibold text-amber-600">${product.price}</p>
      </div>
    </div>
  );
};

export default Card;