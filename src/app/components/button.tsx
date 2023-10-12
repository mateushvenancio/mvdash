export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="px-3 py-1 bg-primary shadow-md rounded-md text-white hover:shadow-lg transition-all">
            {children}
        </button>
    );
}
