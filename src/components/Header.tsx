import Link from "next/link";
import { Suspense } from "react";
import HeaderRedirectLink from "./HeaderRedirectLink";
import SimmerLogo from "./icons/Logo";
import ChevronRight from "./icons/ChevronRight";
import FoodDome from "./icons/FoodDome";
import { cn } from "@/lib/utils";

interface Props {
  theme?: "dark" | "light";
}

const Header: React.FC<Props> = ({ theme = "light" }) => {
  return (
    <header
      className={cn("border-b-2 font-adelle-mono text-[1.1rem] leading-tight", {
        "border-simmer-white bg-black text-simmer-white": theme === "dark",
        "border-black bg-simmer-white text-black": theme === "light"
      })}
    >
      <div className="container flex min-h-[100px]">
        <Link
          href="/"
          className={cn("inline-flex w-[217px] items-center justify-center", {
            "border-none": theme === "dark",
            "border-r-2 border-black": theme === "light"
          })}
        >
          <SimmerLogo
            className={cn("w-[6rem]", {
              "fill-simmer-white": theme === "dark"
            })}
          />
        </Link>
        <div className="flex flex-1 items-center px-10">
          <div className="flex items-center gap-3">
            <ChevronRight
              className={cn("aspect-auto h-[18px]", {
                "fill-simmer-white": theme === "dark"
              })}
            />
            <Suspense fallback={"..."}>
              <HeaderRedirectLink />
            </Suspense>
          </div>
        </div>
        <div className="flex pr-16">
          <Link
            href="/"
            className={cn(
              "flex w-[141px] items-center justify-center border-l-2",
              {
                "border-simmer-white": theme === "dark",
                "border-black": theme === "light"
              }
            )}
          >
            GET A<br />
            QUOTE
          </Link>
          <Link
            href="/"
            className={cn(
              "flex w-[152px] items-center justify-center border-x-2",
              {
                "border-simmer-white": theme === "dark",
                "border-black": theme === "light"
              }
            )}
          >
            <FoodDome
              className={cn("aspect-auto w-[4rem]", {
                "fill-simmer-white": theme === "dark"
              })}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
