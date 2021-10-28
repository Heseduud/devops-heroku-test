const express = require('express');
const app = express();
const port = process.env.$PORT

app.get('/', (req, res) => {
	res.send('<h1>Devops with Docker pipeline test</h1>');
});

app.listen(port, () => {
	console.log(`App running on: ${port}`);
});