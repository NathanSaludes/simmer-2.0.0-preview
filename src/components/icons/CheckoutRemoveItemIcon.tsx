import { CustomSVG } from "@/lib/types";

const CheckoutRemoveItemIcon: CustomSVG = (props) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="19.5" cy="19.5" r="19.5" fill="rgb(var(--simmer-yellow))" />
      <path
        d="M9.66296 31L17.4196 18.8678L10.0607 7.00079H13.4418L19.2428 16.6469L25.3089 7.00079H28.5905L20.9002 19.0004L28.7894 31H25.342L19.077 21.3208L12.9778 31H9.66296Z"
        fill="black"
      />
    </svg>
  );
};

export default CheckoutRemoveItemIcon;
