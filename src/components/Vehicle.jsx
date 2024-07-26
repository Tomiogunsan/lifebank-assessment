import { useEffect, useState } from "react"
import { GETVEHICLES } from "../config/apiUrl";
import Pagination from "./Pagination";




const Vechicle = () => {
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    const itemsPerPage = 5;


   
    useEffect(() => {
       const fetchVehicleData = async () => {
         setLoading(true);
         setError(null);
         try {
           const res = await fetch(GETVEHICLES);
           console.log(res);
           if (!res.ok) {
             throw new Error("Something went wrong");
           }
           const data = await res.json();
           console.log(data.results.length);
           setVehicle(data.results);
           setTotalPages(data.results.length)
         } catch (error) {
           console.log("error", error);
           setError("Something went wrong");
           
         }finally{
          setLoading(false)
         }
       };

    fetchVehicleData()
    }, [currentPage])


    if (loading) {
      return <div>Loading...</div>
    }

     if (error) {
       return <div>Error: {error}</div>;
     }

     

      const startIndex = (currentPage - 1) * itemsPerPage;
      const currentItems = vehicle.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className=" p-4  w-full">
      {currentItems?.map((data, index) => {
        return (
          <ul key={index} className="w-full">
            <li className="p-6 border-[1px] border-[#ccc] text-xl">{data.name}</li>
          </ul>
        );
      })}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Vechicle