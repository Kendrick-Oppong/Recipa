import { ButtonLink } from "@/components/shared";
import { Input } from "@/components/ui/input";
import { handlePostErrorToast } from "@/lib/utils";
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
  };

  return (
    <form
      onSubmit={(e) => {
        handleNewsletterSubscription(e);
      }}
      className="flex flex-wrap gap-4 sm:flex-nowrap w-full max-w-5xl mx-auto mt-8 items-center space-x-2 text-lg"
    >
      <Input
        type="email"
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
