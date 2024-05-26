import { ButtonLink } from "@/components/shared";
import { ArrowUpRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export const ThankYou = () => {
  return (
    <div className="p-10 mx-auto mb-10 border rounded-lg border-green600 size-fit">
      <div className="text-center">
        <Truck size={80} strokeWidth={1} className="mx-auto text-green" />
      </div>
      <h3 className="text-center">Thank you for shopping with Recipa</h3>
      <h3 className="mb-6 text-center">Our dispatch rider will contact you soon</h3>

      <div className="text-center">
        <Link to="/shop">
          <ButtonLink>
            Shop again
            <ArrowUpRight className="ml-2" />
          </ButtonLink>
        </Link>
      </div>
    </div>
  );
};
