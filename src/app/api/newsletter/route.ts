// Code for the API newsletter route in src/app/api/newsletter/route.ts:
export async function GET() {
    return new Response(JSON.stringify({ message: "Welcome to the Newsletter API" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function POST(request: Request) {
    try {
        // Parse the JSON data sent in the POST request body
        const data = await request.json();
        const { email } = data; // Extract email from the body

        // Here, you can implement the logic for adding the email to the newsletter list,
        // sending a confirmation email, etc.

        // Simulate a successful response
        return new Response(
            JSON.stringify({ message: `Subscription successful for ${email}` }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error handling POST request:", error);
        return new Response(
            JSON.stringify({ message: 'Error processing subscription' }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
