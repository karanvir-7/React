import productData from "@/data/products.json";

export type Product = {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  inventory: number;
  shortDescription: string;
  description: string;
  colors: string[];
  highlights: string[];
  specifications: Record<string, string>;
};

const products: Product[] = productData.map((product) => ({
  ...product,
  specifications: Object.fromEntries(
    Object.entries(product.specifications).filter((entry): entry is [string, string] => {
      return typeof entry[1] === "string";
    }),
  ),
}));

export function getProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}