export default function Input({ label }: { label: string }) {
    return (
        <div>
            <div className="text-sm font-semibold mb-1">{label}</div>
            <input className="w-full border rounded border-gray-300 px-1 focus:ring-1 focus:ring-primary focus:outline-none" />
        </div>
    );
}
