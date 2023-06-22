"use client";

import Link from 'next/link';
import { UseHeader } from './Header.hook';
import style from './Header.module.scss';

export default function Header() {

  const { provinciasList, autonomiasList, mediosList } = UseHeader();

  return (
    <main className="w-full h-[--heightHeader] bg-gradient-to-b from-slate-400 to-slate-200 flex flex-row items-center justify-end px-5 shadow-sm sticky top-0 z-10">
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
            <Link href="/organization/Unidas Podemos">
              <span>Unidas Podemos (UP)</span>
            </Link>
            <Link href="/organization/Vox">
              <span>Vox</span>
            </Link>
            <Link href="/organization/EH Bildu">
              <span>EH Bildu</span>
            </Link>
            <Link href="/organization/Caminando Juntos">
              <span>Caminando Juntos</span>
            </Link>
            <Link href="/organization/Todos">
              <span>Todos</span>
            </Link>
          </div>
        </div>
        <div className={style.link_container}>
          <span>Medios</span>
          <div className="absolute w-auto top-12 flex flex-col items-start justify-start">
            {mediosList.map((medio, index) => {
              return (
                <div key={`${medio}-${index}`}>{medio}</div>
              )
            })}
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
          <span>Alcaldías</span>
          <div className="absolute w-auto top-12 flex flex-col items-start justify-start">
            <div>Madrid</div>
            <div>Valencia</div>
            <div>Tabera de Abajo</div>
          </div>
        </div>
      </article>
    </main>
  )
}