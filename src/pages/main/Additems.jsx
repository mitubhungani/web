// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   createProduct,
//   deleteProduct,
//   getProduct,
// } from "../../slice/ProductSlice";
// import { auth } from "../../Firebase";

// const Additems = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [desc, setDesc] = useState("");
//   const [price, setPrice] = useState("");

//   const [userUID, setUserUID] = useState(null); // Store the user's UID

//   let dispatch = useDispatch();

//   // Handle the form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const currentUser = auth.currentUser;

//     if (currentUser) {
//       let product = {
//         uid: currentUser.uid,
//         title,
//         image,
//         desc,
//         price,
//       };
//       dispatch(createProduct(product));
//     } else {
//       console.log("No user is logged in");
//     }
//   };

//   // Get the products from the Redux store
//   const data = useSelector((store) => store.products);

//   // Handle product deletion
//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   let userdata = useSelector((store) => store.users);
//   // Fetch products when component mounts and set the user's UID
//   useEffect(() => {
//     if (userdata.user) {
//       console.log(userdata.user);
//       setUserUID(userdata.user.user.uid); // Store the logged-in user's UID
//     }
//     dispatch(getProduct());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getProduct());
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-4">
//       {/* Form Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold mb-4">Add a Product</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             required
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="url"
//             required
//             placeholder="Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             required
//             placeholder="Description"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           <input
//             type="number"
//             required
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Product Display Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.products
//           .filter((ele) => ele.uid === userUID) // Filter products by user UID
//           .map((ele, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
//               <h1 className="text-xl font-bold">{ele.title}</h1>
//               <img
//                 src={ele.image}
//                 alt={ele.title}
//                 className="w-full h-40 object-cover mt-2"
//               />
//               <p className="mt-2">{ele.desc}</p>
//               <p className="mt-2 font-semibold">${ele.price}</p>
//               <button
//                 onClick={() => handleDelete(ele.id)}
//                 className="bg-red-500 text-white px-3 py-1 mt-4 rounded-lg hover:bg-red-600 transition duration-300"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Additems;









// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as XLSX from "xlsx"; // Import xlsx library
// import {
//   createProduct,
//   deleteProduct,
//   getProduct,
// } from "../../slice/ProductSlice";
// import { auth } from "../../Firebase";

// const Additems = () => {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [desc, setDesc] = useState("");
//   const [price, setPrice] = useState("");
//   const [excelData, setExcelData] = useState([]); // State to store Excel data

//   const [userUID, setUserUID] = useState(null); // Store the user's UID

//   let dispatch = useDispatch();

//   // Handle the form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const currentUser = auth.currentUser;

//     if (currentUser) {
//       let product = {
//         uid: currentUser.uid,
//         title,
//         image,
//         desc,
//         price,
//       };
//       dispatch(createProduct(product));
//     } else {
//       console.log("No user is logged in");
//     }
//   };

//   // Get the products from the Redux store
//   const data = useSelector((store) => store.products);

//   // Handle product deletion
//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   let userdata = useSelector((store) => store.users);

//   // Fetch products when component mounts and set the user's UID
//   useEffect(() => {
//     if (userdata.user) {
//       console.log(userdata.user);
//       setUserUID(userdata.user.user.uid); // Store the logged-in user's UID
//     }
//     dispatch(getProduct());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getProduct());
//   }, []);

//   // Handle Excel file upload
//   const handleExcelUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       const binaryStr = event.target.result;
//       const workbook = XLSX.read(binaryStr, { type: "binary" });
//       const sheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);
//       dispatch(createProduct(jsonData))
//       setExcelData(jsonData); // Store the parsed Excel data in state
//     };

//     if (file) {
//       reader.readAsBinaryString(file);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-4">
//       {/* Form Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold mb-4">Add a Product</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             required
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <input
//             type="url"
//             required
//             placeholder="Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <textarea
//             required
//             placeholder="Description"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>
//           <input
//             type="number"
//             required
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//             Submit
//           </button>
//         </form>

