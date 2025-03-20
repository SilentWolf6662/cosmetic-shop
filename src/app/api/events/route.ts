// Code for the API events route in src/app/api/events/route.ts:
import { faker, da, Faker } from '@faker-js/faker';
export async function GET() {
    const customFaker = new Faker({ locale: [da] });
    // Generate a list of fake events
    const events = Array.from({ length: 3 }, () => ({
        id: faker.database.mongodbObjectId(),
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        location: `${customFaker.location.streetAddress()}, ${customFaker.location.zipCode()}, ${customFaker.location.city()}`, // Custom Danish location address format from the 'da' locale
        date: customFaker.date.future(),
        image: faker.image.urlPicsumPhotos({ width: 640, height: 480, blur: 0, grayscale: false }),
    }));
    // Return the list of events as a JSON response
    return new Response(JSON.stringify({ events: events }), {
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
