import { FC, MouseEvent } from 'react';
import styled from 'styled-components';

import GenericModal from './GenericModal';

import { Story } from '../types/story';

interface StoryPreviewModalProps {
  handlePreviewModalClose: (ev: MouseEvent) => void;
  storyContent: Story;
}

const StoryPreviewModal: FC<StoryPreviewModalProps> = ({
  handlePreviewModalClose,
  storyContent,
}) => {
  return (
    <>
      <GenericModal handleClose={handlePreviewModalClose}>
        <StoryContent>
          <h1>{storyContent.title}</h1>
          <time>{storyContent.date}</time>
          <p>{storyContent.body}</p>
        </StoryContent>
      </GenericModal>
    </>
  )
}

const StoryContent = styled.div`
  h1 {
    margin: 0;
  }

  time {
    font-size: 0.825rem;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export default StoryPreviewModal;