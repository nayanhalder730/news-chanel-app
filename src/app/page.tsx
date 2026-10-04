import AllNewsData from "./component/AllNewsData";
import MainNews from "./component/MainNews";
import MostReadSection from "./component/MostReadSection";

const allNewsdata = async () => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections",
  );
  const data = await response.json();
  return data.data;
};

export default async function Home() {
  const news = await allNewsdata();
  const newsData = await news[0].articles;

  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-3 gap-4  0">
          <div className="col-span-2 p-2 rounded shadow">
            <MainNews newsData={newsData} />
          </div>
          <div className="bg-gray-200 p-2 rounded shadow">
            <MostReadSection></MostReadSection>
          </div>
        </div>
      </div>
      <AllNewsData></AllNewsData>
    </>
  );
}
