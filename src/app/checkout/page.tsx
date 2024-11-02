import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import CheckoutForm from "@/components/forms/CheckoutForm";
import Header from "@/components/Header";
import ArrowDown from "@/components/icons/ArrowDown";
import AsteriskFionas from "@/components/icons/AsteriskFionas";
import { Suspense } from "react";

export default function Checkout() {
  return (
    <>
      <Header theme="dark" />
      <main className="bg-black text-simmer-white">
        <ContentWrapper>
          <div className="border-l-2 border-simmer-white">
            <div className="relative flex min-h-[236px] items-center gap-6 border-b-2 border-simmer-white bg-simmer-yellow px-8">
              <h1 className="font-adelle-mono text-[10rem] leading-none tracking-tight text-black">
                START
                <AsteriskFionas className="mr-3 inline-block -translate-y-4 fill-simmer-white" />
                HERE
              </h1>
              <ArrowDown className="stroke-simmer-white" />
              <span className="block -translate-y-9 font-articulat text-[1.5rem] font-bold leading-none">
                WORK
                <br />
                WITH US
              </span>
              <div className="absolute right-14 box-border flex h-[221px] w-[119px] translate-y-[60%] flex-col items-center justify-end bg-[url(/images/img_ticket-vertical.svg)] p-5 font-adelle-mono font-bold leading-none">
                <span className="text-[1.5rem]">ORDER</span>
                <span className="text-[4rem]">01</span>
              </div>
            </div>
            <Suspense fallback={<div>Loading Checkout Form...</div>}>
              <CheckoutForm />
            </Suspense>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
