
interface navData {
    "slug":string,
      "title":string,
      "topicId": string | null,
      "url": string,
      "scrapable": boolean,
}
const NavLink = async () => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await response.json();
  const NavLinkData = data.data;

  const actualData=NavLinkData.filter((item:navData) => item.scrapable === true);



  return <div className="flex items-center justify-center space-x-5  bg-gray-100 py-3 shadow-md">

     <button>হোম</button>
    {
       
        actualData.map((item: navData) => (
            <span key={item.slug} >
                <span className=" mx-2 cursor-pointer  hover:text-red-400">{item.title}</span>
            </span>
            
        ))
    }

  </div>;
};

export default NavLink;