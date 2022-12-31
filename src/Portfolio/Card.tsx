import skills from '../Models/skills';
import images from '../assets';

interface CodeCardProps {
    name: string;
    // skills: skills[];
    blurb: string;
    projectImageSlug: string;
}

export default function Card({ name, blurb, projectImageSlug }: CodeCardProps) {
    return (
        // h-[662px]
        <div className="ml-16 mr-16 mb-5 flex flex-row items-center rounded-2xl bg-black pb-16 pt-16 ">
            <img
                src={images.get(projectImageSlug)}
                alt={projectImageSlug}
                className="ml-[92px] w-64 bg-white"
            />

            <div className="flex h-full grow flex-col items-center ">
                <div className="font-sans text-5xl font-medium text-white">{name}</div>
                <p className="ml-7 mr-7 mt-14 w-[600px] text-center font-sans text-4xl font-medium text-white">
                    {blurb}
                </p>
            </div>
            <div className="mr-[34px] w-[320px] bg-white">SKILLS</div>
        </div>
    );
}
