import { Input } from "@/components/ui/input";
import { getAllCartData } from "@/redux/cartSlice";
import { useAppSelector } from "@/redux/store";
import { DollarSign } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export const CartGrandTotal = ({ sumSubtotal }: { sumSubtotal: number[] }) => {
  const cartItems = useAppSelector(getAllCartData);
  const totalSubtotal = useMemo(() => {
    return sumSubtotal?.reduce(
      (acc, subtotal) => acc + Math.round(subtotal),
      0
    );
  }, [sumSubtotal]);

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

          <tr>
            <td className=" border border-gray-400">
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
            <td className="font-bold border border-gray-400 text-red-600">
              Total
            </td>
            <td className="text-right font-bold border border-gray-400 text-red-600">
              <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
              {totalSubtotal + 1.5 * cartItems?.length}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="w-full mt-5 ">
        <Link to="/all-menus/checkout">
          <ButtonLink className="w-full">Proceed to checkout</ButtonLink>
        </Link>
      </div>
    </div>
  );
};
