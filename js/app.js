fetch('http://localhost:3000/cars')
  .then(response => response.json())
  .then(json => {
    json.forEach(el => {
      document.write(el.make + '</br>')
    });
  })