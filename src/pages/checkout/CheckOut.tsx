import { useAppSelector } from "@/redux/store";
import { CartGrandTotal } from "../cart";
import { CheckOutForm } from "./CheckOutForm";
import { usePageTitle } from "@/hooks";
import { getAllBillingTotal } from "@/redux/menuQuantitySlice";

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
      <CartGrandTotal disableButton={true} sumSubtotal={sumSubtotal} />
      <CheckOutForm />
    </div>
  );
};
