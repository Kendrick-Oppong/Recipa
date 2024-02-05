import { ToolTip } from ".";

export const ScrollToTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ToolTip tooltip="Scroll to top">
      <div role="button" className="fixed bottom-3 right-3 cursor-pointer">
        <img
          src="/upload.png"
          alt="arrow"
          width={50}
          height={50}
          onClick={handleScroll}
        />
      </div>
    </ToolTip>
  );
};
