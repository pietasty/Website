import Image from 'next/image'

export default function NotFound() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center">
                404 - Plane Not Found
            </h1>
            <Image
                src="/error404.jpg"
                width={1200}
                height={900}
                alt="test"
            />
            <p className="mb-4 text-xs">
                Ontario Airport, California (ONT)
            </p>
        </section>
    )
}