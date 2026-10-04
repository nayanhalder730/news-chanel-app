import React from "react";
import NewsCard from "../component/NewsCard";
import { Article, CurationData } from "../type/type";

const AllNewsData = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  const newsData: CurationData[] = data.data;

  return (
    <div className="space-y-8">
      {newsData.map((categoryWiseNews: CurationData) => (

        <section key={categoryWiseNews.curationId} className="my-6 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 border-b-2 border-red-600 pb-1 inline-block">
            {categoryWiseNews.title}
          </h1>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            {categoryWiseNews.articles?.map((news: Article) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AllNewsData;