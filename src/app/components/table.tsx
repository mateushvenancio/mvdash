import Image from 'next/image';

type TableType = {
    expand?: number[];
    header: string[];
    rows: React.ReactNode[][];
};

export default function Table({ data }: { data: TableType }) {
    return (
        <table className="cursor-default table-fixed w-full rounded-lg">
            <thead className="bg-gray-200">
                <tr className="text-left">
                    <Header name="Title" classes="" />
                    <Header name="Description" />
                    <Header name="Link" />
                    <Header name="Icon" />
                    <Header name="Delete" classes="w-16" />
                    {/* <th className="py-2 font-semibold">Title</th>
                    <th className="w-20 py-2 font-semibold">Idade</th>
                    <th className="py-2 0 font-semibold">Descrição</th> */}
                </tr>
            </thead>
            <tbody>
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                {/* <tr className="[&>*]:px-2">
                    <td>0</td>
                    <td>Mateus</td>
                    <td>26</td>
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore, consectetur?
                    </td>
                </tr>
                <tr className="[&>*]:px-2 hover:bg-gray-200">
                    <td>0</td>
                    <td>Mateus</td>
                    <td>26</td>
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore, consectetur?
                    </td>
                </tr>
                <tr className="[&>*]:px-2">
                    <td>0</td>
                    <td>Mateus</td>
                    <td>26</td>
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore, consectetur?
                    </td>
                </tr> */}
            </tbody>
        </table>
    );
}

function Row() {
    return (
        <tr className="[&>*]:px-2 hover:bg-gray-100">
            <td>0</td>
            <td>Mateus</td>
            <td>26</td>
            <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, consectetur?
            </td>
            <td className="text-center">
                <Image
                    src="/delete-icon.svg"
                    alt="Delete"
                    width={12}
                    height={12}
                />
            </td>
        </tr>
    );
}

function Header({ name, classes }: { name: string; classes?: string }) {
    return <th className={'py-2 px-2 font-semibold ' + classes}>{name}</th>;
}
