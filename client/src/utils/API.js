import axios from 'axios'

export default {

    getAll: function(path){
        return axios.get('/api/' + path)
    },
    getOne: function(path, id) {
        return axios.get('/api/' + path +'/'+ id);
    },
    
    deleteOne: function(path, id) {
        return axios.delete('/api/' + path +'/'+ id);
    },
  
    saveOne: function(path, Data) {
        return axios.post('/api/' + path, Data);
    }
}