"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readForm = exports.submitForm = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.resolve(__dirname, '../../db.json');
const readDB = () => {
    const rawData = fs_1.default.readFileSync(dbPath, 'utf-8');
    return JSON.parse(rawData);
};
const writeDB = (data) => {
    fs_1.default.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};
const submitForm = (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    const db = readDB();
    db.submissions.push(newSubmission);
    writeDB(db);
    res.status(201).json({ message: 'Submission successful' });
};
exports.submitForm = submitForm;
const readForm = (req, res) => {
    const { index } = req.query;
    if (typeof index === 'undefined') {
        return res.status(400).json({ error: 'Index is required' });
    }
    const db = readDB();
    const submissionIndex = parseInt(index, 10);
    if (isNaN(submissionIndex) || submissionIndex < 0 || submissionIndex >= db.submissions.length) {
        return res.status(400).json({ error: 'Invalid index' });
    }
    res.status(200).json(db.submissions[submissionIndex]);
};
exports.readForm = readForm;
