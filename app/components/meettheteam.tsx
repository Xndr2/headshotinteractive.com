import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


interface TeamProps {
    team: Array<{
        src: string;
        name: string;
        description?: string;
    }>;
}

export default function MeetTheTeam(props: TeamProps) {
    const { team } = props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-max m-auto mt-4 max-h-80 overflow-scroll md:overflow-visible text-left">
            {team.map((member) => (
                <div className="flex flex-col md:flex-row text-center md:text-left items-center border-2 rounded-lg" key={member.src}>
                    <Image
                        src={member.src}
                        width={128}
                        height={128}
                        className="h-16 w-16 !rounded-full object-cover m-2"
                        alt="unknown"
                    />
                    <div className="font-medium mx-2">
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-xl">{member.name}</div>
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-md">{member.description}</div>
                    </div>
                </div>
            ))}
        </div >
    );
}