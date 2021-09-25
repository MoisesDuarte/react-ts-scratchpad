import React, { FC } from 'react'
import styled from 'styled-components'

interface GenericModalProps {
  handleClose: (ev: React.MouseEvent) => void;
  children: React.ReactNode;
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
  background: rgba(0, 0, 0, 0.6);
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
    display: block;
    border: none;
    border-radius: 4px;
    background-color: var(--color-primary);
    color: var(--color-text);
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: var(--color-tertiary);
      color: var(--color-primary);
    }
  }
`

export default GenericModal