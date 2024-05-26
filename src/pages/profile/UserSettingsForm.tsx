import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { settingsSchema } from "@/validators/formSchema";
import { useForm } from "react-hook-form";
import { isError, handleErrorToast } from "@/lib/utils";
import { z } from "zod";
import { SaveAll } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { UserDetails } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePatch as useUpdateProfileSettings } from "@/hooks";

interface UserSettingsFormProps {
  user: UserDetails | undefined;
}

export const UserSettingsForm = ({ user }: UserSettingsFormProps) => {
  const form = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      username: user?.username ?? "",
      email: user?.email ?? "",
      phone_number: user?.phone_number ?? "",
      address: user?.address ?? "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = form;

  const {
    error: updateProfileError,
    isError: isUpdateProfileError,
    isPending: isUpdating,
    mutate: updateProfileMutation,
  } = useUpdateProfileSettings(
    "/user/profile/update_details"
  );

  if (isUpdateProfileError) console.log(updateProfileError?.message);

  function onSubmit(data: z.infer<typeof settingsSchema>) {
    updateProfileMutation(data);
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        autoComplete="fff"
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 mt-12 mb-12"
      >
        <div className="grid-cols-2 sm:grid sm:gap-4">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl className="">
                  <Input
                    type="text"
                    {...field}
                    disabled={isUpdating}
                    className={`${
                      isError(field.name, errors, form)
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-green600"
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    disabled={isUpdating}
                    className={`${
                      isError(field?.name, errors, form)
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-green600"
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid-cols-2 sm:grid sm:gap-4">
          <FormField
            control={control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+233..."
                    type="tel"
                    {...field}
                    disabled={isUpdating}
                    className={`${
                      isError(field.name, errors, form)
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-green600"
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your address..."
                    type="text"
                    {...field}
                    disabled={isUpdating}
                    className={`${
                      isError(field.name, errors, form)
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-green600"
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <ButtonLink
          type="submit"
          className="w-full mt-4"
          disable={isUpdating}
          onClick={() => handleErrorToast(isValid)}
        >
          {isUpdating ? (
            "Updating profile settings"
          ) : (
            <>
              Update Settings
              <SaveAll className="ml-2" />
            </>
          )}
        </ButtonLink>
      </form>
    </Form>
  );
};
