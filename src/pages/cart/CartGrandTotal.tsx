import { Input } from "@/components/ui/input";
import { getAllCartData } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { DollarSign } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { calculateBillingTotal } from "@/redux/menuQuantitySlice";

interface Props {
  sumSubtotal: number[];
  disableButton?: boolean;
}

export const CartGrandTotal = ({
  disableButton = false,
  sumSubtotal,
}: Props) => {
  const cartItems = useAppSelector(getAllCartData);
  const dispatch = useAppDispatch();
  console.log(sumSubtotal);

  const totalSubtotal = useMemo(() => {
    return sumSubtotal?.reduce(
      (acc, subtotal) => acc + Math.round(subtotal),
      0
    );
  }, [sumSubtotal]);

  useEffect(() => {
    dispatch(calculateBillingTotal(sumSubtotal));
  }, [dispatch, sumSubtotal]);

  return (
    <div className="w-full text-lg p-3 mb-10 border border-green600 rounded-lg shadow-lg max-w-[97%] md:max-w-[95%] mx-auto">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-bold border border-gray-400">
              Subtotal ({cartItems?.length})
            </td>
            <td className="text-right border border-gray-400">
              <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
              {totalSubtotal}
            </td>
          </tr>
          <tr>
            <td className="font-bold border border-gray-400">Delivery fee</td>
            <td className="text-right border border-gray-400">
              <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
              {1.5 * cartItems?.length}
            </td>
          </tr>

          <tr className={`${disableButton ? "hidden" : ""}`}>
            <td className="border border-gray-400 ">
              <Input
                type="text"
                placeholder="Enter coupon code"
                className="border-red-600 focus-visible:ring-red-400 "
              />
            </td>
            <td className="text-right border border-gray-400">
              <ButtonLink className="w-full">Apply coupon</ButtonLink>
            </td>
          </tr>

          <tr className="bg-grey dark:bg-[#29282896]">
            <td className="font-bold text-red-600 border border-gray-400">
              Total
            </td>
            <td className="font-bold text-right text-red-600 border border-gray-400">
              <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
              {totalSubtotal + 1.5 * cartItems?.length}
            </td>
          </tr>
        </tbody>
      </table>

      <div className={`w-full mt-5 ${disableButton ? "hidden" : ""}`}>
        <Link to="/all-menus/checkout">
          <ButtonLink className="w-full">Proceed to checkout</ButtonLink>
        </Link>
      </div>
    </div>
  );
};
