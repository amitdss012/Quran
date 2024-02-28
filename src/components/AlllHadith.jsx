// import React from 'react'
// import useQuran from '../API/quran'
// import { HadithComp } from './HadithComp';

// export const AlllHadith = () => {

//     const {aayat, loading , error} = useQuran("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json");

//     console.log(aayat)

//     if(loading){
//         return <h1>loading.............</h1>
//     }

//   return (
//     <>
//     <div className='allHadith'>
//         {
//             aayat.data.map((hadith) => {
//                 return(
//                     <HadithComp hadithName={hadith} />
//                 )
//             })
//         }
//     </div>
//     </>
//   )
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import { HadithComp } from './HadithComp';

export const AlllHadith = () => {
    const [editions, setEditions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHadithEditions = async () => {
            try {
                const response = await axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json");
                setEditions(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchHadithEditions();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <div className='allHadith'>
            <ul>
                {Object.keys(editions).map(collectionName => (
                    // <li key={collectionName}>{editions[collectionName].name}</li>
                    <HadithComp key={collectionName} hadithName={editions[collectionName].name} />
                ))}
            </ul>
        </div>
    );
};

