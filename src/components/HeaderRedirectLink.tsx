"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderRedirectLink = () => {
   const pathname = usePathname();
   const isHome = () => pathname === "/";

   if (isHome()) {
      return <span className="uppercase">Home</span>;
   }

   return (
      <Link href="/" className="uppercase">
         Back to Home
      </Link>
   );
};

export default HeaderRedirectLink;
