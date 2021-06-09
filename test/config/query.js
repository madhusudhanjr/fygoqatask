class Query {

    // Get User Details 
    getUserDetailsByID(id) { return "SELECT * FROM user WHERE Id='"+id+"';" }
    
}

module.exports = new Query();