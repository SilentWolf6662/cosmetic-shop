// Code for the API stats route in src/app/api/stats/route.ts:
import { faker } from '@faker-js/faker';
export async function GET() {
    const statsTitles = ['Clients', 'Outlets', 'Stylists', 'Services'];
    // Generate a list of fake events
    const stats = Array.from({ length: statsTitles.length }, (_, index) => ({
        id: index,
        title: statsTitles[index],
        value: statsTitles[index] === 'Outlets' ? faker.number.int({ min: 10, max: 50 }) : statsTitles[index] === 'Services' ? faker.number.int({ min: 10, max: 100 }) : faker.number.int({ min: 100, max: 1000 }), // Generate a random number between 100 and 1000
        icon: `\\counter${index + 1}.svg`,
    }));
    // Return the list of events as a JSON response
    return new Response(JSON.stringify({ stats: stats }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
