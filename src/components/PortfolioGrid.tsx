const PortfolioGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <div className="group/portfolio-grid grid grid-cols-3 gap-0.5 bg-black text-white">
         {children}
      </div>
   );
};

export default PortfolioGrid;
