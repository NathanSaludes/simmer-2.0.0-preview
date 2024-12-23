import { CustomSVG } from "@/lib/types";

const ChevronRight: CustomSVG = (props) => {
   return (
      <svg
         width="12"
         height="22"
         viewBox="0 0 12 22"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M0.75 18.8123L0.749999 3.3285C0.749999 1.05305 2.72923 -0.185652 4.04199 1.26848L10.8077 8.75456C11.757 9.80476 11.7772 11.7301 10.8582 12.8207L4.10258 20.8185C2.79992 22.3534 0.75 21.1281 0.75 18.8123Z"
            stroke="black"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default ChevronRight;
