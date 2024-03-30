import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import ReactPlayer from "react-player/youtube";
import { ButtonLink } from "./ButtonLink";

export const ModalWindow = ({ url }: { url: string }) => {
  return (
    <Dialog>
      <DialogTrigger >
        <ButtonLink type="button">
          <h1>Watch Tutorial</h1>
          <PlayCircle className="w-7 h-7 ml-1" />
        </ButtonLink>
      </DialogTrigger>
      <DialogContent className="max-w-[22rem] md:max-w-3xl h-auto rounded-lg">
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
