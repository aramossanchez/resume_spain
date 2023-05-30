"use client";

import Link from "next/link";
import { UseIndexContainer } from "./IndexContainer.hook";

export default function IndexContainer() {

    const { newsList } = UseIndexContainer();

    return (
        <>
            <h1 className="font-bold text-4xl w-full text-center my-8">Todas las noticias</h1>
            <div className="w-full flex flex-row flex-wrap gap-[5%] gap-y-16 px-[5%] pb-14">
                {newsList.map((news, index) => (
                    <div key={index + 'new'} className="flex flex-col justify-between w-[30%] shadow-lg rounded-lg border-2 px-4 py-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row flex-wrap gap-3">
                                {news.fakeNew !== undefined &&
                                    <div className="mb-2 px-5 py-2 rounded-lg bg-red-400 flex flex-row items-center gap-3">
                                        <span className=" text-lg text-center font-semibold">BULO</span>
                                        <Link href={`/new/${news.fakeNew}`} className="text-center">
                                            <span className="underline font-semibold">LINK A LA NOTICIA</span>
                                        </Link>
                                    </div>
                                }
                                {news.organizations.map((organization, index2) => (
                                    <span className={`mb-2 px-5 py-2 rounded-lg cursor-pointer
                                ${organization === 'Todos' ? ' bg-slate-500 text-white font-semibold' : ''}
                                ${organization === 'Partido Popular' ? 'bg-blue-400 text-white font-semibold' : ''}
                                ${organization === 'Partido Socialista Obrero Español' ? 'bg-red-500 font-semibold text-white' : ''}
                                ${organization === 'Vox' ? 'bg-green-400 font-semibold' : ''}
                                `} key={`${organization}-${index2}`}>
                                        {organization}
                                    </span>
                                ))}
                            </div>
                            <span className=" text-2xl font-semibold">{news.title}</span>
                            <span className=" opacity-50 text-sm">{news.date}</span>
                            {news.provincia &&
                                <div>
                                    <span className="cursor-pointer font-semibold bg-slate-200 px-5 py-2 rounded-lg">{news.provincia}</span>
                                </div>
                            }
                            {news.municipio &&
                                <div>
                                    <span className="cursor-pointer font-semibold bg-slate-200 px-5 py-2 rounded-lg">Ayuntamiento de {news.municipio}</span>
                                </div>
                            }
                            {news.national &&
                                <div>
                                    <span className="cursor-pointer font-semibold bg-slate-200 px-5 py-2 rounded-lg">Nacional</span>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col items-start mt-4 gap-2">
                                <Link href={news.link} target="_blank">
                                    <span className=" text-blue-400 underline font-semibold text-lg">Link a la noticia</span>
                                </Link>
                                <span>({news.media})</span>
                            </div>
                            {news.tags.length > 0 &&
                                <div className="flex flex-row gap-3 flex-wrap">
                                    {news.tags.map((tag, index3) => (
                                        <span key={`${tag}-${index3}`} className="cursor-pointer bg-black text-white py-1 px-3 rounded-md">#{tag}</span>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}