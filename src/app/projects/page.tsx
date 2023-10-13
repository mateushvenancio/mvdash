import Image from 'next/image';
import Button from '../components/button';
import Card from '../components/card';
import Dropdown from '../components/dropdown';
import Input from '../components/input';
import Title from '../components/title';

export default function Projects() {
    return (
        <div className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4 [&>*]:grow">
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
                <div className="flex flex-col lg:flex-row gap-2 mt-2">
                    <Input className="w-full" label="Description" />
                    <Input className="w-full" label="Link" />
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
            <div className="flex flex-col lg:flex-row gap-2">
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
        <div className="flex space-x-2 py-1 hover:bg-gray-100 px-2 items-center cursor-default">
            <div className="grow ">Flutter</div>
            <div className="truncate max-w-xs">
                http://github.com/jhfhgfhgfjhgfjhghbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhbjhbfjghfjhgfjhgfjhgf.png
            </div>
            <Image
                src="/delete-icon.svg"
                color="red"
                alt="Delete"
                width={13}
                height={13}
            />
        </div>
    );
}

function ProjectsTable() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

function ProjectCard() {
    return (
        <Card className="cursor-default">
            <div className="group relative">
                <div className="flex items-center justify-between gap-1">
                    <div className="font-semibold truncate">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ullam, commodi.
                    </div>
                    {/* <Image src="/menu-icon.svg" alt="" width={12} height={12} />
                     */}
                    <Image
                        src="/delete-icon.svg"
                        alt=""
                        width={12}
                        height={12}
                    />
                </div>
                <div className="text-sm">Description</div>
                <div className="flex gap-2 items-center">
                    <Image src="/menu-icon.svg" alt="" width={12} height={12} />
                    <div className="truncate text-blue-700 underline">
                        https://github.com/mateushvenancio/mvsite-repository
                    </div>
                </div>
                {/* <div className="absolute top-0 left-0 hidden group ">
                    <Image
                        src="/delete-icon.svg"
                        alt=""
                        width={12}
                        height={12}
                    />
                </div> */}
            </div>
        </Card>
    );
}
