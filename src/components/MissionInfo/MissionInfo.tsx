import React from 'react';
import {LauncheMissionDetailQuery} from "./../../generated/graphql";
import "./../../App.css";
import {Link} from "react-router-dom"
import moment from 'moment'
import Moment from 'react-moment'






interface Props{
    data: LauncheMissionDetailQuery
    
    
}
export const MissionInfo:React.FC<Props> = ({data}) => {
  let {launch_date_local}:any = data.launch
  let date = moment(launch_date_local)
    if (!data.launch) {
        return <div>No launch available</div>;
      }
    
      return (
     
        <div>
        <div className="mission-heading">
        <h2 >Launch Details</h2>
        </div>
        <div id="missionInfo-div" className="missioninfo">
          <div className="trans-div">
          <h4>{data.launch.launch_site?.site_name}</h4>
          <h1>Mission Name: {data.launch.mission_name}</h1>
          <h5>Date: <Moment format="YYYY-MM-DD HH:mm a">{date}</Moment></h5>
          <br/> 
          <div>
                  Status: {" "}   {data.launch?.launch_success ? (
                         <span className="success">Success</span>
                     ): (<span className="failed">Failed</span>)}
                    </div>
                    <br/>
          <p>Rocket name || Rocket type: <strong>{data.launch.rocket?.rocket_name} || {data.launch.rocket?.rocket_type} </strong></p>
          <hr/>

          {data.launch.details === null ? <div> <br/> No details Available 😏</div>  : 
          <p><strong>Details: </strong>
           {data.launch.details}</p>}
           
           <div>
           <p><strong>Images:  </strong></p>
           {data.launch?.links?.flickr_images === null || data.launch?.links?.flickr_images === undefined || data.launch?.links?.flickr_images.length < 1  ? "No Images Available 😏" :
           <div>
                    
           {data.launch?.links?.flickr_images?.map((image: any, ind: number)=>
             image?  <img src={image} alt={image} key={ind} width="150px" height="150px" /> : null
          )}
          </div>}
          </div>
        </div>
          <Link to="/missions">
          <button className="btn">Back</button>
        </Link>
        </div>

        </div>
      
      );
}

