import { ButtonLink } from "@/components/shared";
import { SettingsForm } from "./SettingsForm";

export const Settings = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-semibold">Basic Settings</h1>
      <div>
        <p className="font-semibold">Profile Picture</p>
        <div className="flex gap-8">
          <div className="flex items-center ">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="font-semibold">David Matin</p>
          </div>
          <div className="flex gap-5 self-center">
            <div>
              <ButtonLink>Change</ButtonLink>
            </div>
            <div>
              <ButtonLink
                type="button"
                className="border !border-red-500 hover:!bg-red-500 hover:border-red-600 !text-red-500 hover:!text-white"
              >
                Delete
              </ButtonLink>
            </div>
          </div>
        </div>
        <SettingsForm />
      </div>
    </div>
  );
};
