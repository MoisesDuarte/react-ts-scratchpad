import { useState } from 'react'
import styled from 'styled-components'

import StoryPreviewModal from './components/StoryPreviewModal'
import StoryCreateModal from './components/StoryCreateModal'

const App = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="App">
      <main>
        <AppBar>
          <ul>
            <li>Scratchpad</li>
            <li onClick={() => setShowCreateModal(true)}>+ New</li>
          </ul>
        </AppBar>

        <StoryGrid>
          <StoryItem onClick={() => setShowPreviewModal(true)}>
            <h1>Title</h1>
            <time>00/00/00 - 00:00h</time>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non enim
              purus. Mauris tincidunt dolor sapien. Ut tincidunt cursus iaculis. Aliquam
              in sagittis mauris, quis malesuada diam. Phasellus pulvinar dictum mi, 
              non congue lorem tristique vitae. Quisque aliquet mauris in metus vestibulum, 
              sit amet venenatis nulla aliquam. Fusce ac urna in purus tristique 
              condimentum eu eget odio. Cras posuere fringilla orci vestibulum ultrices.
              Integer suscipit, erat pharetra malesuada scelerisque, tellus tortor auctor
              libero, sit amet pretium ante dolor sit amet nibh.
            </p>
          </StoryItem>
        </StoryGrid>

        { showCreateModal ? <StoryCreateModal handleCreateModalClose={() => setShowCreateModal(false)}/> : null }
        { showPreviewModal ? <StoryPreviewModal handlePreviewModalClose={() => setShowPreviewModal(false) } /> : null }
      </main>
    </div>
  )
}

// ? Styling
const AppBar = styled.nav`
  & > ul {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-secondary);
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      padding: 1rem;
      user-select: none;
      transition: background-color 0.125s;
    }

    & > li:nth-child(2):hover {
      background-color: var(--color-tertiary);
      color: var(--color-primary);
      cursor: pointer;
    }
  }
`

const StoryGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem;
`

const StoryItem = styled.div`
  border-radius: 4px;
  background-color: var(--color-secondary);
  padding: 1rem;
  height: 200px;
  cursor: pointer;
  transition: box-shadow 0.25s;

  & > {
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
  }

  &:hover {
    box-shadow: 5px 5px 1px 1px #000000;
  }
`

export default App
