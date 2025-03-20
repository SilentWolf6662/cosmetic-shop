import { cn } from "@/lib/utils";
import type { JSX } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    children?: React.ReactNode;
}
export default function Button({ text, children, className, ...props }: ButtonProps): JSX.Element {
    return (
        <button typeof="button" type="button" className={cn("w-fit bg-base text-black px-10 py-2 mt-4 rounded-[0_5rem_0_5rem] cursor-pointer hover:bg-opacity-80 transition duration-300 font-EBGaramond", className)} {...props}>
            {!text && children}
            {text && <span className="font-bold">{text}</span>}
        </button>
    )
}
