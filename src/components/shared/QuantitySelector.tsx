import {
  decrementQuantity,
  getMenuItemQuantity,
  incrementQuantity,
  onChangeValue,
} from "@/redux/menuQuantitySlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Minus, Plus } from "lucide-react";
import { Input } from "../ui/input";
import { memo } from "react";

interface IdProp {
  itemId: string;
}

export const QuantitySelector = memo(({ itemId }: IdProp) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) =>
    getMenuItemQuantity(state, itemId)
  );

  return (
    <>
      <div className="p-1 border border-green-600 rounded-md hover:border-red-600 hover:bg-red-500 hover:text-white">
        <Minus onClick={() => dispatch(decrementQuantity(itemId))} />
      </div>
      <Input
        type="number"
        min={1}
        max={100}
        onChange={(e) =>
          dispatch(onChangeValue({ itemId: itemId, value: +e.target.value }))
        }
        value={quantity}
        className="text-center border border-green-600"
      />
      <div className="p-1 border border-green-600 rounded-md hover:border-red-600 hover:bg-red-500 hover:text-white">
        <Plus onClick={() => dispatch(incrementQuantity(itemId))} />
      </div>
    </>
  );
});
