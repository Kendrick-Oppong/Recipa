import { UploadCloud, RotateCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonLink } from "@/components/shared";
import {
  usePatch as useUpdateProfilePicture,
  useDelete as useDeleteProfilePicture,
} from "@/hooks";
import { useState } from "react";

interface Props {
  preview: string;
  data: File | string;
}

export const UserProfileImage = () => {
  const [image, setImage] = useState<Props>({ preview: "", data: "" });

  const [showUpload, setShowUpload] = useState(false);

  const {
    error,
    isPending: isUploading,
    isError,
    mutate: updateProfile,
  } = useUpdateProfilePicture("http://localhost:5000/user/profile");

  if (isError) console.log(error?.message);

  const {
    error: deleteError,
    isPending: isDeleting,
    isError: isDeleteError,
    mutate: deleteMutation,
  } = useDeleteProfilePicture("http://localhost:5000/user/profile");

  if (isDeleteError) console.log(deleteError?.message);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const img = {
        preview: URL.createObjectURL(file),
        data: file,
      };
      setImage(img);
    }
  };

  const handleImageUpload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", image.data);
    updateProfile(formData as never);
    setImage({ data: "", preview: "" });
    setShowUpload(false);
  };

  const handleImageDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    deleteMutation();
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div>
          <ButtonLink
            type="button"
            className="px-4"
            disable={isUploading}
            onClick={() => setShowUpload((prev) => !prev)}
          >
            {isUploading ? (
              <>
                Updating photo
                <RotateCw className="animate-spin w-5 h-5 ml-1" />
              </>
            ) : (
              "Change photo"
            )}
          </ButtonLink>
        </div>
        <div>
          <ButtonLink
            type="button"
            className="border px-4 !border-red-500 hover:!bg-red-500 hover:border-red-600 !text-red-500 hover:!text-white"
            disable={isDeleting}
            onClick={(e) => handleImageDelete(e)}
          >
            {isDeleting ? (
              <>
                Deleting photo
                <RotateCw className="animate-spin w-5 h-5 ml-1" />
              </>
            ) : (
              "Delete photo"
            )}
          </ButtonLink>
        </div>
      </div>

      <>
        {showUpload && (
          <>
            <div className="flex items-center justify-center max-w-2xl mx-auto mt-4">
              <label className="flex flex-col items-center justify-center w-full h-48 px-3 mx-3 border border-green600 border-dashed rounded-md cursor-pointer shadow-lg">
                <div className="flex flex-col items-center justify-center pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-[bounce_2s_ease-out_infinite]"
                  >
                    <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                    <path d="m14 19.5 3-3 3 3" />
                    <path d="M17 22v-5.5" />
                    <circle cx="9" cy="9" r="2" />
                  </svg>
                  <p className="my-2 ">
                    <span className="font-semibold">Click to select</span>
                  </p>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Picture</Label>
                  <Input
                    id="picture"
                    type="file"
                    onChange={(e) => handleFileInputChange(e)}
                    accept="image/*"
                    className="py-1 border border-green600"
                  />
                </div>
              </label>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <ButtonLink
                type="button"
                className="w-[97%] mt-4 mx-auto"
                onClick={(e) => handleImageUpload(e)}
              >
                Upload photo
                <UploadCloud className="ml-2" />
                {/* {isPending ? "Validating" : "Sign In"} */}
              </ButtonLink>
            </div>
          </>
        )}
      </>
    </>
  );
};
