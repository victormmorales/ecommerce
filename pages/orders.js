import { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { map, size } from "lodash";
import BasicLayout from "../layouts/BasicLayout";
import { getOrdersApi } from "../api/order";
import useAuth from "../hooks/useAuth";
import Order from "../components/Orders/Order";

export default function Orders() {
  const [orders, setOrders] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getOrdersApi(auth.idUser, logout);
      setOrders(response || []);
    })();
  }, []);

  return (
    <BasicLayout className="orders">
      <div className="orders__block">
        <div className="title">Mis pedidos</div>
        <div className="data">
          {size(orders) === 0 ? (
            <h2 style={{ textAlign: "center" }}>
              Todavía no has hecho nignuna compra 🥺
            </h2>
          ) : (
            <OrderList orders={orders} />
          )}
        </div>
      </div>
    </BasicLayout>
  );
}

function OrderList({ orders }) {
  return (
    <Grid>
      {map(orders, (order) => (
        <Grid.Column mobile={16} tablet={6} computer={8}>
          <Order />
        </Grid.Column>
      ))}
    </Grid>
  );
}
