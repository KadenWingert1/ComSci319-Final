const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Comsci319-Final'
});

connection.connect();

Products.forEach((product) => {
  const query = `
    INSERT INTO products (id, title, price, description, category, image, rating, rating_count) 
    VALUES (${product.id}, "${product.title}", ${product.price}, "${product.description}", "${product.category}", "${product.image}", ${product.rating.rate}, ${product.rating.count})
  `;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.log(error);
    }
  });
});




// function getAllProducts(callback) {
//     connection.query('SELECT * FROM products', (error, results) => {
//       if (error) {
//         callback(error);
//       } else {
//         callback(null, results);
//       }
//     });
//   }
  

connection.end();