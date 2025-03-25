// Code for the API goals route in src/app/api/goals/route.ts:
export async function GET() {
    const goalsData = [{ number: 1, text: 'Providing clients with quality services!' }, { number: 2, text: '100% satisfaction guranteed' }, { number: 3, text: 'Helping client solve skin problems!' }];
    // Generate a list of fake goals and sort them in number lowest to highest
    const goals = goalsData.sort((a, b) => a.number - b.number).map((goal, index) => ({
        id: `goal-#${index}`,
        number: goal.number < 10 ? `0${goal.number}` : `${goal.number}`,
        text: goal.text,
        link: "/coming-soon"
    }));
    // Return the list of events as a JSON response
    return new Response(JSON.stringify({ goals: goals }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
