import { cn } from "@/lib/utils";
import Slider from "./Slider";

interface Props {
   leftLabel: string;
   rightLabel: string;
}

const ScaleInput: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
   className,
   leftLabel,
   rightLabel
}) => {
   return (
      <div className={cn("space-y-2", className)}>
         <div className="flex min-h-[4rem] items-center">
            <Slider step={1} max={10} min={0} defaultValue={[5]} />
         </div>
         <div className="flex justify-between">
            <p className="font-articulat text-[1.5rem] font-bold uppercase">
               {leftLabel}
            </p>
            <p className="font-articulat text-[1.5rem] font-bold uppercase">
               {rightLabel}
            </p>
         </div>
      </div>
   );
};

export default ScaleInput;
