import { MouseEvent, ReactNode, FC } from 'react';
import styled from 'styled-components';

interface GenericModalProps {
  handleClose: (ev: MouseEvent) => void;
  children: ReactNode;
}

const GenericModal: FC<GenericModalProps> = ({
  handleClose,
  children,
}) => {
  return (
    <ModalOverlay>
      <ModalBody>
        <button onClick={ handleClose }>
          x
        </button>
        <section>
          { children }
        </section>  
      </ModalBody>
    </ModalOverlay>
  )
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
`

const ModalBody = styled.div`
  position: fixed;
  border-radius: 4px;
  background: var(--color-secondary);
  width: 80%;
  height: auto;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > button {
    position: absolute;
    display: block;
    border: none;
    border-radius: 4px;
    background-color: var(--color-tertiary);
    color: var(--color-secondary);
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    top: -2rem;
    right: -2rem;

    &:hover {
      background-color: var(--color-secondary);
      color: var(--color-tertiary);
    }
  }
`

export default GenericModal