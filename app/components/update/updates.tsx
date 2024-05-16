import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface UpdatesProps {
    updates: Array<{
        title: string;
        desc: string;
        postLink: string;
        date: string;
    }>;
}

export default function Updates(props: UpdatesProps) {
    const { updates } = props;
    return (
        <div className="max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="py-16 sm:text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-slate-200">Latest Updates
                    <p className="text-lg">All the latest Headshot Interactive and Abandoned news.</p>
                </h1>
            </header>

            <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
                <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-800 sm:block"></div>
                <div className="space-y-16">
                    {updates.map((update) => (
                        <article className="relative group" key={update.title}>
                            {/* Circle and bar */}
                            <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-800/50"></div>
                            <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
                                <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-slate-900" stroke-width="2"></circle>
                            </svg>
                            {/* Text */}
                            <div className="relative">
                                {/* Title */}
                                <h3 className="text-xl font-semibold tracking-tight text-slate-200 pt-8 lg:pt-0">{update.title}</h3>
                                {/* Description */}
                                <div className="mt-2 mb-4 line-clamp-5 md:line-clamp-2 text-slate-400">
                                    <p>{update.desc}</p>
                                </div>
                                {/* Date */}
                                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                                        <p>{update.date}</p>
                                    </dd>
                                </dl>
                            </div>
                            {/* Read More */}
                            <Link className="flex items-center text-sm text-red-500 font-medium" href={update.postLink}>
                                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                                <span className="relative">Read more</span>
                                <svg className="relative mt-px overflow-visible ml-2.5 text-red-500" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
