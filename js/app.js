fetch('http://localhost:3000/cars')
  .then(response => response.json())
  .then(json => {
    json.forEach(el => {
      console.log(el.make + '</br>')
    });
  })