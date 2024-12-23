import Image from "next/image";

/**
 * This component is only used within the homepage.
 * - path: https://{yourdomainname}/
 */
const SectionCardsHome = () => {
   return (
      <section className="@container/cards-section container mb-[24.82px] px-10 md:px-20 xl:mb-8">
         <div className="@[75rem]/cards-section:flex-row flex flex-col gap-6">
            {/* card 1 */}
            <div className="bg-simmer rounded-b-2xl md:min-w-[544px] md:rounded-b-[20px]">
               <div className="flex justify-between gap-5 pt-[28px]">
                  <div className="flex items-center rounded-r-full bg-black px-8 py-2 md:px-16 md:py-4">
                     <p className="text-simmer font-adelle-mono-flex leading-none text-simmer-white md:text-[1.5rem]">
                        EXPLORE
                     </p>
                  </div>
                  <div className="mr-8 flex items-center">
                     <p className="font-adelle-mono leading-none md:hidden">
                        TAP &<br />
                        KNOW MORE
                     </p>
                     <p className="hidden font-adelle-mono leading-none md:inline-block md:text-[1.5rem]">
                        CLICK &<br />
                        KNOW MORE
                     </p>
                  </div>
               </div>
               <div className="px-[24px] pb-[42px] pt-[48px] font-adelle-mono text-[2rem] leading-none md:px-[64px] md:pt-[9px] md:text-[4rem] md:leading-tight">
                  <div className="flex border-b-2 border-black py-4 md:py-[1.5rem]">
                     <span className="relative flex items-center gap-5 after:inline-block after:aspect-square after:w-[20px] after:rounded-full after:bg-simmer-yellow after:content-[''] md:after:w-[30px]">
                        STUDIO
                     </span>
                  </div>
                  <div className="flex border-b-2 border-black py-4">
                     <span>CLIENTS</span>
                  </div>
                  <div className="flex border-b-2 border-black py-4">
                     <span>IDEAS</span>
                  </div>
                  <div className="flex border-b-2 border-black py-4">
                     <span>SIMMER</span>
                  </div>
               </div>
            </div>
            {/* card 2 */}
            <div className="bg-simmer @container/card-2 @[1400px]/cards-section:rounded-tr-[420px] w-full space-y-8 rounded-tr-[100px] px-[24px] py-[42px] md:relative md:flex md:min-h-[641px] md:flex-col md:justify-between md:px-[64px] md:pb-[64px] md:pt-[74px]">
               <p className="font-articulat text-[2rem] font-bold leading-none md:text-[4rem]">
                  We are a<br />
                  creative kitchen.
               </p>
               <div className="@[850px]/card-2:absolute right-0 top-0 flex justify-center">
                  <div className="@[850px]/card-2:h-[263.71px] @[850px]/card-2:w-[402px] relative aspect-video w-full">
                     <Image
                        src="/images/img_wine-glass.svg"
                        className="object-contain"
                        alt=""
                        fill
                     />
                  </div>
               </div>
               <p className="text-pretty font-articulat text-[0.937rem] font-bold leading-[1.47rem] md:text-[2rem] md:leading-[2.5rem]">
                  From start-ups, local, international, personal brands,
                  communities, corporations, businesses and government agencies—
                  our services has no creative limits.
               </p>
            </div>
         </div>
      </section>
   );
};

export default SectionCardsHome;
