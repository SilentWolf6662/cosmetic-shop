// Code for the API root route (GET /) in src/app/api/route.ts:
export async function GET() {
    return new Response(JSON.stringify({ message: "Welcome to API root" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
