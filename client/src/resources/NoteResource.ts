import axios from 'axios';

class NoteResource {
  baseUrl = '';

  getNotes() {
    axios.get(`${this.baseUrl}/note`)
      .then(response => response.data)
      .catch(err => err);
  }
};

export default new NoteResource();