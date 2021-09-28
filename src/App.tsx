import { useState, FormEvent } from 'react'
import styled from 'styled-components'
import { RiDeleteBin2Fill } from "react-icons/ri";

import StoryPreviewModal from './components/StoryPreviewModal'
import StoryCreateModal from './components/StoryCreateModal'

import { Story } from './types/story'

const App = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [stories, setStories] = useState<Story[]>([
    {
      title: 'Title',
      date: '00/00/00',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  ]);

  function onAddStory(e: FormEvent): void {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      date: { value: string };
      body: { value: string };
    };

    setStories((prevProps) => ([
      ...prevProps,
      {
        title: target.title.value,
        date: target.date.value,
        body: target.body.value
      }
    ]));

    setShowCreateModal(false);
  }

  function onPreviewStory(index: number): void {
    setCurrentStoryIndex(index);
    setShowPreviewModal(true);
  }

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
          { 
            stories.length ? (stories.map((story, index) => {
              return (
                <StoryItem onClick={() => onPreviewStory(index)}>
                  <button className="delete-button">
                    <RiDeleteBin2Fill />
                  </button>
                  <h1>{ story.title }</h1>
                  <time>{ story.date }</time>
                  <p>{ story.body }</p>
                </StoryItem>
              )
            })) : ( <p>No stories to show</p> )
          }
        </StoryGrid>

        { 
          showCreateModal ? 
            <StoryCreateModal 
              handleCreateModalClose={() => setShowCreateModal(false)}
              onSubmit={(ev) => { onAddStory(ev) }}
            /> : null 
        }

        { 
          showPreviewModal ? 
            <StoryPreviewModal 
              handlePreviewModalClose={() => setShowPreviewModal(false) } 
              storyContent={stories[currentStoryIndex]}
            /> : null 
        }
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
  position: relative;
  border-radius: 4px;
  background-color: var(--color-secondary);
  padding: 1rem;
  height: 200px;
  cursor: pointer;
  transition: box-shadow 0.25s;

  & > {
    button.delete-button {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      padding: 0;
      font-size: 24px;

      border: none;
      background-color: transparent;
      color: var(--color-text);
    }

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
