import { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { getGameByUrlApi } from "../api/game";
import useCart from "../hooks/useCart";
import SummaryCart from "../components/Cart/SummaryCart";
import AddressShipping from "../components/Cart/AddressShipping/AddressShipping";
import Payment from "../components/Cart/Payment/Payment";
import Seo from "../components/Seo";

export default function Cart() {
  const { getProductCart } = useCart();
  const products = getProductCart();

  return !products ? <EmptyCart /> : <FullCart products={products} />;
}

function EmptyCart() {
  return (
    <BasicLayout className="empty-cart">
      <Seo title="Carrito 🛒" />
      <h2>No hay productos en el carrito</h2>
    </BasicLayout>
  );
}

function FullCart({ products }) {
  const [productsData, setProductsData] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      const productsTemp = [];
      for await (const product of products) {
        const data = await getGameByUrlApi(product);
        productsTemp.push(data);
      }
      setProductsData(productsTemp);
    })();
    setReloadCart(false);
  }, [reloadCart]);

  return (
    <BasicLayout className="empty-cart">
      <Seo title="Carrito 🛒" />
      <SummaryCart
        products={productsData}
        reloadCart={reloadCart}
        setReloadCart={setReloadCart}
      />
      {address && <Payment products={productsData} address={address} />}
      <AddressShipping setAddress={setAddress} />
    </BasicLayout>
  );
}
