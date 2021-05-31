const express = require('express');
const router = express.Router();
const db = require('../data/database.js');

// Insert
router.post('/', (req, res) => {
    try {
        const book = {
            title: req.body.title,
            author: req.body.author
        };
        db.insertIntoDb(book);
        res.send('Insert succeeded');
    } catch (err) {
        console.log(err);
        res.status(201).send('POST Error');
    }

});

// Get by ID
router.get('/:id', (req, res) => {
    try {
        res.json(db.getFromDbById(req.params.id));
    } catch (err) {
        console.log(err);
        res.status(201).send('Could not find the book');
    }
});

// Get by query author parameter or get all the books
router.get('/', (req, res) => {
    const author = req.query.author;

    if (author) {
        try {
            res.json(db.getFromDbByAuthor(author));
        } catch (err) {
            console.log(err);
            res.status(201).send('Could not find author');
        }
    } else {
        try {
            res.json(db.getAllFromDb());
        } catch (err) {
            console.log(err);
            res.status(201).send('Could not get all the books');
        }
    }
});

// Modify a book by id
router.put('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = {
            title: req.body.title,
            author: req.body.author
        };

        db.updateById(id, book);
        res.send('Modify succeeded');
    } catch (err) {
        console.log(err);
        res.status(201).send('Could not update by id');
    }
});

// Delete a book by id
router.delete('/:id', (req, res) => {
    try {
        const id = req.params.id;
        db.removeFromDbById(id);
        res.send('Delete by Id succeeded');
    } catch (err) {
        console.log(err);
        res.status(200).send('Could not find id');
    }
});

// Delete a book by a query author parameter or purge database
router.delete('/', (req, res) => {
    const author = req.query.author;

    if (author) {
        try {
            db.removeFromDbByAuthor(author);
            res.send('Delete by query author succeeded');
        } catch (err) {
            console.log(err);
            res.status(201).send('Could not find author');
        }
    } else {
        db.purgeDb();
        res.send('Purge succeeded');
        res.status(201).send('Could not purge database');
    }
});

module.exports = router;
