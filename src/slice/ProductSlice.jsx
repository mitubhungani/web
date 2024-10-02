// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { Logout } from "../Firebase";

// export const createProduct = createAsyncThunk(
//   "/createProduct",
//   async (product) => {
//     try {
//       let res = await axios.post("http://localhost:3000/products", product);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const createexelProduct = createAsyncThunk(
//   "/createProduct",
//   async (product) => {
//     try {
//       // Prepare the product object in the desired format
//       const formattedProduct = {
//         uid: "", // Assign uid as needed
//         excelData: [
//           {
//             index: 0, // Index will be managed in state
//             title: product.title,
//             image: product.image,
//             desc: product.desc,
//             price: product.price,
//           },
//         ],
//       };

//       let res = await axios.post("http://localhost:3000/exceldata", formattedProduct);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );


// export const getProduct = createAsyncThunk("/getProduct", async () => {
//   try {
//     let res = await axios.get("http://localhost:3000/products");
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const deleteProduct = createAsyncThunk("/deleteProduct", async (id) => {
//   try {
//     let res = await axios.delete(`http://localhost:3000/products/${id}`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const productSlice = createSlice({
//   name: "Product",
//   initialState: {
//     products: [],
//     isLoading: false,
//   },
//   extraReducers: (builder) => {
//     //create Product
//     builder.addCase(createProduct.pending, (state, acton) => {
//       state.isLoading = true;
//     });
//     builder.addCase(createProduct.fulfilled, (state, action) => {
//       state.products.push(action.payload);
//       state.isLoading = false;
//     });
//     builder.addCase(createProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });


//     //create Excl data

//     builder.addCase(createexelProduct.pending, (state, acton) => {
//       state.isLoading = true;
//     });
//     builder.addCase(createexelProduct.fulfilled, (state, action) => {
//       state.products.push(action.payload);
//       state.isLoading = false;
//     });
//     builder.addCase(createexelProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });



//     //get Product
//     builder.addCase(getProduct.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getProduct.fulfilled, (state, action) => {
//       state.products = action.payload;
//       state.isLoading = false;
//     });
//     builder.addCase(getProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });

//     //delete Product
//     builder.addCase(deleteProduct.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(deleteProduct.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.products = state.products.filter(
//         (ele) => ele.id !== action.payload.id
//       );
//     });
//     builder.addCase(deleteProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//   },
// });

// export const productReducer = productSlice.reducer;














// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useSelector } from "react-redux";

// export const createProduct = createAsyncThunk(
//   "product/createProduct", // Unique identifier for product creation
//   async (product) => {
//     try {
//       let res = await axios.post("http://localhost:3000/products", product);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// let data =useSelector((store)=>store.users)
// console.log(data);


// export const createExcelProduct = createAsyncThunk(
//   "product/createExcelProduct", // Unique identifier for Excel product creation
//   async (product) => {
//     try {
//       // Prepare the product object in the desired format
//       const formattedProduct = {
//         uid: '', // Assign uid as needed
//         excelData: [
//           {
//             index: 0, // Index will be managed in state
//             title: product.title,
//             image: product?.image,
//             desc: product.desc,
//             price: product.price,
//           },
//         ],
//       };

//       let res = await axios.post("http://localhost:3000/exceldata", formattedProduct);
//       return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const getProduct = createAsyncThunk("product/getProduct", async () => {
//   try {
//     let res = await axios.get("http://localhost:3000/products");
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id) => {
//   try {
//     let res = await axios.delete(`http://localhost:3000/products/${id}`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const productSlice = createSlice({
//   name: "Product",
//   initialState: {
//     products: [],
//     isLoading: false,
//   },
//   extraReducers: (builder) => {
//     // Create Product
//     builder.addCase(createProduct.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(createProduct.fulfilled, (state, action) => {
//       state.products.push(action.payload);
//       state.isLoading = false;
//     });
//     builder.addCase(createProduct.rejected, (state) => {
//       state.isLoading = false;
//     });

//     // Create Excel Product
//     builder.addCase(createExcelProduct.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(createExcelProduct.fulfilled, (state, action) => {
//       state.products.push(action.payload);
//       state.isLoading = false;
//     });
//     builder.addCase(createExcelProduct.rejected, (state) => {
//       state.isLoading = false;
//     });

//     // Get Products
//     builder.addCase(getProduct.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getProduct.fulfilled, (state, action) => {
//       state.products = action.payload;
//       state.isLoading = false;
//     });
//     builder.addCase(getProduct.rejected, (state) => {
//       state.isLoading = false;
//     });

//     // Delete Product
//     builder.addCase(deleteProduct.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(deleteProduct.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.products = state.products.filter(
//         (ele) => ele.id !== action.payload.id
//       );
//     });
//     builder.addCase(deleteProduct.rejected, (state) => {
//       state.isLoading = false;
//     });
//   },
// });

// export const productReducer = productSlice.reducer;




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let baseURL ='https://json-server-deployment-y10f.onrender.com/products'
// let baseURL='http://localhost:3000/products'

// Async thunk to create a product
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product) => {
    try {
      let res = await axios.post(`${baseURL}`, product);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Async thunk to create an Excel product, accepting user UID as a parameter
export const createExcelProduct = createAsyncThunk(
  "product/createExcelProduct",
  async ({ product, uid }) => {
    try {
      const formattedProduct = {
        uid: uid, // Assign uid as needed
        excelData: [
          {
            index: 0,
            title: product.title,
            image: product?.image,
            desc: product.desc,
            price: product.price,
          },
        ],
      };

      let res = await axios.post("http://localhost:3000/exceldata", formattedProduct);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// Async thunk to get products
export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    let res = await axios.get(`${baseURL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

// Async thunk to delete a product
export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id) => {
  try {
    let res = await axios.delete(`${baseURL}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

// Create product slice
export const productSlice = createSlice({
  name: "Product",
  initialState: {
    products: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    // Create Product
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.isLoading = false;
    });

    // Create Excel Product
    builder.addCase(createExcelProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createExcelProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createExcelProduct.rejected, (state) => {
      state.isLoading = false;
    });

    // Get Products
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.isLoading = false;
    });

    // Delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (ele) => ele.id !== action.payload.id
      );
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// Export product reducer
export const productReducer = productSlice.reducer;
