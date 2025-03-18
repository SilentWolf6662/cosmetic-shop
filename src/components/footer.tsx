import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 bg-cover bg-center h-auto" style={{ backgroundImage: "url('/footerbg.png')" }}>
            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
                {/* Divider with centered link */}
                <div className="w-full flex items-center justify-center py-4">
                    <div className="w-full border-t border-t-zinc-700 relative">
                        {/* Centered Link */}
                        <Link
                            href="#"
                            className="absolute left-1/2 -top-1/2 transform p-4 bg-orange-300 w-8 h-8 rounded-full flex justify-center items-center text-white hover:bg-orange-400 transition duration-300"
                        >
                            ↑
                        </Link>
                    </div>
                </div>

                {/* Footer text */}
                <p className="text-sm sm:text-lg font-bold text-center py-4">
                    © 2025 Fashion Stylist | All Rights Reserved
                    <span> | Created by </span>
                    <a
                        href="https://github.com/SilentWolf6662"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-300 hover:text-orange-400 transition duration-300"
                    >
                        SilentWolf6662
                    </a>
                </p>
            </div>
        </footer>
    );
}
