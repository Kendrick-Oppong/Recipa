import { ButtonLink } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { handleInfoToast, handlePostErrorToast } from "@/lib/utils";
import { Rocket } from "lucide-react";
import { useRef } from "react";

export const NewsletterForm = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleNewsletterSubscription = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(ref.current?.value);
    if (!ref.current?.value) handlePostErrorToast("Field cannot be empty");
    handleInfoToast("Subscription successful");
    ref.current!.value = "";
  };

  return (
    <form
      onSubmit={(e) => {
        handleNewsletterSubscription(e);
      }}
      className="flex flex-wrap items-center w-full max-w-5xl gap-4 mx-auto mt-8 space-x-2 text-lg sm:flex-nowrap"
    >
      <Input
        type="email"
        required
        ref={ref}
        placeholder="Enter Your Email Address..."
        className="p-[1.3rem] shadow-md border border-green600"
      />
      <ButtonLink
        type="submit"
        className="w-full !ml-0 mt-3 sm:mt-0 sm:w-auto rounded-sm"
      >
        Subscribe <Rocket className="ml-2" />
      </ButtonLink>
    </form>
  );
};
