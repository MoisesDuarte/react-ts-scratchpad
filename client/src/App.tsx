import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { RiDeleteBin2Fill } from "react-icons/ri";

import styled from 'styled-components';
import axios from 'axios';

import StoryPreviewModal from './components/StoryPreviewModal';
import StoryCreateModal from './components/StoryCreateModal';

import { Story } from './types/story';

const App = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_HOST;

    axios.get(`${baseUrl}/note`)
      .then((response) => {
        setStories(response.data);
      })
      .catch((err) => {
        console.info('error', err);
      });
  }, []);

  function onAddStory(e: FormEvent): void {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      date: { value: string };
      body: { value: string };
    };

    setStories((prevStories) => ([
      ...prevStories,
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

  function onDeleteStory(e: MouseEvent, deleteIndex: number) {
    e.stopPropagation();

    if (window.confirm('Do you really want to delete this story?')) {
      setStories((prevStories,) => ([
        ...prevStories.filter((e, index) => index !== deleteIndex)
      ]));
    }
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
                <StoryItem onClick={() => onPreviewStory(index)} key={index}>
                  <button className="delete-button" onClick={(e) => onDeleteStory(e, index)}>
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
      cursor: pointer;

      &:hover {
        color: var(--color-danger);
      }
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
