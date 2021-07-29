/*Import libraries */
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Navbar from '../components/Navbar/Navbar';

const Launches = ({ launches }) =>{
    console.log(launches)
    return (
        <div >
            <Navbar></Navbar>

            <section className="min-h-screen bg-gray-800">

            </section>
        </div>
    )
}

export default Launches;

export async function getStaticProps(){

    const client = new ApolloClient({
      uri: 'https://api.spacex.land/graphql/',
      cache: new InMemoryCache()
    });
  
    const {data} = await client.query({
      query: gql `
      query GET_LAUNCH_INFO {
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          links {
            wikipedia
            flickr_images
          }
        }
      }
      `
    })
      
    return {
        props: {
            launches: data.launchesPast
        }
    }
  }