"use client";

//TODO - FILTRADO
import 'dayjs/locale/es';
import { UseIndexContainer } from "./IndexContainer.hook";
import NewsList from "../../components/NewsList/NewsList";

export default function IndexContainer() {

  const { newsList } = UseIndexContainer();

  return (
    <>
      <h1 className="font-bold text-4xl w-full text-center my-8">Todas las noticias</h1>
      <NewsList newsList={newsList} />
    </>
  )
}