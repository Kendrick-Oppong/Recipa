import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import ReactPlayer from "react-player/youtube";

export const ModalWindow = ({ url }: { url: string }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <PlayCircle className="w-8 h-8 my-auto" />
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-auto rounded-3xl">
        <ReactPlayer
          url={url}
          controls={true}
          style={{ marginTop: "2rem" }}
          width="100%"
          pip={true}
        />
      </DialogContent>
    </Dialog>
  );
};
