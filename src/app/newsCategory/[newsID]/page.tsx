import NewsCard from "@/app/component/NewsCard";
import { Article, ICategoryResponse } from "@/app/type/type";


const DynamicNewsPage = async ({
  params,
}: {
  params: Promise<{ newsID: string }>;
}) => {
  const { newsID } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${newsID}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const NewsData: ICategoryResponse = await res.json();
  const actualNewsData = NewsData.data;

  return (
    <main className="min-h-screen bg-gray-50/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
  
        <div className="flex items-center space-x-3 mb-8 border-b border-gray-200 pb-3">
          <span className="w-1.5 h-7 bg-red-600 rounded-full inline-block"></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {NewsData.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actualNewsData?.map((news: Article) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

      </div>
    </main>
  );
};

export default DynamicNewsPage;