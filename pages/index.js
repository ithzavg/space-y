/*Import libraries */
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

/*Import next Components */
import Navbar from '../components/Navbar/Navbar';
import HomeAbout from '../components/HomeAbout/HomeAbout';


export default function Home({ about }) {
  
  return (
      <main className="min-h-screen font-press-start">
        <Navbar></Navbar>
        <HomeAbout about={about}></HomeAbout> 
      </main>
  )
}


export async function getStaticProps(){

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: gql `
    query GET_COMPANY_INFO {
        company {
          ceo
          coo
          links {
            elon_twitter
            flickr
            twitter
            website
          }
          name
          summary
        }
      }
    `
  })
    
  return {
      props: {
          about: data.company
      }
  }
}