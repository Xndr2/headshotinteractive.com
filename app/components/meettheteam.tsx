import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


interface TeamProps {
    team: Array<{
        src: string;
        name: string;
        title: string;
        rank: string;
    }>;
}

export default function MeetTheTeam(props: TeamProps) {
    const { team } = props;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left px-6 my-6">
            {team.map((member) => (
                <div className="flex flex-row text-left items-center border-2 rounded-lg md:px-1" key={member.src}>
                    <Image
                        src={member.src}
                        width={128}
                        height={128}
                        className="md:h-16 md:w-16 h-8 w-8 !rounded-full object-cover m-2"
                        alt={"Profile picture of: " + member.name}
                    />
                    {/* text on pc */}
                    <div className="hidden md:block font-medium mx-2">
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-xl">{member.name}</div>
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-md">{member.title + " | " + member.rank}</div>
                    </div>
                    {/* text on mobile */}
                    <div className="block md:hidden font-medium mx-2 mr-4">
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:text-xl text-lg">{member.name}</div>
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:text-lg text-base">{member.title}</div>
                        {/* <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-md">{member.rank}</div> */}
                    </div>
                </div>
            ))}
        </div >
    );
}