import { cn } from "@/lib/utils";
import Link from "next/link";
import FoodDome from "./icons/FoodDome";
import { ThemeProp } from "@/lib/interfaces";

const StickyNav: React.FC<React.HTMLAttributes<HTMLDivElement> & ThemeProp> = ({
   theme = "light",
   ...props
}) => {
   return (
      <aside
         className={cn(
            "hidden min-h-[200px] px-3 pb-20 xl:block",
            {
               "bg-simmer-white text-black": theme && theme === "light",
               "bg-black text-simmer-white": theme && theme === "dark"
            },
            props.className
         )}
      >
         <div className="sticky top-0 flex flex-col items-center gap-8 py-8">
            <div className="relative h-[26.09px] w-[40px]">
               <FoodDome
                  className={cn({
                     "fill-black": theme && theme === "light",
                     "fill-simmer-white": theme && theme === "dark"
                  })}
               />
            </div>
            <div
               className={cn("flex gap-8", {
                  "text-black": theme && theme === "light",
                  "text-simmer-white": theme && theme === "dark"
               })}
               style={{ writingMode: "vertical-lr" }}
            >
               <NavLink href="#plate">PLATE</NavLink>
               <NavLink href="#home">HOME</NavLink>
               <NavLink href="#quote">QUOTE</NavLink>
               <NavLink href="#menu">MENU</NavLink>
               <NavLink
                  href="#works"
                  className={cn(
                     "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']",
                     {
                        "after:bg-black": theme && theme === "light",
                        "after:bg-simmer-white": theme && theme === "dark"
                     }
                  )}
               >
                  WORKS
               </NavLink>
               <NavLink href="#about">ABOUT</NavLink>
               <NavLink href="#snap">SNAP</NavLink>
               <NavLink href="#stories">STORIES</NavLink>
               <NavLink href="#supply">SUPPLY</NavLink>
            </div>
         </div>
      </aside>
   );
};

const NavLink: React.FC<React.ComponentProps<typeof Link>> = ({
   href,
   className,
   children
}) => {
   return (
      <Link
         href={href}
         className={cn(
            "flex -rotate-180 items-center justify-center font-adelle-mono hover:underline hover:decoration-2",
            className
         )}
      >
         {children}
      </Link>
   );
};

export default StickyNav;
