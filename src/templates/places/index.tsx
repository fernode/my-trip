import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import LinkWrapper from 'components/LinksWrapper'

type ImageProps = {
  url: string
  width: string
  height: string
}

export type PlacesTemplateProps = {
  place: {
    name: string
    slug: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
    </S.Content>
  )
}

export default PlacesTemplate
