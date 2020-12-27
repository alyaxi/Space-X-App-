import React from 'react';
import {useMissionsInfoQuery} from "./../../generated/graphql"
import Loader from './Loader/Loader';
import { MissionList } from './MissionList';

export const MissionContainer = () => {
    const { data, loading, error } = useMissionsInfoQuery();

    if(loading)
    return <Loader/>
    console.log(data);
    if(error || !data)
    return <h2>Error</h2>
    
 return (
     <div>
         <MissionList data={data}/>
     </div>
 )

}
