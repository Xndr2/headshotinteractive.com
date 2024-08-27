import Image from 'next/image';
import React from 'react';

interface TesterProps {
    testers: Array<{
        src: string;
        name: string;
    }>;
}

export default function Testers(props: TesterProps) {
    const { testers } = props;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left px-6 my-6">
            {testers.map((tester) => (
                <div className="flex flex-row text-left items-center border-2 rounded-lg md:px-1" key={tester.src}>
                    <Image
                        src={tester.src}
                        width={128}
                        height={128}
                        className="md:h-16 md:w-16 h-8 w-8 !rounded-full object-cover m-2"
                        alt={"Profile picture of: " + tester.name}
                    />
                    {/* text on pc */}
                    <div className="font-medium mx-2">
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] md:text-xl text-lg">{tester.name}</div>
                        {/* <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-md">Tester</div> */}
                    </div>
                </div>
            ))}
        </div >
    );
}