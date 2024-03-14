import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import './config.mjs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

app.listen(process.env.PORT || 3000);
