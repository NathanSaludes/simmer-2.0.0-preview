import { cn } from "@/lib/utils";
import StickyNav from "./StickyNav";
import { ThemeProp } from "@/lib/interfaces";

const ContentWrapper: React.FC<
   React.PropsWithChildren<ThemeProp> & React.HTMLAttributes<HTMLDivElement>
> = ({ theme = "dark", className, children }) => {
   return (
      <div className={cn("flex", className)}>
         <StickyNav theme={theme} />
         <div className="flex-1">{children}</div>
      </div>
   );
};

export default ContentWrapper;
