import Image from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
}

const PortfolioItem: React.FC<Props> = ({ slug }) => {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group/portfolio-item relative aspect-square overflow-hidden bg-simmer-white transition duration-300 ease-in-out hover:brightness-90"
    >
      <Image
        className="object-cover object-center transition duration-300 ease-in-out group-hover/portfolio-item:scale-110"
        src={"/images/img_placeholder.jpg"}
        alt=""
        fill
      />
    </Link>
  );
};

export default PortfolioItem;
