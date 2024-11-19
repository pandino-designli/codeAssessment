import { useEffect, useState } from 'react';
import { Product } from '@constants/Products.ts';
import { useHttpClient } from '@services/useHttpClient.ts';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const { isLoading, error, sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await sendRequest<Product[]>(
          `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`,
        );
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [sendRequest, offset]);

  return { products, isLoading, error, offset, setOffset };
};
