import React, { FC } from 'react'
import GenericModal from './GenericModal'

interface StoryPreviewModalProps {
  handlePreviewModalClose: (ev: React.MouseEvent) => void;
}

const StoryPreviewModal: FC<StoryPreviewModalProps> = ({
  handlePreviewModalClose
}) => {
  return (
    <>
      <GenericModal handleClose={handlePreviewModalClose}>
        Preview content goes here.
      </GenericModal>
    </>
  )
}

export default StoryPreviewModal;