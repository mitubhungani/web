import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../slice/ProductSlice";
import { auth } from "../../Firebase";

const Home = () => {
  const [userUID, setUserUID] = useState(null); // State to hold user UID
  const dispatch = useDispatch();
  
  const data = useSelector((store) => store.products);

  useEffect(() => {
    // Listen for authentication changes and set the user UID
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUID(user.uid); // Set the logged-in user's UID
        dispatch(getProduct()); // Fetch products if user is logged in
      } else {
        setUserUID(null); // Clear UID if no user is logged in
        console.log("No user is logged in");
      }
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Your Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.length > 0 ? (
          // Filter products where the product uid matches the user uid
          data.products
            .filter((product) => product.uid === userUID)
            .map((ele, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {ele.title}
                </h2>
                <p className="text-gray-600 my-2">{ele.desc}</p>
                <p className="text-indigo-600 font-semibold">Price: ${ele.price}</p>
              </div>
            ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No products available
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
