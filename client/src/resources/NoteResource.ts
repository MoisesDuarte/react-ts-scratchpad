import axios from 'axios';
import { Story } from '../types/story';

class NoteResource {
  baseUrl = import.meta.env.VITE_API_HOST;

  /**
  * Fetch all notes
  * @returns an array of notes
  */
  async getNotes(): Promise<Story[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/note`);
      return response.data;
    } catch (error) {
      console.error('error fetching notes', error);
      return [];
    }
  }

  /**
  * Create a new note
  * @param {string} title - The title of the note.
  * @param {date} title - The date of the note.
  * @param {body} title - The body of the note.
  * @returns the created note object
  */
  async addNote(title: string, date: string, body: string): Promise<Story> {
    try {
      const payload = { title, date, body };
      const response = await axios.post(`${this.baseUrl}/note`, payload);
      return response.data;
    } catch (error) {
      console.error('error adding note', error);
      return { id: 0, title: '', date: '', body: '' };
    }
  }

  /**
  * Delete a note by id
  * @param {id} title - The note id
  * @returns the deleted note object
  */
  async deleteNote(id: number): Promise<Story>{
    try {
      const response = await axios.delete(`${this.baseUrl}/note/${id}`);
      return response.data;
    } catch (error) {
      console.error('error deleting note', error);
      return { id: 0, title: '', date: '', body: '' };
    }
  }
};

export default new NoteResource();