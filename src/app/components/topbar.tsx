'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function TopBar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-fit shadow-md bg-white cursor-default transition-all">
            <div className="h-12 flex justify-between items-center px-4 md:px-8 lg:px-12">
                <p className="font-bold">://</p>
                <div className="flex space-x-2 hidden md:block">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                </div>
                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    MENU
                </div>
            </div>
            <div
                className={`md:hidden flex flex-col justify-evenly transition duration-500 ease-in-out ${
                    open ? 'h-48' : 'h-0 hidden'
                }`}
            >
                <TopBarItem />
                <TopBarItem />
                <TopBarItem />
                <TopBarItem />
            </div>
        </div>
    );
}

function TopBarItem() {
    return (
        <div className="pl-4 hover:pl-8 transition-all h-full flex items-center hover:bg-red-100">
            TopBarItem
        </div>
    );
}
