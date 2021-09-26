import React, { FC, useState } from 'react'
import GenericModal from './GenericModal'
import styled from 'styled-components'

interface StoryCreateModalProps {
  handleCreateModalClose: (ev: React.MouseEvent) => void;
}

const StoryCreateModal: FC<StoryCreateModalProps> = ({
  handleCreateModalClose
}) => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    body: ''
  })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {

  }

  return (
    <>
      <GenericModal handleClose={handleCreateModalClose}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>
              Title
            </FormLabel>
            <FormInput 
              type="text" 
              name="title" 
              value={form.title}
              onChange={handleInputChange}
            />
          </FormControl>
        </form>
      </GenericModal>
    </>
  )
}

const FormControl = styled.div`
  display: flex;
`

const FormLabel = styled.label`
  padding: 0.5rem;
  background-color: var(--color-primary);
`

const FormInput = styled.input`
  width: 100%;
  border: none;
  background-color: var(--color-secondary-accent);
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`

export default StoryCreateModal;