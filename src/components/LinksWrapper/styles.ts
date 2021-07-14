import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 11000;
  top: var(--medium);
  left: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
