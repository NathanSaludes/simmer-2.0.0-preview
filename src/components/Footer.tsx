import Image from "next/image";
import SimmerLogo from "./icons/Logo";
import FoodDome from "./icons/FoodDome";

const Footer: React.FC = () => {
   return (
      <footer className="overflow-hidden bg-black text-simmer-white">
         <MarqueeText />
         <div className="container p-20">
            <div id="main-footer-content">
               <div className="flex justify-end">
                  <button className="h-[50px] rounded-full bg-simmer-white px-8 font-adelle-mono text-[1.5rem] font-bold tracking-tight text-black">
                     ADD TO PLATE
                  </button>
               </div>
               <div className="flex items-center justify-center">
                  <Image
                     src="/images/img_taco.svg"
                     alt=""
                     width={260}
                     height={226.22}
                  />
               </div>
            </div>
            <div className="flex items-end justify-between">
               <div className="space-y-5">
                  <p className="font-adelle-mono text-[1.6rem] leading-none">
                     READY TO
                     <br />
                     COOK WITH US?
                  </p>
                  <div className="flex overflow-hidden rounded-2xl border-2 border-simmer-white font-adelle-mono text-[3rem] font-bold">
                     <div className="flex flex-1 items-center gap-2 bg-simmer-white px-7 py-2 text-black">
                        <FoodDome className="block w-[55px]" />
                        <span className="tracking-tighter">YES</span>
                     </div>
                     <div className="flex flex-1 items-center justify-center px-7 py-2">
                        <span>NOOO!</span>
                     </div>
                  </div>
               </div>
               <Copyright />
            </div>
         </div>
      </footer>
   );
};

const MarqueeText = () => {
   return (
      <div className="marquee select-none space-x-1 whitespace-nowrap border-t-2 border-black bg-simmer-white font-adelle-mono text-[2rem] font-bold text-black">
         <div className="infinite-slider inline-block tracking-tight">
            <span className="inline-block pl-3">
               &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US
               TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US TACO&apos;BOUT YOUR
               BRAND &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND
            </span>
         </div>
         <div className="infinite-slider inline-block tracking-tight">
            <span className="inline-block pl-3">
               &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US
               TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US TACO&apos;BOUT YOUR
               BRAND &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND
            </span>
         </div>
      </div>
   );
};

const Copyright = () => {
   return (
      <div className="flex items-center divide-x-2 divide-simmer-white">
         <SimmerLogo className="mx-5 flex w-[220px] fill-simmer-white" />
         <div className="space-y-3 px-6 font-adelle-mono">
            <p className="font-bold leading-none">
               ALL
               <br />
               RIGHTS
               <br />
               RESERVED
            </p>
            <p className="text-[3rem] font-bold leading-none">(2024)</p>
         </div>
      </div>
   );
};

export default Footer;
