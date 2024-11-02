import { cn } from "@/lib/utils";
import StickyNav from "./StickyNav";

interface Props {
  theme?: "dark" | "light";
}

const ContentWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  theme = "light",
  children
}) => {
  return (
    <div
      className={cn("container flex outline outline-2", {
        "outline-simmer-white": theme === "dark"
      })}
    >
      <StickyNav />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ContentWrapper;
