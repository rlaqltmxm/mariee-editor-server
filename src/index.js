const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;

const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '1075799',
    key: 'a3eb2b3ae9b441d9c8ff',
    secret: 'a43adf0efd0798a84262',
    cluster: 'ap3',
});
const CHANNEL_NAME = 'new-docs';
const UPDATE_PAPER_EVENT = 'update-paper';
const UPDATE_TITLE_EVENT = 'update-title';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

/*
{
    newTitle: String
}
*/
app.post(`/${UPDATE_TITLE_EVENT}`, (req, res) => {
    const updated = req.body;
    pusher.trigger(CHANNEL_NAME, UPDATE_TITLE_EVENT, updated.newTitle);
    res.sendStatus(200)
});

/*
{
    newEditorState: Object
}
*/
app.post(`/${UPDATE_PAPER_EVENT}`, (req, res) => {
    const updated = req.body;
    console.log(updated)
    pusher.trigger(CHANNEL_NAME, UPDATE_PAPER_EVENT, updated.newEditorState);
    res.sendStatus(200)
});

app.listen(port, () => {
    console.log(`Collaborative editor server listening at http://localhost:${port}`)
});
