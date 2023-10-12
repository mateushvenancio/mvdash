import Button from '../components/button';
import Card from '../components/card';
import Input from '../components/input';
import Title from '../components/title';

export default function Projects() {
    return (
        <div className="">
            <Card>
                <Title title="New project" />
                <div className="w-3/5 my-4">
                    <Input label="Title" />
                    <div className="flex gap-4 mt-4">
                        <Input label="Description" />
                        <Input label="Link" />
                        <Input label="Icon" />
                    </div>
                </div>
                <Button>Save</Button>
            </Card>
            <div className="mt-4"></div>
            <Card>
                <table className="table-auto w-full text-center cursor-default">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Icon</th>
                            <th>Link</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>This Website</td>
                            <td>It&apos;s this website</td>
                            <td>It&apos;s this website</td>
                            <td>It&apos;s this website</td>
                            <td>It&apos;s this website</td>
                            <td>It&apos;s this website</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
