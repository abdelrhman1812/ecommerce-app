import { getProductSpecific } from "../productApi/productApi";

const addToCart = async (productId) => {
  return await getProductSpecific(productId);
};

export { addToCart };

// import clientApi from "../../clientApi";

// const getSingleCart = async (userId) => {
//   try {
//     const response = await clientApi.get(`/carts/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching cart:", error);
//     throw error;
//   }
// };

// const addToCart = async (productId) => {
//   try {
//     const userId = 1;
//     let cart = await getSingleCart(userId);

//     if (!cart || !cart.products) {
//       cart = { userId, products: [] };
//     }

//     const existingProductIndex = cart.products.findIndex(
//       (item) => item.product === productId
//     );

//     if (existingProductIndex !== -1) {
//       cart.products[existingProductIndex].quantity += 1;
//     } else {
//       cart.products.push({ product: productId, quantity: 1 });
//     }

//     const response = await clientApi.put(`/carts/${userId}`, cart);
//     console.log("Cart updated:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating cart:", error);
//     throw error;
//   }
// };

// export { addToCart, getSingleCart };
