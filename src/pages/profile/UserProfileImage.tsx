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

export const UserProfileImage = ({
  userImage,
}: {
  userImage: string | undefined;
}) => {
  const [image, setImage] = useState<Props>({ preview: "", data: "" });
  const [showUpload, setShowUpload] = useState(false);

  const {
    error,
    isPending: isUploading,
    isError,
    mutate: updateProfile,
  } = useUpdateProfilePicture("/user/profile");

  if (isError) console.log(error?.message);

  const {
    error: deleteError,
    isPending: isDeleting,
    isError: isDeleteError,
    mutate: deleteMutation,
  } = useDeleteProfilePicture("/user/profile");

  if (isDeleteError) console.log(deleteError?.message);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log(file)
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
    console.log(formData)
    console.log(image.data)
    updateProfile(formData as never);
    setImage({ data: "", preview: "" });
    setShowUpload(false);
  };


  const handleImageDelete = async () => {
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
                <RotateCw className="w-5 h-5 ml-1 animate-spin" />
              </>
            ) : (
              "Change photo"
            )}
          </ButtonLink>
        </div>
        <div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              {userImage && (
                <ButtonLink
                  type="button"
                  className="border px-4 !border-red-500 hover:!bg-red-500 hover:border-red-600 !text-red-500 hover:!text-white"
                  disable={isDeleting}
                >
                  {isDeleting ? (
                    <>
                      Deleting photo
                      <RotateCw className="w-5 h-5 ml-1 animate-spin" />
                    </>
                  ) : (
                    "Delete photo"
                  )}
                </ButtonLink>
              )}
            </AlertDialogTrigger>
            <AlertDialogContent className="text-lg">
              <AlertDialogHeader>
                <AlertDialogTitle className="my-1">
                  Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-lg">
                  This action cannot be undone. This will permanently delete
                  your profile image
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="text-base focus-visible:ring-0">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleImageDelete}
                  className="text-base border border-red-500 bg-red-500 text-white  hover:bg-red-500  hover:!text-white"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <>
        {showUpload && (
          <>
            <div className="flex items-center justify-center max-w-2xl mx-auto mt-4">
              <label className="flex flex-col items-center justify-center w-full h-48 px-3 mx-3 border border-dashed rounded-md shadow-lg cursor-pointer border-green600">
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
              </ButtonLink>
            </div>
          </>
        )}
      </>
    </>
  );
};
