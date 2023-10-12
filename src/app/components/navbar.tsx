'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Projects',
        url: '/projects',
    },
];

export default function NavBar() {
    const path = usePathname();
    return (
        <div className="h-screen w-full lg:w-80 p-4 flex flex-col gap-2 transition-all">
            {items.map((e, i) => (
                <NavBarItem
                    key={i}
                    title={e.title}
                    active={e.url == path}
                    url={e.url}
                />
            ))}
            <div className="grow"></div>
            <div className="py-2 px-8 text-sm rounded-full hover:px-10 transition-all cursor-default">
                Logout
            </div>
        </div>
    );
}

function NavBarItem({
    title,
    active,
    url,
}: {
    title: string;
    active: boolean;
    url: string;
}) {
    return (
        // <div className="py-2 text-sm w-full rounded-full">
        <Link
            href={url}
            className={`py-2 px-8 text-sm rounded-full hover:px-10 transition-all cursor-default ${
                active ? 'bg-primary text-white shadow-xl' : ''
            }`}
        >
            {title}
        </Link>
    );
}
