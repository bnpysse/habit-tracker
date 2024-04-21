import Elysia from "elysia";
import { html } from "@elysiajs/html";
import { Database } from "bun:sqlite";
import { migrate, getMigrations } from "bun-sqlite-migrations";


const  db = new Database(":memory:");
migrate(db, getMigrations("./migrations"));

const listAllHabits = (db) => {
    return db
        .query("SELECT * FROM habits order by id desc")
        .all();
}

const HabitComponent = ({ habit }) => {
    return <div>
        <div class={'border border-gray-700 rounded-ms mb-5 p-5'}>
            <h1 class={'font-bold'}>{habit.title}</h1>
            <p class={'text-sm text-gray-500'}>{habit.description}</p>
            <div class={'flex gap-1 text-sm mt-5'}>
                <button class={'hover:text-sky-700'}>Edit</button>
                <span>·</span>
                <button class={'hover:text-red-700'}
                        hx-confirm={'Are your sure?'}
                        hx-delete={`/habits/${habit.id}`}>Delete</button>
                {/*<button class={'bg-green-500 text-white px-3 py-1 rounded-md'} hx-post={`/habits/${habit.id}/done`}>Edit</button>*/}
                {/*<button class={'bg-red-500 text-white px-3 py-1 rounded-md'} hx-post={`/habits/${habit.id}/delete`}>Delete</button>*/}
            </div>

        </div>
    </div>;
}

const HabitsPage = () => {
    const habits = listAllHabits(db);
    return <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-x1 px-4 py-10">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
            bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-10">
                Simple Habit Tracker
            </h1>
            {habits.map(habit => <HabitComponent habit={habit} />)}
        </div>
    </section>;
};
const rootHandler = () => {
    return <html lang='en'>
        <head>
            <title>Habits Tracker</title>
            <script src="https://cdn.tailwindcss.com?plugins=forms"></script>
            <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>
        </head>
    <body>
    <HabitsPage />
    </body>
    </html>
}
const app = new Elysia()
    .use(html())
    .get("/", rootHandler).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
