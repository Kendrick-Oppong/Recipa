import { CartItem } from "@/types/types";
import { DeleteCartItemPopup, QuantitySelector } from "@/components/shared";
import { DollarSign, Trash2 } from "lucide-react";
import { useCartItemSubtotal } from "@/hooks";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import { calculateBillingTotal } from "@/redux/menuQuantitySlice";

interface CartProps {
  itemInCart: CartItem;
  sumSubtotal: number[];
  setSumSubtotal: React.Dispatch<React.SetStateAction<number[]>>;
}
export const CartItemRowDesktop = ({
  itemInCart,
  setSumSubtotal,
  sumSubtotal,
}: CartProps) => {
  const dispatch = useAppDispatch();
  const cartItemSubtotal = useCartItemSubtotal(itemInCart);

  useEffect(() => {
    setSumSubtotal((previous: number[]) => [cartItemSubtotal, ...previous]);
    dispatch(calculateBillingTotal(sumSubtotal));
    return () => {
      // Remove the cartItemSubtotal when the component unmounts
      setSumSubtotal((previous: number[]) =>
        previous.filter((subtotal) => subtotal !== cartItemSubtotal)
      );
    };
  }, [cartItemSubtotal, dispatch, setSumSubtotal, sumSubtotal]);

  return (
    <tr>
      <td>
        <DeleteCartItemPopup itemInCart={itemInCart}>
          <Trash2
            role="button"
            className="w-8 h-8 text-red-500 cursor-pointer"
          />
        </DeleteCartItemPopup>
      </td>
      <td>
        <img src={itemInCart?.image} width={80} alt="" />
      </td>
      <td>{itemInCart?.title}</td>
      <td>{itemInCart?.category}</td>
      <td>
        <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
        {itemInCart?.price}
      </td>
      <td>
        <div className="flex items-center justify-between gap-5">
          <QuantitySelector itemId={itemInCart._id!} />
        </div>
      </td>
      <td>
        <DollarSign className="w-5 h-5 inline-flex -translate-y-[.3px]" />
        {itemInCart ? cartItemSubtotal : 0}
      </td>
    </tr>
  );
};
