export default function Card({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={'p-4 bg-white rounded-2xl shadow-md ' + className}>
            {children}
        </div>
    );
}
