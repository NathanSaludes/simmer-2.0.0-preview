import Link from "next/link";
import Ampersand from "../icons/Ampersand";
import CheckoutRemoveItemIcon from "../icons/CheckoutRemoveItemIcon";

const CheckoutForm = () => {
  return (
    <form className="divide-y-2 divide-simmer-white overflow-x-hidden">
      <NameField />
      <div className="grid grid-cols-[1fr_100px_0.6fr] divide-x-2 divide-simmer-white">
        <LeftPanel />
        <RightPanel />
      </div>
      <div className="grid grid-cols-[1fr_104px_0.6fr]">
        <div className="col-span-2 flex basis-full flex-col space-y-4 px-8 py-8">
          <label
            htmlFor=""
            className="font-articulat text-[1.5rem] font-bold tracking-wider"
          >
            WHERE DID YOU FIND US?
          </label>
          <textarea
            className="h-[200px] w-full resize-none bg-transparent font-articulat text-[4rem] font-light leading-tight tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
            name="brandDescription"
            required
            placeholder="How did you hear about Simmer?"
          />
        </div>
        <div className="flex border-l-2 border-simmer-white">
          <div className="flex basis-full items-center justify-center">
            <button className="h-[100px] rounded-full bg-simmer-white px-16 font-adelle-mono text-[1.2rem] font-bold text-black">
              LET&apos;S GET COOKING!
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const NameField = () => {
  return (
    <div className="flex divide-x-2 divide-simmer-white">
      <label
        htmlFor="name"
        className="px-8 font-adelle-mono-flex text-[8rem] tracking-tight"
      >
        NAME
      </label>
      <input
        className="basis-full bg-transparent px-10 font-fionas text-[4rem] font-semibold leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-white"
        type="text"
        name="name"
        placeholder="Click here to type your name."
      />
    </div>
  );
};

const LeftPanel = () => {
  return (
    <div className="left-panel grid grid-rows-[repeat(10,112px)] divide-y-2 divide-simmer-white">
      <div className="flex items-center">
        <label
          htmlFor="mobile"
          className="px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight"
        >
          MOBILE
        </label>
        <input
          className="basis-full bg-transparent px-3 font-fionas text-[4rem] leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
          type="tel"
          name="mobile"
          defaultValue="+63"
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="email"
          className="px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight"
        >
          EMAIL
        </label>
        <input
          className="basis-full bg-transparent px-3 font-fionas text-[4rem] leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
          type="email"
          name="email"
          placeholder="name@brand.com"
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="brand"
          className="px-8 font-adelle-mono-flex text-[4rem] font-bold tracking-tight"
        >
          BRAND
        </label>
        <input
          className="basis-full bg-transparent px-3 font-fionas text-[4rem] leading-none tracking-tight text-simmer-yellow outline-none placeholder:text-simmer-yellow"
          type="text"
          name="brand"
          placeholder="What's your brand name/field?"
        />
      </div>
      <div className="row-span-7 flex px-8 py-8">
        <div className="flex basis-full flex-col space-y-4">
          <label
            htmlFor=""
            className="font-articulat text-[1.5rem] font-bold tracking-wider"
          >
            REQUIRED FIELD
          </label>
          <textarea
            className="h-full w-full resize-none bg-transparent font-articulat text-[4rem] font-light leading-tight tracking-tight text-simmer-yellow outline-none placeholder:text-balance placeholder:text-simmer-yellow"
            name="brandDescription"
            required
            placeholder="Tell us something about your brand here."
          />
        </div>
      </div>
    </div>
  );
};

const RightPanel = () => {
  return (
    <div className="right-panel col-span-2 grid grid-rows-[repeat(10,112px)] divide-y-2 divide-simmer-white">
      <div className="relative row-span-2 flex justify-center bg-simmer-yellow px-10 py-4">
        <Ampersand className="absolute -left-[50px] translate-y-11" />
        <div className="flex basis-full gap-10 pl-7">
          <span className="-translate-y-3 font-adelle-mono text-[5rem]">
            BUDGET
          </span>
          <span className="font-fionas text-[10rem]">$$$$</span>
        </div>
      </div>
      <div className="row-span-1 px-8 font-adelle-mono-flex text-[4.3rem] tracking-tight">
        <span className="mt-1 inline-block">ORDERS</span>
      </div>
      <div className="row-span-7 flex flex-col justify-stretch divide-y-2 divide-simmer-white">
        <div className="max-h-[calc(112px*6)] divide-y-2 divide-simmer-white overflow-y-scroll">
          {Array.from({ length: 3 }).map((item, index) => (
            <div
              key={index}
              className="grid h-[112px] basis-full grid-cols-[100px_1fr] divide-x-2 divide-simmer-white"
            >
              <button
                type="button"
                className="group flex items-center justify-center"
              >
                <CheckoutRemoveItemIcon className="transition duration-75 group-hover:opacity-50" />
              </button>
              <div className="flex items-center px-8 font-articulat text-[2.8rem] font-medium uppercase">
                <span className="mt-2 line-clamp-1">ITEM NAME</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-1 divide-x-2 divide-simmer-white">
          <div className="basis-[100px]"></div>
          <div className="flex flex-1 items-end justify-end px-14 py-8">
            <Link
              href="/menu"
              className="font-adelle-mono-flex text-[1.8rem] font-medium uppercase text-simmer-yellow"
            >
              CLICK TO ADD MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
