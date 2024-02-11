import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BLogsDetails = () => {
  const [data, setData] = useState({});
  const id = useParams().id;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3003/api/blog/get/${id}`);
        console.log(res.data);
        console.log(data);
        if (res.data) {
          setData(res.data);
        } else {
          console.log(`Blog Not Found`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <>
      {data && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover object-center"
            src={data.img}
            alt={data.title}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
            <p className="text-gray-600">{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BLogsDetails;
