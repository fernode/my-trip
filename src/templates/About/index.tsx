import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'
import LinkWrapper from 'components/LinksWrapper'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus esse aliquam numquam praesentium beatae nam aperiam
          soluta officia totam, nesciunt omnis aliquid vel eligendi blanditiis
          reiciendis, quisquam cumque impedit ipsum? Culpa accusantium saepe
          quibusdam magnam accusamus vero architecto nesciunt sequi fuga
          sapiente laboriosam incidunt dolorum molestiae, ex molestias, officiis
          veniam alias consectetur in non eos adipisci vel minus quisquam.
          Dolorum. Necessitatibus ipsam saepe alias, rerum exercitationem cumque
          accusamus tempore consequatur placeat. Repellendus sit qui quaerat
          amet placeat rerum, doloribus velit molestias beatae dolores
          voluptates, tempore odit at aliquam itaque quo.
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
