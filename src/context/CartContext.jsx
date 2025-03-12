import { createContext, useContext, useEffect, useState } from "react";
import notify from "../lib/notify";
import { addToCart } from "../services/Apis/cartApi/cartApi";

const CartContext = createContext({
  cart: [],
  cartLength: 0,
  totalPrice: 0,
  isLoading: false,
  isError: null,
  addProductToCart: () => {},
  getUserCart: () => {},
  deleteItemFromCart: () => {},
  clearUserCart: () => {},
});

export const CartProvider = ({ children }) => {
  //state for set cart item when user add
  const [cart, setCart] = useState(() => {
    const cartItems = localStorage.getItem("cart");
    return cartItems ? JSON.parse(cartItems) : [];
  });

  //cart number of items
  const [cartLength, setCartLength] = useState(cart.length);
  const [totalPrice, setTotalPrice] = useState(() =>
    cart.reduce((acc, item) => acc + item.price, 0)
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // get cart items from local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartLength(cart.length);
    setTotalPrice(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  const addProductToCart = async (productId) => {
    try {
      setIsLoading(true);
      const product = await addToCart(productId);

      const productExists = cart.some((item) => item.id === product.id);
      if (productExists) {
        notify("error", "Product already exists");
        return;
      }

      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      notify("success", "Successfully added");
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearUserCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const deleteProduct = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    notify("success", "Product removed successfully");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength,
        totalPrice,
        isLoading,
        isError,
        addProductToCart,
        clearUserCart,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCartContext = () => useContext(CartContext);

// import { createContext, useContext, useEffect, useState } from "react";
// import { addToCart, getSingleCart } from "../services/Apis/productApi/cartApi";

// const CartContext = createContext({
//   cart: [],
//   cartLength: 0,
//   totalPrice: 0,
//   isLoading: false,
//   isError: null,
//   addProductToCart: () => {},
//   getUserCart: () => {},
//   deleteItemFromCart: () => {},
//   clearUserCart: () => {},
// });

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [cartLength, setCartLength] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(null);

//   const userId = 1;

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         setIsLoading(true);
//         const data = await getSingleCart(userId);
//         console.log(data);
//         setCart(data.products);
//         setCartLength(data.products.length);
//         setTotalPrice(
//           data.products.reduce(
//             (acc, item) => acc + item.quantity * item.price,
//             0
//           )
//         );
//       } catch (error) {
//         setIsError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//   const addProductToCart = async (productId) => {
//     try {
//       setIsLoading(true);
//       const updatedCart = await addToCart(productId);
//       setCart(updatedCart.products);
//       setCartLength(updatedCart.products.length);
//       setTotalPrice(
//         updatedCart.products.reduce(
//           (acc, item) => acc + item.quantity * item.price,
//           0
//         )
//       );
//     } catch (error) {
//       setIsError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         cartLength,
//         totalPrice,
//         isLoading,
//         isError,
//         addProductToCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;

// export const useCartContext = () => useContext(CartContext);
