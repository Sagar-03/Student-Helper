import { useEffect, useState } from 'react';
import axios from '../axiosConfig';

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/product/mysells');
        setProducts(res.data);
      } catch (err) {
        console.error('❌ Fetch Error:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Uploaded Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products uploaded yet.</p>
      ) : (
        <div className="grid gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
            >
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt={product.title}
                className="w-full max-h-[200px] object-cover rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-sm text-gray-700">{product.description}</p>
              <p className="text-green-600 font-medium mt-1">₹{product.price}</p>
              <p className="mt-1">
                Status:{' '}
                <strong className={product.sold ? 'text-red-500' : 'text-green-500'}>
                  {product.sold ? 'Sold' : 'Live'}
                </strong>
              </p>
              <button className="mt-3 px-4 py-2 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600">
                Purchase
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
