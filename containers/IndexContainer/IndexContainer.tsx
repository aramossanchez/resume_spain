"use client";

import Link from "next/link";
import { UseIndexContainer } from "./IndexContainer.hook";

export default function IndexContainer() {

    const { newsList } = UseIndexContainer();

    return (
        <>
            <h1 className="font-bold text-4xl w-full text-center my-8">Todas las noticias</h1>
            <div className="w-full flex flex-row flex-wrap gap-[5%] gap-y-16 px-[5%]">
                {newsList.map((news, index) => (
                    <div key={index + 'new'} className="flex flex-col w-[30%] gap-4 shadow-lg rounded-lg border-2 px-4 py-4">
                        <div className="flex flex-row flex-wrap gap-3">
                            {news.fakeNew.state === 'yes' &&
                                <div className="mb-2 px-5 py-2 rounded-lg bg-red-400 flex flex-row items-center gap-3">
                                    <span className=" text-lg text-center font-semibold">BULO</span>
                                    <Link href={''} className="text-center">
                                        <span className="underline font-semibold">LINK A LA NOTICIA</span>
                                    </Link>
                                </div>
                            }
                            {news.organizations.map((organization, index2) => (
                                <span className={`mb-2 px-5 py-2 rounded-lg cursor-pointer
                                ${organization === 'Partido Popular' ? 'bg-blue-400 text-white font-semibold' : ''}
                                ${organization === 'Partido Socialista Obrero Español' ? 'bg-red-300 font-semibold' : ''}
                                ${organization === 'Vox' ? 'bg-green-400 font-semibold' : ''}
                                `} key={`${organization}-${index2}`}>
                                    {organization}
                                </span>
                            ))}
                        </div>
                        <span className=" text-2xl font-semibold">{news.title}</span>
                        <span className=" opacity-50 text-sm">{news.date}</span>
                        {!news.municipio &&
                            <div>
                                <span className="cursor-pointer font-semibold bg-slate-200 px-5 py-2 rounded-lg">{news.provincia}</span>
                            </div>
                        }
                        {news.municipio &&
                            <div>
                                <span className="cursor-pointer font-semibold bg-slate-200 px-5 py-2 rounded-lg">Ayuntamiento de {news.municipio}</span>
                            </div>
                        }
                        <div className="flex flex-col items-start mt-4 gap-2">
                            <Link href={news.link} target="_blank">
                                <span className=" text-blue-400 underline font-semibold text-lg">Link a la noticia</span>
                            </Link>
                            <span>({news.media})</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}