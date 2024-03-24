import Card from "@/components/jobCard";
import data from './dummyData/data.json';
import Link from "next/link";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
      
      <div className="flex justify-between w-mi">
        <div className="flex-col items-left space-y-1">
          <p className="text-4xl text-mi font-black">Opportunieties</p>
          <p className="text-gray-500 mt-4 text-base">Showing 73 results</p>
        </div>
        <div className="flex items-center">
          <p className="text-mi-gray text-base">Sort by:</p>
          <select className="ml-2 border-white text-base font-medium">
            <option>Most relevant</option>
            <option>Most recent</option>
          </select>
        </div>
      </div>
      <div className="flex-col space-y-9">
      {data.map((job, index) => ( 
                                <div>  
                                  <Link href={`/details/${index}`} key={index}>
                                    <Card 
                                      title={job.title} 
                                      description={job.description} 
                                      position={job.position} tags={job.categories} company={job.company} 
                                      address={job.address} avatar={job.imageUrl}></Card>
                                  </Link>
                                  </div>
                                ))}
                                  
      </div>
    </main>
  );
}
