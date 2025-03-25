async function onNewsletterSubmit(formData: FormData) {
    "use server";
    const email: string = formData.get("email") as string;
    console.log(email);
    // Send user a mail with a confirmation mail
    // Add user to newsletter list
    // Give user some feedback
    const res = await fetch('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    console.log(`Response: ${data.message}`);
    return data;
}
export default function NewsletterSection() {
    return (
        <section className="bg-gray-800 py-8 bg-cover bg-center h-auto text-black flex justify-evenly" style={{ backgroundImage: "url('/newsletterbg.png')" }}>
            <div className="flex flex-col w-1/2 justify-center items-center">
                <p className="font-bold bg-base tracking-[4px] uppercase py-0.5 px-3 text-muted text-sm">
                    Get exclusive rewards
                </p>
                <h1 className="font-bold mb-3.5 text-5xl py-3.5 font-EBGaramond px-6 capitalize text-[#2b3132] tracking-tighter">Subscribe to our newsletter</h1>
            </div>
            <form action={onNewsletterSubmit} className="flex w-1/2 h-auto justify-center items-center">
                <div className="relative mr-5">
                    <input
                        id={"newsletter-email"}
                        type="email"
                        name={"email"}
                        placeholder=" " // Required for floating effect
                        className="peer block w-96 h-12 bg-white py-3.5 px-5 text-black font-medium tracking-[4px] focus:ring-0 focus:border-0 focus:outline-none"
                    />
                    <label
                        htmlFor={"newsletter-email"}
                        className="absolute left-3 -top-5 text-black max-w-full font-medium text-sm transition-all tracking-[4px] uppercase peer-placeholder-shown:uppercase peer-placeholder-shown:tracking-[4px] peer-placeholder-shown:top-3 peer-placeholder-shown:text-black peer-placeholder-shown:font-medium peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black"
                    >
                        Email Address
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-black text-white px-10 py-2 rounded-[0_5rem_0_5rem] cursor-pointer hover:bg-opacity-80 transition duration-300 font-EBGaramond h-12"
                >
                    Subscribe
                </button>
            </form>
        </section>
    );
}
