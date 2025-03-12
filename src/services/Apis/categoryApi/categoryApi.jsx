import clientApi from "../../clientApi";

const getCategories = async () => {
  try {
    const response = await clientApi.get("/products/categories");
    return response?.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export { getCategories };
