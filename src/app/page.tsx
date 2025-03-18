import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-purple-800 text-white py-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Cosmetic Shop</h2>
                    <p className="text-xl mb-8">Explore our premium collection of skincare, makeup, and beauty products.</p>
                    <button type="button" className="bg-white text-purple-600 py-2 px-6 rounded-lg hover:bg-gray-100">
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">Featured Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Mocked Products - Add logic to map real product data */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src="/images/product1.jpg"
                                alt="Product"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h4 className="text-xl font-semibold">Lipstick</h4>
                            <p className="text-gray-500 mb-4">$25.99</p>
                            <button type="button" className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700">
                                Add to Cart
                            </button>
                        </div>
                        {/* Repeat the product divs with real data */}
                    </div>
                </div>
            </section>
        </>
    );
}
