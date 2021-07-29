/*Import libraries */
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

/*Import next Components */
import Navbar from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';

const Launches = ({ launches }) =>{
 
    return (
        <div >
            <Navbar></Navbar>

            <section className="min-h-screen bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 p-10 gap-4">
              {launches.map(launch => {
                let img = launch.links.flickr_images.length === 0 ? "/default.jpg" : launch.links.flickr_images[0]
                return(
                  <Card 
                    key={launch.id}
                    mission_name ={launch.mission_name} 
                    date={launch.launch_date_local}
                    wikipedia={launch.links.wikipedia} 
                    image = {img}></Card>
                )
              })}
                
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
          id
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