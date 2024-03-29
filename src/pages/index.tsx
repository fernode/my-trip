import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import HomeTemplate from '../templates/home'
import { GetPlacesQuery } from 'graphql/generated/graphql'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 20,
    props: {
      places
    }
  }
}
