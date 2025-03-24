import { Faker, da } from '@faker-js/faker';

export async function GET() {
    const danishFaker = new Faker({ locale: da });
    const teamImages = ['/our-team1.png', '/our-team2.png', '/our-team3.png', '/our-team1.png', '/our-team2.png', '/our-team3.png'];

    const team = teamImages.map((image, index) => ({
        id: `team-${index}`,
        title: index === 0 ? 'Makeup Artist' : 'Makeover Artist',
        link: `/team/team-${index}/`,
        name: danishFaker.person.fullName({ sex: 'female' }),
        image,
        socials: [
            { id: `team-${index}-facebook`, link: 'https://www.facebook.com', icon: 'facebook' },
            { id: `team-${index}-x`, link: 'https://www.x.com', icon: 'x' },
            { id: `team-${index}-linkedin`, link: 'https://www.linkedin.com', icon: 'linkedin' },
        ],
    }));

    return new Response(JSON.stringify({ team }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
