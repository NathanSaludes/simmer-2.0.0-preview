import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ArrowDown from "@/components/icons/ArrowDown";
import AsteriskFionas from "@/components/icons/AsteriskFionas";
import ScaleInput from "@/components/ScaleInput";

export default function Branding() {
   return (
      <>
         <Header theme="dark" />
         <main className="bg-black">
            <ContentWrapper>
               <form>
                  <div className="relative flex min-h-[236px] items-center gap-6 border-b-2 border-simmer-white bg-simmer-yellow px-8">
                     <h1 className="font-adelle-mono text-[10rem] leading-none tracking-tight text-black">
                        DIG
                        <AsteriskFionas className="mr-3 inline-block -translate-y-4 fill-simmer-white" />
                        IN
                     </h1>
                     <ArrowDown className="stroke-simmer-white" />
                     <span className="block -translate-y-9 font-articulat text-[1.5rem] font-bold leading-none text-simmer-white">
                        BRAND
                        <br />
                        QUESTIONNAIRE
                     </span>
                  </div>
                  <div className="flex items-end justify-between gap-10 p-10 font-articulat text-simmer-white">
                     <p className="max-w-[58rem] flex-1 text-[1.4rem]">
                        We&apos;d love to know your secret recipe. Your story.
                        We start getting things simmering by obtaining our key
                        ingredients. This is how we know we’re truly catering
                        designs suited to your taste. The purpose of this
                        questionnaire is to help us know you better and will
                        serve as our guideline in crafting the perfect branding
                        recipe that is true to your brand’s identity
                     </p>
                     <span className="text-[1.6rem] font-bold leading-tight">
                        WELCOME TO
                        <br />
                        SIMMER STUDIOS
                     </span>
                  </div>
                  <div className="divide-y-2 divide-simmer-white text-simmer-white">
                     <div className="flex items-center">
                        <label
                           htmlFor="name"
                           className="whitespace-nowrap px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight"
                        >
                           NAME
                        </label>
                        <input
                           className="basis-full bg-transparent px-3 font-fionas text-[4rem] leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
                           type="text"
                           name="name"
                           defaultValue=""
                           placeholder="*Name Here"
                        />
                     </div>
                     <div className="flex items-center">
                        <label
                           htmlFor="mobile"
                           className="whitespace-nowrap px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight"
                        >
                           MOBILE
                        </label>
                        <input
                           className="basis-full bg-transparent px-3 font-fionas text-[4rem] leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
                           type="tel"
                           name="mobile"
                           defaultValue=""
                           placeholder="*+63"
                        />
                     </div>
                     <div className="flex items-center">
                        <label
                           htmlFor="email"
                           className="whitespace-nowrap px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight"
                        >
                           EMAIL
                        </label>
                        <input
                           className="basis-full bg-transparent px-3 font-fionas text-[4rem] leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
                           type="email"
                           name="email"
                           defaultValue=""
                           placeholder="*name@brand.com"
                        />
                     </div>
                     <div className="flex items-center">
                        <label
                           htmlFor="brandName"
                           className="whitespace-nowrap px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight"
                        >
                           BRAND NAME
                        </label>
                        <input
                           className="basis-full bg-transparent px-3 font-fionas text-[4rem] leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
                           type="text"
                           name="brandName"
                           defaultValue=""
                           placeholder="*Official Brand Name Here"
                        />
                     </div>
                     <div className="col-span-2 flex basis-full flex-col space-y-4 px-8 py-8">
                        <label
                           htmlFor=""
                           className="font-articulat text-[1.5rem] font-bold tracking-wider"
                        >
                           ELEVATOR PITCH
                        </label>
                        <textarea
                           className="h-[400px] w-full resize-none bg-transparent font-articulat text-[4rem] font-light leading-tight tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
                           name="brandDescription"
                           required
                           placeholder="Your brand in 3-5 sentences."
                        />
                     </div>
                     <div className="px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight">
                        BRANDING SCALE
                     </div>
                     <div className="space-y-10 p-14 pb-24">
                        <ScaleInput
                           leftLabel="MASCULINE"
                           rightLabel="FEMININE"
                        />
                        <ScaleInput leftLabel="NECESSITY" rightLabel="LUXURY" />
                        <ScaleInput
                           leftLabel="ABSTRACT"
                           rightLabel="STRAIGHTFORWARD"
                        />
                     </div>
                     <div className="col-span-2 flex basis-full flex-col space-y-4 px-8 py-8">
                        <label
                           htmlFor=""
                           className="font-articulat text-[1.5rem] font-bold tracking-wider"
                        >
                           YOUR TARGET MARKET
                        </label>
                        <textarea
                           className="h-[400px] w-full resize-none bg-transparent font-articulat text-[4rem] font-light leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-balance placeholder:text-simmer-yellow"
                           name="brandDescription"
                           required
                           placeholder="Who are you talking to? What is their age, class, interests, etc.?"
                        />
                     </div>
                     <div className="col-span-2 flex basis-full flex-col space-y-4 px-8 py-8">
                        <label
                           htmlFor=""
                           className="font-articulat text-[1.5rem] font-bold tracking-wider"
                        >
                           DEMORGAPHICS
                        </label>
                        <textarea
                           className="h-[400px] w-full resize-none bg-transparent font-articulat text-[4rem] font-light leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-balance placeholder:text-simmer-yellow"
                           name="brandDescription"
                           required
                           placeholder="Who are you talking to? What is their age, class, interests, etc.?"
                        />
                     </div>
                  </div>
                  <div className="flex min-h-[400px] items-center justify-center">
                     <button className="h-28 rounded-full bg-simmer-white px-28 font-adelle-mono text-[1.3rem] font-bold text-black hover:bg-simmer-white/80">
                        LET&apos;S GET COOKING!
                     </button>
                  </div>
               </form>
            </ContentWrapper>
         </main>
         <Footer />
      </>
   );
}
