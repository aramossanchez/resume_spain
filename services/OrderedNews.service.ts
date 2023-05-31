import { newsDTO } from "@/types/news.type";

export const getOrderedNews = async (news: newsDTO[]) => {
    const orderedNews = news.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return orderedNews;
};