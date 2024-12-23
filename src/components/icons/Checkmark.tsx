import { CustomSVG } from "@/lib/types";

const Checkmark: CustomSVG = (props) => {
   return (
      <svg
         width="51"
         height="35"
         viewBox="0 0 51 35"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path d="M2.18022 25.49C3.90022 26.24 5.59022 27.05 7.20022 28.02C7.32022 28.09 8.35022 28.76 7.86022 28.43C8.18022 28.65 8.49022 28.88 8.80022 29.12C9.48022 29.64 10.1302 30.18 10.7702 30.76C12.4402 32.26 13.6602 34.23 15.9402 34.84C18.6702 35.57 20.0102 33.78 21.3302 31.76C25.8702 24.84 31.4602 18.55 37.8502 13.29C41.3802 10.38 45.1702 7.79002 49.1302 5.51002C52.1902 3.74002 47.7502 -1.26998 45.0102 0.320023C38.1802 4.27002 31.8802 9.17002 26.3502 14.81C23.5702 17.65 20.9902 20.68 18.6402 23.89C17.5002 25.44 16.4602 27.04 15.4002 28.64C15.3202 28.77 15.0502 29.05 14.9902 29.22C14.7902 29.77 13.7502 29.31 15.8402 29.67C16.8702 29.84 17.2602 30.2 16.7202 29.67C16.5202 29.47 16.3202 29.26 16.1202 29.06C15.4602 28.39 14.7902 27.73 14.0902 27.1C11.0802 24.37 7.60022 22.32 3.88022 20.7C2.61022 20.15 0.720224 19.88 0.120224 21.52C-0.419776 22.99 0.840224 24.93 2.18022 25.51V25.49Z" />
      </svg>
   );
};

export default Checkmark;
