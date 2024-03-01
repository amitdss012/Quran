

import { useNavigate, useParams } from 'react-router-dom';
import { HadithComponent } from './HadithComponent';

export const AlllHadith = () => {
    const params = useParams();
    console.log(params)
    const navigate = useNavigate();

    return (
        <div className='allHadith'>
            <HadithComponent
                hadithName={"Sahih al-Bukhari"}
                arabicName={"صحيح البخاري"}
                handleNavigate={() => navigate(`/hadith/ara-bukhari`)} 
            />
            <HadithComponent
                hadithName={"Sahih Muslim"}
                arabicName={"صحيح مسلم"}
                handleNavigate={() => navigate(`/hadith/ara-muslim1`)} 
            />
        </div>
    );
};
