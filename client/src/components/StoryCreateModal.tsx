import { FC, FormEvent, MouseEvent } from 'react';
import GenericModal from './GenericModal';
import styled from 'styled-components';

interface StoryCreateModalProps {
  onSubmit: (ev: FormEvent) => void;
  handleCreateModalClose: (ev: MouseEvent) => void;
}

const StoryCreateModal: FC<StoryCreateModalProps> = ({
  onSubmit,
  handleCreateModalClose
}) => {
  return (
    <>
      <GenericModal handleClose={handleCreateModalClose}>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>
              Title
            </FormLabel>
            <FormInput 
              type="text" 
              name="title" 
            />
          </FormControl>
          <FormControl>
            <FormLabel>
              Date
            </FormLabel>
            <FormInput 
              type="date" 
              name="date" 
            />
          </FormControl>
          <FormControl>
            <FormTextArea
              name="body"
              placeholder="Body"
              rows={10}>
            </FormTextArea>
          </FormControl>
          <FormSubmitButton
            type="submit">
            Submit
          </FormSubmitButton>
        </form>
      </GenericModal>
    </>
  )
}

const FormControl = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const FormLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--color-primary);
`

const FormInput = styled.input`
  width: 100%;
  border: none;
  background-color: var(--color-secondary-accent);
  color: var(--color-tertiary);
  padding: 0.5rem;
  font-size: 1rem;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`

const FormTextArea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  background-color: var(--color-secondary-accent);
  color: var(--color-tertiary);
  padding: 0.5rem;
  font-size: 1rem;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
`

const FormSubmitButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: var(--color-tertiary);
  color: var(--color-secondary);
  float: right;
  padding: 0.5rem 1rem;
  -webkit-appearance: none;
  cursor: pointer;
`

export default StoryCreateModal;