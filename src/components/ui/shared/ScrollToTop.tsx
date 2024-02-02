
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <TooltipProvider delayDuration={400}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div role="button" className="fixed bottom-3 right-3 cursor-pointer">
            <img
              src="/upload.png"
              alt="arrow"
              width={50}
              height={50}
              onClick={handleScroll}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="mr-2">
          <p>Scroll To Top</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

