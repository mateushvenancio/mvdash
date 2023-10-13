import Button from '../components/button';
import Card from '../components/card';
import Dropdown from '../components/dropdown';
import Input from '../components/input';
import Title from '../components/title';

export default function Projects() {
    return (
        <div className="space-y-4">
            <div className="flex flex-row space-x-4 [&>*]:grow">
                <NewProjectForm />
                <IconsForm />
            </div>
            <ProjectsTable />
        </div>
    );
}

function NewProjectForm() {
    return (
        <Card>
            <Title title="New project" />
            <div className="my-2">
                <Input className="w-full" label="Title" />
                <div className="flex gap-2 mt-2">
                    <Input className="w-full" label="Description" />
                    <Input className="w-full" label="Link" />
                    {/* <Input className="w-full" label="Icon" /> */}
                    <Dropdown />
                </div>
            </div>
            <Button>Save</Button>
        </Card>
    );
}

function IconsForm() {
    return (
        <Card>
            <Title title="Icons" />
            <div className="flex flex-row space-x-2">
                <div className="space-y-2 mt-2">
                    <Input label="Name" />
                    <Input label="Path" />
                    <Button>Save</Button>
                </div>
                <div className="h-40 overflow-y-auto flex flex-col flex-grow">
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                    <IconListTile />
                </div>
            </div>
        </Card>
    );
}

function IconListTile() {
    return (
        <div className="flex space-x-2 py-1 hover:bg-gray-100 cursor-default">
            <div>1</div>
            <div className="grow">Flutter</div>
            <div className="truncate max-w-xs">
                http://github.com/jhfhgfhgfjhgfjhghbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhbfjghfjhgfjhgfjhgf.png
            </div>
            <div>D</div>
        </div>
    );
}

function ProjectsTable() {
    return (
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
    );
}
