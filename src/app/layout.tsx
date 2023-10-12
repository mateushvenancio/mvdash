import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/navbar';
import TopBar from './components/topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Mateus Venâncio Dashboard',
    description: 'Mateus Venâncio Dashboard',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TopBar />
                <div className="flex flex-row gap-2">
                    <NavBar />
                    <div className="grow hidden lg:block bg-gray-200 p-4 rounded-tl-2xl">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}

// function TopBar() {
//     return (
//         <div className="h-12 flex justify-between items-center mx-6 lg:max-w-[700px] lg:m-auto">
//             <p className="font-bold">://</p>
//             <p className="lg:hidden">MENU</p>
//         </div>
//     );
// }

// function NavBar() {
//     return (
//         <div className="h-screen w-80 p-4 flex flex-col gap-2">
//             ://
//             <NavBarItem active={true} />
//             <NavBarItem active={false} />
//             <NavBarItem active={false} />
//         </div>
//     );
// }

// function NavBarItem({ active }: { active: boolean }) {
//     return (
//         // <div className="py-2 text-sm w-full rounded-full">
//         <div
//             className={`py-2 px-8 text-sm w-full rounded-full hover:px-10 transition-all cursor-default ${
//                 active ? 'bg-primary text-white shadow-lg' : ''
//             }`}
//         >
//             Nav Bar Item
//         </div>
//     );
// }

// bg-primary py-2 px-8 text-white text-sm w-full rounded-full shadow-lg
