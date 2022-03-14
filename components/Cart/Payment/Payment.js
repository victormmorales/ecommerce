import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import FormPayment from "./FormPayment";
import { STRIPE_TOKEN } from "../../../utils/constant";

const stripePromise = loadStripe(STRIPE_TOKEN);

export default function Payment({ products, address }) {
  return (
    <div className="payment">
      <div className="title">Pago</div>
      <div className="data">
        <Elements stripe={stripePromise}>
          <FormPayment products={products} address={address} />
        </Elements>
      </div>
    </div>
  );
}
