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
        <div className="grid grid-cols-1 md:grid-cols-2 w-full px-10 md:w-max gap-2 m-auto my-4 mx-4 md:mx-0 overflow-scroll md:overflow-visible text-left">
            {testers.map((tester) => (
                <div className="flex flex-row text-left items-center border-2 rounded-lg md:px-1 md:pr-20" key={tester.src}>
                    <Image
                        src={tester.src}
                        width={128}
                        height={128}
                        className="h-16 w-16 !rounded-full object-cover m-2"
                        alt={"Profile picture of: " + tester.name}
                    />
                    {/* text on pc */}
                    <div className="font-medium mx-2">
                        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-xl">{tester.name}</div>
                        {/* <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-md">Tester</div> */}
                    </div>
                </div>
            ))}
        </div >
    );
}