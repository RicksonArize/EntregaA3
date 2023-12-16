
import { openDb } from '../configDB.js';

export async function createClienteTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente TEXT)');
    });
}

export async function selectClientes(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM Clientes')
            .then(clientes => res.json(clientes));
    });
}

export async function selectCliente(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('SELECT * FROM Clientes WHERE id=?', [id])
            .then(cliente => res.json(cliente));
    });
}

export async function insertCliente(req, res) {
    let cliente = req.body;
    openDb().then(db => {
        db.run('INSERT INTO Clientes (cliente) VALUES (?)', [cliente.cliente]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function updateCliente(req, res) {
    let cliente = req.body;
    openDb().then(db => {
        db.run('UPDATE Clientes SET cliente=? WHERE id=?', [cliente.cliente, cliente.id]);
    });
    res.json({
        "statusCode": 200
    });
}

export async function deleteCliente(req, res) {
    let id = req.params.id;
    openDb().then(db => {
        db.get('DELETE FROM Clientes WHERE id=?', [id])
            .then(result => result);
    });
    res.json({
        "statusCode": 200
    });
}
