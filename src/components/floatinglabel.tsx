import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelClassName?: string;
}

interface FloatingLabelTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    labelClassName?: string;
}

export function FloatingLabelInput({ label, labelClassName, className, ...props }: FloatingLabelInputProps) {
    return (
        <div className="relative w-full">
            <input
                {...props}
                id={props.id || label}
                placeholder=" " // Required for floating effect
                className={cn(
                    "peer block w-full bg-white py-3.5 px-5 text-black font-medium focus:ring-0 focus:border-0 focus:outline-none",
                    className
                )}
            />
            <label
                htmlFor={props.id || label}
                className={cn(
                    "absolute left-3 -top-5 text-black max-w-full font-medium text-sm transition-all tracking-[4px] uppercase peer-placeholder-shown:uppercase peer-placeholder-shown:tracking-[4px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:font-medium peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black",
                    labelClassName
                )}
            >
                {label}
            </label>
        </div>
    );
}

export function FloatingLabelTextarea({ label, labelClassName, className, ...props }: FloatingLabelTextAreaProps) {
    return (
        <div className="relative w-full">
            <textarea
                {...props}
                id={props.id || label}
                placeholder=" " // Required for floating effect
                className={cn(
                    "peer block w-full bg-white py-3.5 px-5 text-black font-medium focus:ring-0 focus:border-0 focus:outline-none",
                    className
                )}
            />
            <label
                htmlFor={props.id || label}
                className={cn(
                    "absolute  left-3 -top-5 text-black max-w-full font-medium text-sm transition-all tracking-[4px] uppercase peer-placeholder-shown:uppercase peer-placeholder-shown:tracking-[4px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:font-medium peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black",
                    labelClassName
                )}
            >
                {label}
            </label>
        </div>
    );
}
