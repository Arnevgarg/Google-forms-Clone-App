import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

interface Submission {
  name: string;
  email: string;
  phone: string;
  github_link: string;
  stopwatch_time: string;
}

const dbPath = path.resolve(__dirname, '../../db.json');

const readDB = (): { submissions: Submission[] } => {
  const rawData = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(rawData);
};

const writeDB = (data: { submissions: Submission[] }) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

export const submitForm = (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;

  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };
  const db = readDB();
  db.submissions.push(newSubmission);
  writeDB(db);

  res.status(201).json({ message: 'Submission successful' });
};

export const readForm = (req: Request, res: Response) => {
  const { index } = req.query;

  if (typeof index === 'undefined') {
    return res.status(400).json({ error: 'Index is required' });
  }

  const db = readDB();
  const submissionIndex = parseInt(index as string, 10);

  if (isNaN(submissionIndex) || submissionIndex < 0 || submissionIndex >= db.submissions.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  res.status(200).json(db.submissions[submissionIndex]);
};
