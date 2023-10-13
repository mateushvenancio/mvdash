'use client';
import { useState } from 'react';

import Image from 'next/image';

export default function Dropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full relative">
            <div className="text-sm font-semibold mb-1">Mateus</div>
            <div
                onClick={() => setOpen(!open)}
                className="flex space-x-1 border rounded border-gray-300 px-1 focus:ring-1 focus:ring-primary cursor-default"
            >
                <p className="grow">Select...</p>
                <Image src="/down-icon.svg" alt="Down" width={10} height={10} />
            </div>
            <div className={open ? 'block' : 'hidden'}>
                <div className="absolute w-full mt-2 flex flex-col cursor-default shadow-lg bg-white rounded-md h-40 overflow-y-auto">
                    <DropdownItem
                        click={() => setOpen(false)}
                        label="Mateus 0"
                    />
                    <DropdownItem
                        click={() => setOpen(false)}
                        label="Mateus 1"
                    />
                    <DropdownItem
                        click={() => setOpen(false)}
                        label="Mateus 2"
                    />
                    <DropdownItem
                        click={() => setOpen(false)}
                        label="Mateus 3"
                    />
                    <DropdownItem
                        click={() => setOpen(false)}
                        label="Mateus 4"
                    />
                    <DropdownItem
                        click={() => setOpen(false)}
                        label="Mateus 5"
                    />
                    <DropdownItem
                        click={() => setOpen(false)}
                        label="Mateus 6"
                    />
                </div>
            </div>
        </div>
    );
}

function DropdownItem({ label, click }: { label: string; click: Function }) {
    return (
        <div
            className="hover:bg-gray-100 px-2 py-1 text-overflow"
            onClick={() => click()}
        >
            <p>{label}</p>
        </div>
    );
}
