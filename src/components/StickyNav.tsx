import { cn } from "@/lib/utils";
import Link from "next/link";
import FoodDome from "./icons/FoodDome";

interface Props {
  inverted?: boolean;
}

const StickyNav: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = (
  props
) => {
  return (
    <aside
      className={cn(
        "border-simmer text-simmer hidden min-h-[200px] bg-black px-3 pb-20 xl:block",
        props.className
      )}
    >
      <div className="sticky top-0 flex flex-col items-center gap-8 py-8">
        <div className="relative h-[26.09px] w-[40px]">
          <FoodDome className="fill-simmer-white" />
        </div>
        <div className="flex gap-8" style={{ writingMode: "vertical-lr" }}>
          <NavLink href="#plate">PLATE</NavLink>
          <NavLink href="#home">HOME</NavLink>
          <NavLink href="#quote">QUOTE</NavLink>
          <NavLink href="#menu">MENU</NavLink>
          <NavLink
            href="#works"
            className="flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:bg-simmer-white after:content-['']"
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
        "flex -rotate-180 items-center justify-center border-b-2 border-black font-adelle-mono text-simmer-white hover:underline hover:decoration-2",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default StickyNav;
