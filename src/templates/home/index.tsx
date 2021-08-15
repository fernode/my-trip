import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinksWrapper'
import { MapProps } from '../../components/Map'
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Nando Trips"
        description="Um projeto simples que mostra um mapa com localizações dos meus locais favoritos no mundo e que mostra mais informações quando clicado."
        canonical="https://nando-trips.fernandosilva.dev"
        openGraph={{
          url: 'https://nando-trips.fernandosilva.dev',
          title: 'Nando Trips',
          description:
            'Um projeto simples que mostra um mapa com localizações dos meus locais favoritos no mundo e que mostra mais informações quando clicado.',
          images: [
            {
              url: 'https://nando-trips.fernandosilva.dev/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Nando Trips'
            }
          ],
          site_name: 'Nando Trips'
        }}
      />
      <LinkWrapper href="about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
