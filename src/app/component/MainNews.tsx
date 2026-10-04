import Image from "next/image";

interface IMainNewsData {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

const MainNews = ({ newsData }:{newsData:IMainNewsData[]}) => {
  const [firstData, ...otherNews] = newsData;

  if (!firstData) {
    return <div>No news available</div>;
  }


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">

      {/* First / Main News */}
      <div className="card bg-base-100 w-full">
        <figure>
          <Image
            src={firstData.imageUrl}
            alt={firstData.imageAlt}
            width={600}
            height={400}
            className="w-full h-[350px] object-cover"
          />
        </figure>

        <div className="card-body">
          <p className="text-lg font-bold text-red-600">
            {firstData.category}
          </p>

          <h2 className="card-title text-2xl">
            {firstData.title}
          </h2>

          <p className="text-gray-600">
            {firstData.description}
          </p>
        </div>
      </div>

      {/* Other News */}
      <div className="flex flex-col gap-4 w-full">
        {otherNews.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 border border-gray-200 w-full"
          >
            <div className="card-body">
              <p className="text-sm font-semibold text-red-600">
                {item.category}
              </p>

              <h2 className="text-lg font-bold">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MainNews;