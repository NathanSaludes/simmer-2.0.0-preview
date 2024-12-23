import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroHome from "@/components/HeroHome";
import SectionCardsHome from "@/components/SectionCardsHome";
import SectionCoreServices from "@/components/SectionCoreServicesHome";
import SectionInteractiveEggs from "@/components/SectionInteractiveEggsHome";
import SectionPills from "@/components/SectionPillsHome";
import SectionSecretIngredientHome from "@/components/SectionSecretIngredientHome";
import SectionServicesTabs from "@/components/SectionServicesHome";

export default function Home() {
   return (
      <>
         <Header />
         <main>
            <HeroHome />
            <ContentWrapper>
               <div className="bg-simmer-white">
                  <SectionCardsHome />
                  {/* <SectionSecretIngredientHome /> */}
                  {/* <SectionCoreServices /> */}
                  {/* <SectionServicesTabs /> */}
                  {/* <SectionPills /> */}
                  {/* <SectionInteractiveEggs /> */}
               </div>
            </ContentWrapper>
         </main>
         <Footer />
      </>
   );
}
