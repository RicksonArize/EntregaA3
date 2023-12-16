
import { openDb } from '../configDB.js';

export async function createEstoqueTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Estoque (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeProduto TEXT)');
    });
}

export async function selectEstoques(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Estoque')
            .then(nomeProdutos => res.json(nomeProdutos));
    });
}

export async function selectEstoque(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM Estoque WHERE id=?', [id])
            .then(nomeProduto => res.json(nomeProduto));
    });
}

export async function insertEstoque(req, res) {
    let nomeProduto = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Estoque (nomeProduto) VALUES (?)', [nomeProduto.nomeProduto]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updateEstoque(req, res) {
    let nomeProduto = req.body;
    openDb().then(db => {
        db.run('UPDATE Estoque SET nomeProduto=? WHERE id=?', [nomeProduto.nomeProduto, nomeProduto.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deleteEstoque(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Estoque WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}
