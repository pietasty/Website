import Link from 'next/link'

const navItems = {
    '/': {
        name: 'Home',
    },
    '/food': {
        name: 'Food',
    },
    '/plane': {
        name: 'Planes list',
    },
}

export function Navbar() {
    return (
        <div className="tracking-tight bg-light-warm rounded-lg">
            <nav
                className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                id="nav"
            >
                <div className="flex flex-row space-x-0 pr-10">
                    {Object.entries(navItems).map(([path, { name }]) => {
                        return (
                            <Link
                                key={path}
                                href={path}
                                className="transition-all hover:text-blue-600 flex align-middle relative py-1 px-2 m-1 font-semibold"
                            >
                                {name}
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}