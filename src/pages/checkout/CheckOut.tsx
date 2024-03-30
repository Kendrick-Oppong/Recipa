import { useAppSelector } from "@/redux/store";
import { CartGrandTotal } from "../cart";
import { CheckOutForm } from "./CheckOutForm";
import { getAllBillingTotal } from "@/redux/menuQuantitySlice";
import { usePageTitle } from "@/hooks";

export const CheckOut = () => {
  const sumSubtotal = useAppSelector(getAllBillingTotal);
  usePageTitle("Checkout");
  return (
    <div className="mx-4">
      <h2 className="text-center">
        Billing &{" "}
        <span>
          Shipping Address.{" "}
          <img src="/twirl-layered.svg" alt="" width={30} height={30} />
        </span>
      </h2>
      <CartGrandTotal sumSubtotal={sumSubtotal} showCouponButton={false} />
      <CheckOutForm />
    </div>
  );
};
