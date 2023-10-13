type InputType = {
    label: string;
    className?: string;
};

export default function Input({ label, className }: InputType) {
    return (
        <div className={className}>
            <div className="text-sm font-semibold mb-1">{label}</div>
            <input className="w-full border rounded border-gray-300 px-1 focus:ring-1 focus:ring-primary focus:outline-none" />
        </div>
    );
}
