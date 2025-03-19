export default async function Home() {
    try {
        const response = await fetch("https://b45.dk/umbraco/api/tenancy/GetAllTenancies", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {data.map((tenancy) => (
                    <div key={tenancy.ID} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-all">
                        {/* Title */}
                        <h2 className="text-xl font-semibold text-blue-800">{tenancy.Titel}</h2>

                        {/* Area Info */}
                        <p className="text-gray-700">{tenancy.AreaName}</p>
                        <p className="text-gray-500">{tenancy.City}, {tenancy.ZipCode}</p>

                        {/* Rent Info */}
                        <p className="mt-2 text-lg font-bold text-green-600">
                            {tenancy.MinRent} - {tenancy.MaxRent} DKK
                        </p>

                        {/* Balcony / Garden Info */}
                        <div className="mt-2 text-sm">
                            {tenancy.Balcony ? <span className="text-green-500">Balcony ✔</span> : <span className="ml-2 text-red-500">Balcony ❌</span>}
                            {tenancy.Garden ? <span className="ml-2 text-green-500">Garden ✔</span> : <span className="ml-2 text-red-500">Garden ❌</span>}
                        </div>

                        {/* Images */}
                        {tenancy.Images && tenancy.Images.length > 0 && (
                            <div className="mt-4">
                                <img src={`https://b45.dk${tenancy.Images[0]}`} alt={tenancy.Name} className="w-full h-48 object-cover rounded-lg" />
                            </div>
                        )}

                        {/* Area Description */}
                        <div className="mt-4 text-sm text-gray-600">
                            <div dangerouslySetInnerHTML={{ __html: tenancy.AreaTekstShort }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error(error);
        return <p className="text-red-500">Failed to load data.</p>;
    }
}
