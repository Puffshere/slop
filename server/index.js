const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

if (process.env.NODE_ENV === 'production') {
    // Serve static files with cache control
    app.use(express.static(__dirname + '/public/', {
        setHeaders: function (res, path) {
            res.set('Cache-Control', 'public, max-age=18000'); // 5 minutes cache
        }
    }));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
