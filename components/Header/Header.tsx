"use client";

import { UseHeader } from './Header.hook';
import style from './Header.module.scss';

export default function Header() {

    const { provinciasList } = UseHeader();

    return (
        <main className="w-full h-[--heightHeader] bg-slate-200 flex flex-row items-center justify-end px-5 shadow-sm">
            <article className="text-lg font-semibold flex flex-row items-center justify-end gap-5">
                <div className={style.link_container}>
                    <span>Partidos políticos</span>
                    <div className="absolute w-auto top-12 flex flex-col items-start justify-start">
                        <div>Partido Popular (PP)</div>
                        <div>Partido Socialista Obrero Español (PSOE)</div>
                        <div>Ciudadanos (C)</div>
                        <div>Unidas Podemos (UP)</div>
                        <div>Izquierda Unida (IU)</div>
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