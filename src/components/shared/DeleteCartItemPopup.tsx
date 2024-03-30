import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CartItem } from "@/types/types";
import { useAppDispatch } from "@/redux/store";
import { removeFromCart } from "@/redux/cartSlice";

interface DeleteCartProps {
  children: React.ReactNode;
  itemInCart: CartItem;
}

export function DeleteCartItemPopup({ children, itemInCart }: DeleteCartProps) {
  const dispatch = useAppDispatch();
  const handleDeleteItem = () => {
    dispatch(removeFromCart(itemInCart));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="text-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="my-1">Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            This action cannot be undone. This will permanently delete the
            selected item in cart
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter >
          <AlertDialogCancel className="text-base focus-visible:ring-0">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteItem}
            className="text-base border border-red-500 bg-red-500 text-white  hover:bg-red-500  hover:!text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
