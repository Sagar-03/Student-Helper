export default function ProductCard({ product }) {
  return (
    <div className="border border-[#eee] rounded-xl p-3 w-[220px] text-center bg-[#fafafa] shadow-md">
      <img
        src={
          product.image.startsWith("http")
            ? product.image
            : `https://student-helper-b5j4.onrender.com/uploads/${product.image}`
        }
        alt={product.title}
        className="w-full h-[150px] object-cover rounded-md"
      />
      <h3 className="text-[1.1rem] mt-2 mb-1 font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-700 font-medium">₹{product.price}</p>
      <span className="text-xs text-gray-500">Seller: {product.postedBy?.name}</span>
    </div>
  );
}
