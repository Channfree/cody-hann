import { css } from 'emotion';

export const overlay = css`
  background-color: black;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 200ms ease-in-out;
`;

export const thumbnail = url => css`
  background-image: url("${url}");
  border: none;
  height: 18.75rem;
  padding: 0;
  position: relative;
  width: 18.75rem;

  &:hover {
    cursor: pointer;

    .${overlay} {
      opacity: .7;
    }
  }
}`;
