import React from 'react';
import {  useParams } from 'react-router-dom';
import Loader from '../Mission/Loader/Loader';
import {useLauncheMissionDetailQuery} from "./../../generated/graphql"
import { MissionInfo } from "./../MissionInfo/MissionInfo"


export const MissionInfoContainer = () => {

    
    const {id} = useParams<{id : string}>()
    const { data, loading, error} = useLauncheMissionDetailQuery({
    variables: {
      id: id
    }
    });
    if (loading){
      return(
         <Loader/>
      )
  }

  if(error){
      return(
          <div>
              Error...
          </div>
      )
  }

  if (!data){
      return(
          <div>
              Data not available
          </div>
      )
  }
 return (
    
         <MissionInfo data={data}/>
    
 )

}

