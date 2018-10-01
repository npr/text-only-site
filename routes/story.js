//set up HTTP route handlers
//first register handler; allow us to set
//up handler for all http get request (json data, html page)
app.get('/', (req, res) => {
  res.render('/')
});

app.get('/story', (req, res) => {
  res.render('')
});
