import { TopFoods } from "./components/topFoods"

export default function HomePage() {
    return (
        <section className="mt-5 p-2 rounded-lg shadow bg-light-warm flex flex-col items-center">
            <TopFoods />
        </section>
    )
}