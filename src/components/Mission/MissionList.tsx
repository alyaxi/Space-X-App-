import React from 'react';
import {MissionsInfoQuery} from "./../../generated/graphql"
import "./../../App.css";
import {Link} from "react-router-dom"
import moment from 'moment';
import Moment from 'react-moment';
interface Props {
    data: MissionsInfoQuery
}
export const MissionList:React.FC<Props> = ({data}) => {
    console.log(data);
    
    return (
 
        <div>
        <h2 className="mission-heading">Launches</h2>
            <ol>
            {data.launches?.map((launch, i) => {
                let {launch_date_local}: any = launch
                let date = moment(launch_date_local)
                return <div key={i} id="missionlist-div" className="missionList">
                
                    <div>
                     {launch?.launch_success ? (
                         <span className="success">Success</span>
                     ): (<span className="failed">Failed</span>)}
                    </div>
                     <h5>Flight Number: <br/>{launch?.flight_number}</h5>
                     <h1> <span className="list">{i + 1}:</span>{launch?.mission_name}</h1>

                    <h4>Date: <Moment format="YYYY-MM-DD HH:mm a">{date}</Moment></h4>
                   
                    <Link to={`/missions/${launch?.flight_number}`} className="btn">
                    Mission Detail
                    </Link>
               
            
            </div>
            })}
            
            </ol>
        </div>
    )
}

