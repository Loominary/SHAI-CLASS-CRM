const { search } = require('../routes');
const database = require('./database');

module.exports = {
    addProduct: async function (req, res, next) {
        const qs = req.body;
        const name = qs.name;
        const desc = qs.desc;
        const price = qs.price;

        if (!name || name.length === 0) {
            throw ('ERROR: name is empty');
        }

        const sql = "INSERT INTO products(name, description, price)" +
        " VALUES(?,?,?);";
        try{
            const result = await database.query(sql, [name, desc, price]);
            
            
        }
        catch(err){
            console.log(err);
        }
        res.send(`${name} with price of ${price} added successfully`)
        
    },

    productsList: async function (req, res) {
        const sql = "SELECT * FROM products";

       try{
           //const connection = await database.getConnection(); //awaiting connection - INCLUDED IN DATABASE WITH query()
           const result = await database.query(sql); //awaiting results
           res.send(result[0]);
       }
       catch (err){
        console.log(err);
       }
        
    },



//todo: export all products
exportProducts: async function(){
    const sql = "SELECT name, description, price FROM products ORDER BY name ASC;"
},


//todo: search in products by param
searchProducts: async function(){
    //const sql = SELECT WHERE
},

//todo: edit details of products
editDesc: async function(){
    //const sql = UPDATE 
}, 

//todo: delete product
deleteProduct: async function(){
    //const sql = DROP

},

//
}










//__________ OLD CODE________________
/* database.pool.getConnection(function (connErr, connection) {
    if (connErr) throw connErr; // not connected!

    
    connection.query(
        sql,
        [name, desc, price],
        function (sqlErr, result, fields) {
            if (sqlErr) throw sqlErr;

            console.log(result);
        });
}); */
