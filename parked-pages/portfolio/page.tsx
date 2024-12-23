import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContentWrapper from "@/components/ContentWrapper";
import PortfolioItem from "@/components/PortfolioItem";
import PortfolioGrid from "@/components/PortfolioGrid";
import data from "@/mockdata.json";
import PortfolioFeatured from "@/components/PortfolioFeatured";

export default function Portfolio() {
   const projects = data.portfolios;

   return (
      <>
         <Header />
         <main>
            <section className="">
               <div className="container flex min-h-[800px] items-center justify-center text-simmer-white">
                  <span>&lt;Hero Section&gt; (under development)</span>
               </div>
            </section>
            <ContentWrapper>
               <section>
                  <PortfolioFeatured />
               </section>
               <section className="border-t-2 border-black">
                  <PortfolioGrid>
                     {projects
                        .filter((item) => item.favorite)
                        .map((project) => (
                           <PortfolioItem
                              key={project.id}
                              slug={project.slug}
                           />
                        ))}
                  </PortfolioGrid>
               </section>
            </ContentWrapper>
         </main>
         <Footer />
      </>
   );
}
