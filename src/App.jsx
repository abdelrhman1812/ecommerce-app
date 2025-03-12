import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext";
import Routes from "./Routes";

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <Routes />
      </CartProvider>
    </>
  );
}

export default App;
