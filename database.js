const {
    createPool
} = required('mysql');

const Pool = createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"test",
    connectionLimit:10
})

pool.query("")