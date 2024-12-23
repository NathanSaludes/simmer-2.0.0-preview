import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
   memberName: string;
   memberRole: string;
   catchPhrase: string;
   profilePhoto: string;
}

const MemberCard: React.FC<
   React.HTMLAttributes<HTMLDivElement> & Partial<Props>
> = ({ className, ...props }) => {
   return (
      <div
         className={cn(
            "min-h-[600px] rounded-[4rem] border-2 border-black",
            className
         )}
         {...props}
      >
         <div className="relative flex h-full flex-col">
            <div className="absolute -top-4 left-10 flex min-h-[178px] flex-col justify-end border-2 border-simmer-white bg-simmer-white bg-[url(/images/img_black-ticket.svg)] bg-contain bg-no-repeat p-4 text-center font-adelle-mono leading-none text-simmer-white">
               <span className="text-[1.1rem]">ORDER</span>
               <span className="text-[3rem]">00</span>
            </div>
            <div className="absolute right-10 top-10 aspect-square h-[200px]">
               <Image
                  src="/images/img_placeholder.jpg"
                  alt=""
                  fill
                  className="object-scale-down object-right-top"
               />
            </div>
            <div className="relative basis-full overflow-hidden p-10">
               <div className="flex min-h-[170px] w-full items-end justify-between gap-4">
                  <span className="shrink-0 rounded-full border-2 border-black bg-simmer-white px-4 py-0.5 font-adelle-mono text-[0.9rem] tracking-tight">
                     FLIP ME OVER
                  </span>
               </div>
            </div>
            <div className="space-y-1 px-14 pb-14">
               <p className="line-clamp-1 font-adelle-mono text-[4.5rem] font-bold">
                  CHESCA
               </p>
               <p className="line-clamp-2 min-h-[6rem] max-w-[14rem] font-articulat text-[3rem] font-medium leading-none">
                  Writer & Strategist
               </p>
            </div>
         </div>
      </div>
   );
};

export default MemberCard;
