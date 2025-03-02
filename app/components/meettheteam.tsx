import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface TeamProps {
    team: Array<{
        src: string;
        name: string;
        roles: Array<{
            role: string;
        }>;
        links: Array<{
            name: string;
            link: string;
        }>;
    }>;
};

export default function MeetTheTeam(props: TeamProps) {
    const { team } = props;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-8 mx-auto px-2">
            {/* most top border */}
            {/* <div className='border-b-2 my-3'></div> */}
            {/* loop over all members */}
            {team.map((member) => (
                <div key={member.src} className='flex flex-col border rounded-md p-4'>
                    <div className='flex flex-col flex-grow sm:flex-row gap-2 sm:gap-8 justify-between'>
                        {/* name and pfp */}
                        <div className='flex items-center gap-2 sm:w-1/2'>
                            <Image
                                src={member.src}
                                width={128}
                                height={128}
                                className="sm:h-12 sm:w-12 h-10 w-10 !rounded-full object-cover my-4"
                                alt={"Profile picture of: " + member.name}
                            />
                            <div className='text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                                {member.name}
                            </div>
                        </div>
                        {/* roles */}
                        <div className='text-sm sm:w-1/2 flex flex-col gap-1 justify-center text-left drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                            {member.roles.map((role) => (
                                <div key={role.role} className='list-item sm:list-none ml-4 sm:ml-0'>{role.role}</div>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <p className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-left text-sm'>Contact:</p>
                        <div className='flex flex-col sm:flex-row sm:gap-4 gap-2'>
                            {member.links.map((link) => (
                                <Link key={link.link} className='flex flex-grow border-2 rounded-md bg-opacity-10 hover:bg-opacity-25 bg-black' href={link.link} target='_blank'>
                                    <div className='p-1 pl-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>{link.name}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
}