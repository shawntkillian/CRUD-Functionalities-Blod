import axios from 'axios'

export default axios.create({
    //add the url below. It must be changed ever 2 hours
    baseURL:  'http://efde-2601-246-5500-f530-68bc-fbf5-da00-d801.ngrok.io'
});