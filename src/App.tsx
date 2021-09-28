import { useState } from 'react'
import styled from 'styled-components'

import StoryPreviewModal from './components/StoryPreviewModal'
import StoryCreateModal from './components/StoryCreateModal'

// TODO: Move typing to dedicated folder later
interface Story {
  title: string;
  date: string;
  body: string;
}

const App = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [stories, setStories] = useState<Story[]>([
    {
      title: 'Title',
      date: '00/00/00',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  ]);

  function onAddStory(e: React.FormEvent): void {
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

    alert(JSON.stringify(stories));
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
            stories.length ? (stories.map((story) => {
              return (
                <StoryItem onClick={() => setShowPreviewModal(true)}>
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
