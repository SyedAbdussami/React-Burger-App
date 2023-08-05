import axios from 'axios';

const instance=axios.create({
  baseURL:"https://react-burger-app-2ad7d.firebaseio.com/"
})

export default instance;