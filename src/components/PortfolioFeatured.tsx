import Image from "next/image";
import Link from "next/link";

const PortfolioFeatured = () => {
  return (
    <div className="grid grid-cols-2 gap-0.5 bg-black">
      <div className="col-span-full flex h-[100px] items-center bg-simmer-white">
        <span className="text-[4rem] uppercase">Featured</span>
      </div>
      <div className="flex flex-col divide-y-2 divide-black bg-simmer-white">
        <FeaturedImage />
        <CaptionBlock />
        <div className="flex h-[100px] items-center">
          <span className="text-[4rem] uppercase">Favorites</span>
        </div>
      </div>
      <div className="flex flex-col-reverse divide-y-2 divide-y-reverse divide-black bg-simmer-white">
        <FeaturedImage />
        <CaptionBlock />
      </div>
    </div>
  );
};

const CaptionBlock: React.FC<{ heading?: string; caption?: string }> = ({
  heading = "Project Name",
  caption = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nam."
}) => {
  return (
    <div className="flex px-20 py-10">
      <Link href={"/"} className="basis-full font-articulat">
        <h3 className="text-[4rem] font-medium">{heading}</h3>
        <p className="text-[2rem] font-bold leading-tight">{caption}</p>
      </Link>
    </div>
  );
};

const FeaturedImage = () => {
  return (
    <Link
      href={"/"}
      className="relative block aspect-square flex-1 bg-gray-100 transition duration-300 ease-in-out hover:brightness-90"
    >
      <Image
        className="object-cover"
        src={"/images/img_placeholder.jpg"}
        alt=""
        fill
      />
    </Link>
  );
};

export default PortfolioFeatured;
