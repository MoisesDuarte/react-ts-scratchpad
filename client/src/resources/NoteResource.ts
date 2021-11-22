import axios from 'axios';
import { Story } from '../types/story';

class NoteResource {
  baseUrl = import.meta.env.VITE_API_HOST;

  async getNotes(): Promise<Story[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/note`);
      return response.data;
    } catch (error) {
      console.error('error fetching notes', error);
      return [];
    }
  }
};

export default new NoteResource();