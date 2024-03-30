const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware для обработки JSON-запросов
app.use(bodyParser.json());

// Маршрут для сохранения IP-адреса и вывода в терминал
app.post('/myip', (req, res) => {
    const { ip } = req.body;

    // Добавляем IP-адрес в массив
    console.log('Your IP address is:', ip);

    // Сохраняем IP-адрес в файл
    fs.appendFile('server.txt', ip + '\n', (err) => {
        if (err) {
            console.error('Error saving IP address to file:', err);
            res.status(500).send('Error saving IP address');
        } else {
            console.log('IP address saved to server.txt');
            res.status(200).send('IP address saved');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
