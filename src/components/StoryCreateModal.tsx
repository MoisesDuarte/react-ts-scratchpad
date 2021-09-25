import React, { FC } from 'react'
import GenericModal from './GenericModal'

interface StoryCreateModalProps {
  handleCreateModalClose: (ev: React.MouseEvent) => void;
}

const StoryCreateModal: FC<StoryCreateModalProps> = ({
  handleCreateModalClose
}) => {
  return (
    <>
      <GenericModal handleClose={handleCreateModalClose}>
        Create content goes here.
      </GenericModal>
    </>
  )
}

export default StoryCreateModal;