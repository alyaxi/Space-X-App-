import gql from 'graphql-tag';


export const QUERY_LAUNCH_PROFILE = gql`
  query launcheMissionDetail($id: String!) {
    launch(id: $id) {
      flight_number
      details
      is_tentative
      launch_date_local
      launch_site {
        site_id
        site_name_long
        site_name
      }
      launch_success
      launch_year
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      upcoming
      links {
        flickr_images
        article_link
        video_link
      }
    }
  }
`;


