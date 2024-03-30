import { DeleteCartItemPopup, QuantitySelector } from "@/components/shared";
import { DollarSign, Trash2 } from "lucide-react";
import { useCartItemSubtotal } from "@/hooks";
import { CartItem } from "@/types/types";

export const CartItemRowMobile = ({ itemInCart }: { itemInCart: CartItem }) => {

  const cartItemSubtotal = useCartItemSubtotal(itemInCart);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <img src={itemInCart.image} alt="" width={95} height={95} />
        </div>
        <div>
          <h1 className="font-bold">{itemInCart.title}</h1>
          <p className="text-red-600 flex items-center">
            <DollarSign className="w-5 h-5" />
            {cartItemSubtotal ?? itemInCart.price}
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-3 cursor-pointer">
        <DeleteCartItemPopup itemInCart={itemInCart}>
          <button>
            <p className=" text-red-700 flex items-center gap-1">
              <Trash2 className="w-5 h-5 cursor-pointer" />
              Remove
            </p>
          </button>
        </DeleteCartItemPopup>

        <div className="flex items-center justify-between gap-5">
          <QuantitySelector itemId={itemInCart._id!} />
        </div>
      </div>
    </>
  );
};
