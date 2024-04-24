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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-max m-auto mt-4 max-h-80 overflow-scroll text-left">
            {team.map((member) => (
                <div className="flex items-center border-2 rounded-lg" key="">
                    <Image
                        src={member.src}
                        width={128}
                        height={128}
                        className="h-8 w-8 md:h-12 md:w-12 !rounded-full object-cover m-2"
                        alt="unknown"
                    />
                    <div className="font-medium ml-2 mr-4 text-xs md:text-sm">
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{member.name}</div>
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">{member.description}</div>
                    </div>
                </div>
            ))}
        </div >
    );
}