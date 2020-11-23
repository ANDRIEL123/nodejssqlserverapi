var config = require('./dbconfig')
const sql = require('mssql')

const getCases = async () => {
    try {
        let pool = await sql.connect(config)
        let covidCases = await pool.request().query(`SELECT * FROM casescovid
        FOR SYSTEM_TIME
        BETWEEN '2000-01-01 00:00:00.0000000' and '2022-01-01 00:00:00.0000000'`)
        return covidCases.recordsets
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCases: getCases
}