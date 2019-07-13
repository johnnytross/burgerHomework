// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {}

function selectAll() {
    connection.query("SELECT * FROM burgers", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].burger_name + " | " + res[i].devoured);
      }
      console.log("-----------------------------------");
    });
  }

// method
// function insertOne() {
//     connection.query( "INSERT INTO burgers (burger_name) values ('Impossible')", function(err, res){
//         console.log('Impossible burger inserted!')
//     });

// };

//update one method
function updateOne() {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            burger_name: 'beyond'
          },
          {
            id: 5
          }
        ],
        function(err, res) {
          console.log("Products updated!\n")
        } 
      );
};

selectAll();
// insertOne();
updateOne();

module.exports = orm;