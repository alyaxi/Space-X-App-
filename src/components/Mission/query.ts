import gql from 'graphql-tag';


export const MissionsInfo = gql`


query MissionsInfo{
    launches {
      flight_number
      mission_id
      mission_name
      launch_year
      launch_success
      launch_date_local
    }
  }
`