//         {/* Excel Upload */}
//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold mb-4">Upload Excel File</h2>
//           <input type="file" accept=".xlsx, .xls" onChange={handleExcelUpload} />
//         </div>
//       </div>

//       {/* Product Display Section */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {data.products
//           .filter((ele) => ele.uid === userUID) // Filter products by user UID
//           .map((ele, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
//               <h1 className="text-xl font-bold">{ele.title}</h1>
//               <img
//                 src={ele.image}
//                 alt={ele.title}
//                 className="w-full h-40 object-cover mt-2"
//               />
//               <p className="mt-2">{ele.desc}</p>
//               <p className="mt-2 font-semibold">${ele.price}</p>
//               <button
//                 onClick={() => handleDelete(ele.id)}
//                 className="bg-red-500 text-white px-3 py-1 mt-4 rounded-lg hover:bg-red-600 transition duration-300"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//       </div>

//       {/* Display Excel Data */}
//       {excelData.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4">Excel Data</h2>
//           <table className="w-full table-auto border-collapse">
//             <thead>
//               <tr>
//                 {Object.keys(excelData[0]).map((key, index) => (
//                   <th key={index} className="border px-4 py-2 bg-gray-200">
//                     {key}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {excelData.map((row, index) => (
//                 <tr key={index}>
//                   {Object.values(row).map((value, i) => (
                    
//                     <td key={i} className="border px-4 py-2">
//                       {value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Additems;










import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as XLSX from "xlsx"; // Import xlsx library
import {
  createExcelProduct,
  createProduct,
  deleteProduct,
  getProduct,
} from "../../slice/ProductSlice";
import { auth } from "../../Firebase";

const Additems = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [excelData, setExcelData] = useState([]); // State to store Excel data

  const [userUID, setUserUID] = useState(null); // Store the user's UID

  let dispatch = useDispatch();

  // Handle the form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = auth.currentUser;

    if (currentUser) {
      let product = {
        uid: currentUser.uid,
        title,
        image,
        desc,
        price,
      };
      dispatch(createProduct(product));
    } else {
      console.log("No user is logged in");
    }
  };

  // Get the products from the Redux store
  const data = useSelector((store) => store.products);

  // Handle product deletion
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  let userdata = useSelector((store) => store.users);

  // Fetch products when component mounts and set the user's UID
  useEffect(() => {
    if (userdata.user) {
      console.log(userdata.user);
      setUserUID(userdata.user.user.uid); // Store the logged-in user's UID
    }
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  // Handle Excel file upload
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      dispatch(createExcelProduct(jsonData))
      setExcelData(jsonData); // Store the parsed Excel data in state
    };

    if (file) {
      reader.readAsBinaryString(file);
    }
  };

  // Trigger file input click
  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add a Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="url"
            required
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            required
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <input
            type="number"
            required
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>

        {/* Excel Upload */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Upload Excel File</h2>
          {/* Hidden file input */}
          <input
            type="file"
            accept=".xlsx, .xls"
            id="fileInput"
            onChange={handleExcelUpload}
            style={{ display: "none" }}
          />
          {/* Button to trigger file input */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            onClick={handleFileInputClick}
          >
            Upload Excel File
          </button>
        </div>
      </div>

      {/* Product Display Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products
          .filter((ele) => ele.uid === userUID) // Filter products by user UID
          .map((ele, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <h1 className="text-xl font-bold">{ele.title}</h1>
              <img
                src={ele.image}
                alt={ele.title}
                className="w-full h-40 object-cover mt-2"
              />
              <p className="mt-2">{ele.desc}</p>
              <p className="mt-2 font-semibold">${ele.price}</p>
              <button
                onClick={() => handleDelete(ele.id)}
                className="bg-red-500 text-white px-3 py-1 mt-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          ))}
      </div>

      {/* Display Excel Data */}
      {excelData.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Excel Data</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((key, index) => (
                  <th key={index} className="border px-4 py-2 bg-gray-200">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="border px-4 py-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Additems;
