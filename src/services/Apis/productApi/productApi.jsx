import clientApi from "../../clientApi";

const getProducts = async () => {
  try {
    const response = await clientApi.get("/products");
    return response?.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

const getProductSpecific = async (productId) => {
  try {
    const response = await clientApi.get(`/products/${productId}`);
    return response?.data;
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    throw new Error("Failed to fetch product details");
  }
};

export { getProducts, getProductSpecific };
