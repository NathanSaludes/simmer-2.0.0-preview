import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ArrowDown from "@/components/icons/ArrowDown";
import SquareBracketLeft from "@/components/icons/SquareBracketLeft";
import SquareBracketRight from "@/components/icons/SquareBracketRight";
import MemberCard from "@/components/MemberCard";
import StickyNav from "@/components/StickyNav";
import Image from "next/image";

export default function About() {
   return (
      <>
         <Header theme="dark" className="border-b-0" />
         <main>
            <div className="container flex bg-black">
               <StickyNav
                  className="mt-32 border-t-2 border-simmer-white"
                  theme="dark"
               />
               <div className="flex-1 divide-x-2 divide-black overflow-hidden">
                  {/* Page Header + Full Width Image */}
                  <section className="rounded-tl-[7rem] bg-simmer-white">
                     <div className="p-24">
                        <div className="flex gap-16">
                           <h1 className="font-adelle-mono text-[12rem] font-bold leading-none tracking-tighter">
                              CREATIVE
                              <br />
                              CHEFS
                           </h1>
                           <div className="flex flex-1 flex-col justify-between font-articulat">
                              <div className="flex items-center justify-end gap-5">
                                 <ArrowDown className="h-[5rem] stroke-black" />
                                 <span className="mt-4 whitespace-nowrap text-[7rem] leading-none">
                                    PEEK HERE
                                 </span>
                              </div>
                              <div className="space-y-3">
                                 <span className="text-[1.1rem] font-bold">
                                    SOMETHING ABOUT
                                 </span>
                                 <p className="text-wrap text-[1.5rem] font-medium leading-snug">
                                    The Bourbon Bros combines premium quality
                                    with a fun and approachable personality,
                                    making it an excellent choice for those
                                    looking for a high-quality bourbon that
                                    doesn&apos;t take itself too seriously.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="relative aspect-video border-y-2 border-black">
                        <Image
                           src="/images/img_placeholder.jpg"
                           alt=""
                           fill
                           className="object-cover"
                        />
                     </div>
                  </section>
                  {/* Bento Blocks */}
                  <section className="bg-simmer-white py-14">
                     <div className="grid grid-cols-2 gap-16 px-14">
                        <div className="relative overflow-hidden rounded-[6rem]">
                           <Image
                              src="/images/img_placeholder.jpg"
                              alt=""
                              fill
                              className="object-cover"
                           />
                        </div>
                        <div className="space-y-10">
                           <div className="relative min-h-[400px] overflow-hidden rounded-[4rem]">
                              <Image
                                 src="/images/img_placeholder.jpg"
                                 alt=""
                                 fill
                                 className="object-cover"
                              />
                           </div>
                           <div className="min-h-[300px] rounded-[4rem] bg-black"></div>
                        </div>
                     </div>
                  </section>
                  {/* Member Cards */}
                  <section className="space-y-14 bg-simmer-white pb-16">
                     <div className="">
                        <h2 className="text-center font-adelle-mono text-[12rem] leading-none tracking-tight">
                           FLIP ME—[OVER].
                        </h2>
                     </div>
                     <div className="grid grid-cols-4 gap-x-8 gap-y-16 px-14">
                        {Array.from({ length: 12 }).map((item, index) => (
                           <MemberCard key={index} className="w-full" />
                        ))}
                     </div>
                  </section>
                  <section className="space-y-16 border-t-2 border-black bg-simmer-white px-14 pb-20 pt-28">
                     <div className="inline-flex gap-6">
                        <div className="flex gap-1 font-adelle-mono leading-none tracking-tight">
                           <SquareBracketLeft className="inline-block" />
                           <span>
                              BUILDING
                              <br />
                              THE BRAND
                           </span>
                           <SquareBracketRight className="inline-block" />
                        </div>
                        <h2 className="font-articulat text-[4rem] font-bold leading-none tracking-tight">
                           CLIENT LIST
                        </h2>
                     </div>
                     <p className="max-w-prose font-articulat text-[1.3rem] font-medium">
                        The Bourbon Bros combines premium quality with a fun and
                        approachable personality, making it an excellent choice
                        for those looking for a high-quality bourbon that
                        doesn&apos;t take itself too seriously. The Bourbon Bros
                        combines premium quality with a fun and approachable
                        personality, making it an excellent choice for those
                        looking for a high-quality bourbon that doesn&apos;t
                        take itself too seriously.
                     </p>
                     <div className="grid grid-cols-4 gap-x-10 gap-y-1">
                        {/* Major Clients */}
                        {Array.from({ length: 20 }).map((item, index) => (
                           <div key={index} className="">
                              <span className="font-articulat text-[1.5rem] font-black tracking-tight">
                                 Client Name Here
                              </span>
                           </div>
                        ))}
                        {/* Other Clients */}
                        {Array.from({ length: 48 }).map((item, index) => (
                           <div key={index} className="">
                              <span className="font-articulat text-[1.5rem] tracking-tight">
                                 Client Name Here
                              </span>
                           </div>
                        ))}
                     </div>
                  </section>
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
}
