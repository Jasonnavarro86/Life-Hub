import axios from 'axios'

export default {

    getAll: function(db){
        return axios.get('/api/' + db)
    },
    getOne: function(db, id) {
        return axios.get('/api/' +db +'/'+ id);
    },
    
    deleteOne: function(db, id) {
        return axios.delete('/api/' +db +'/'+ id);
    },
  
    saveOne: function(db, Data) {
        return axios.post('/api/main', Data);
    }
}