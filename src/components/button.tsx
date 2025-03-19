import type { JSX } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    children: React.ReactNode;
}
export default function Button({ props, children }: ButtonProps): JSX.Element {
    return (
        <button typeof="button" type="button" className="w-fit bg-base text-black px-10 py-2 mt-4 rounded-[0_5rem_0_5rem] cursor-pointer hover:bg-opacity-80 transition duration-300 font-EBGaramond">
            {children}
        </button>
    )
}
