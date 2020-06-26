const app = require('express')();

app.get('/', (req, res) => {
  req.status(200).send('hi');
});


app.listen(8080, () => "app is working");
