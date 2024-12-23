import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import MenuForm from "@/components/forms/MenuForm";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function Menu() {
   return (
      <>
         <Header />
         <main className="bg-black">
            <ContentWrapper>
               <Suspense fallback={<div>Loading Menu Form...</div>}>
                  <MenuForm />
               </Suspense>
            </ContentWrapper>
         </main>
         <Footer />
      </>
   );
}
