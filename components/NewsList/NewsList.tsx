import 'dayjs/locale/es';
import dayjs from 'dayjs';
import Link from "next/link";
import { newsDTO } from '@/types/news.type';

export default function NewList({newsList}: {newsList: newsDTO[]}) {

  return (
    <div className="w-full flex flex-row flex-wrap gap-[5%] gap-y-16 px-[5%] pb-14">
      {newsList.map((news, index) => {
        const date = dayjs(news.date, "YYYY-MM-DD");
        return (
          <div key={index + 'new'} className="flex flex-col justify-between w-[30%] shadow-lg rounded-lg border-2 px-4 py-4 gap-6  bg-slate-100">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row flex-wrap gap-3">
                {news.fakeNew !== undefined &&
                  <div className="mb-2 px-3 py-1 rounded-lg bg-red-400 flex flex-row items-center gap-3">
                    <span className=" text-lg text-center font-semibold">BULO</span>
                    <Link href={`/new/${news.fakeNew}`} className="text-center">
                      <span className="underline font-semibold">LINK A LA NOTICIA</span>
                    </Link>
                  </div>
                }
                {news.organizations.map((organization, index2) => (
                  <Link href={`/organization/${organization}`} key={`${organization}-${index2}`}>
                    <span className={`px-3 py-1 rounded-lg cursor-pointer text-sm
                      ${organization === 'Todos' ? ' bg-slate-500 text-white font-semibold' : ''}
                      ${organization === 'Partido Popular' ? 'bg-blue-400 text-white font-semibold' : ''}
                      ${organization === 'Partido Socialista Obrero Español' ? 'bg-red-500 font-semibold text-white' : ''}
                      ${organization === 'Vox' ? 'bg-green-400 font-semibold' : ''}
                      ${organization === 'Unidas Podemos' ? 'bg-purple-400 text-white font-semibold' : ''}
                      ${organization === 'Movimiento Sumar' ? 'bg-slate-200 font-semibold text-red-400' : ''}
                      ${organization === 'Caminando Juntos' ? 'bg-red-500 font-bold text-blue-700' : ''}
                      `} key={`${organization}-${index2}`}>
                      {organization}
                    </span>
                  </Link>
                ))}
              </div>
              {news.autonomia &&
                <div>
                  <span className="text-sm cursor-pointer font-semibold bg-slate-300 px-3 py-1 rounded-lg">{news.autonomia}</span>
                </div>
              }
              {news.provincia &&
                <div>
                  <span className="text-sm cursor-pointer font-semibold bg-slate-300 px-3 py-1 rounded-lg">{news.provincia}</span>
                </div>
              }
              {news.municipio &&
                <div>
                  <span className="text-sm cursor-pointer font-semibold bg-slate-300 px-3 py-1 rounded-lg">Ayuntamiento de {news.municipio}</span>
                </div>
              }
              {news.national &&
                <div>
                  <span className="text-sm cursor-pointer font-semibold bg-slate-300 px-3 py-1 rounded-lg">Nacional</span>
                </div>
              }
              <span className=" text-xl font-bold">{news.title}</span>
              <div className="flex flex-row items-center gap-2">
                <span className=" opacity-70 text-sm">{date.format("DD/MM/YYYY").toString()}</span>
                <span className="opacity-70 text-sm"> - ({news.media})</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-1">
              {news.tags.length > 0 &&
                <div className="flex flex-row gap-3 flex-wrap">
                  {news.tags.map((tag, index3) => (
                    <span key={`${tag}-${index3}`} className=" text-xs cursor-pointer ">#{tag}</span>
                  ))}
                </div>
              }
              <Link href={news.link} target="_blank">
                <span className=" border-2 font-semibold text-slate-400 px-3 py-1 bg-white">Leer la noticia</span>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}