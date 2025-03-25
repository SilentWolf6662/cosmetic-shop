// Code for the API stats route in src/app/api/stats/route.ts:
import { faker, da, Faker } from '@faker-js/faker';
export async function GET() {
    const danishFaker = new Faker({ locale: da });
    const type = ['phone', 'email', 'openingHours', 'days', 'address'];
    // Generate a list of fake events
    const stats = Array.from({ length: type.length }, (_, index) => ({
        id: index,
        type: type[index],
        data: type[index] === 'phone'
            ? danishFaker.phone.number()
            : type[index] === 'email'
                ? faker.internet.exampleEmail()
                : type[index] === 'openingHours'
                    ? `${danishFaker.number.int({ min: 8, max: 20 })}:00 - ${danishFaker.number.int({ min: 8, max: 20 })}:00`
                    : type[index] === 'days'
                        ? Array.from({ length: 7 }, () => danishFaker.date.weekday())
                        : type[index] === 'address'
                            ? danishFaker.location.streetAddress()
                            : 'N/A', // Default value for other types
    }));
    // Return the list of events as a JSON response
    return new Response(JSON.stringify({ stats: stats }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
