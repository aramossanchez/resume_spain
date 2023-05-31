"use client";

import Link from 'next/link';
import { UseHeader } from './Header.hook';
import style from './Header.module.scss';

export default function Header() {

    const { provinciasList, autonomiasList } = UseHeader();

    return (
        <main className="w-full h-[--heightHeader] bg-slate-200 flex flex-row items-center justify-end px-5 shadow-sm">
            <article className="text-lg font-semibold flex flex-row items-center justify-end gap-5">
                <div className={style.link_container}>
                    <span>Partidos políticos</span>
                    <div className="absolute w-auto top-12 flex flex-col items-start justify-start">
                        <Link href="/organization/Partido Popular">
                            <span>Partido Popular (PP)</span>
                        </Link>
                        <Link href="/organization/Partido Socialista Obrero Español">
                            <span>Partido Socialista Obrero Español (PSOE)</span>
                        </Link>
                        <Link href="/organization/Movimiento Sumar">
                            <span>Movimiento Sumar</span>
                        </Link>
                        <Link href="/organization/Todos">
                            <span>Todos</span>
                        </Link>
                    </div>
                </div>
                <div className={style.link_container}>
                    <span>Medios</span>
                    <div className="absolute w-auto top-12 flex flex-col items-start justify-start">
                        <div>Público</div>
                        <div>elDiario.es</div>
                    </div>
                </div>
                <div className={style.link_container}>
                    <span>Autonomías</span>
                    <div className="absolute w-auto top-12 flex flex-col items-start justify-start font-normal">
                        {autonomiasList.map((autonomia, index) => (
                            <div key={`${autonomia}-${index}`}>{autonomia}</div>
                        ))}
                    </div>
                </div>
                <div className={style.link_container}>
                    <span>Provincias</span>
                    <div className="absolute w-auto top-12 flex flex-col items-start justify-start font-normal">
                        {provinciasList.map((provincia, index) => (
                            <div key={`${provincia}-${index}`}>{provincia}</div>
                        ))}
                    </div>
                </div>
                <div className={style.link_container}>
                    <span>Municipios</span>
                    <div className="absolute w-auto top-12 flex flex-col items-start justify-start">
                        <div>Madrid</div>
                        <div>Valencia</div>
                    </div>
                </div>
            </article>
        </main>
    )
}