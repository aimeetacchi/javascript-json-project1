# javascript-json-project1
JSON project

// To run -
install: npm --save json-server
run: npm run json:server

<!-- Ref -->
routes you can use for this 
http://localhost:3000/cars
http://localhost:3000/users

//Limit 
http://localhost:3000/cars?_page=1&_limit=2
// finds all Toyota
http://localhost:3000/cars?make=Toyota

// users greater than 30 years old
http://localhost:3000/users?age_gte=30

// Full text search
http://localhost:3000/users?q=Aimee