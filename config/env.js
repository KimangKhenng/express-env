// config/env.js
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

// Determine which .env file to load
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
const envPath = path.resolve(process.cwd(), envFile);

dotenv.config({ path: envPath });

// Fallback to .env if environment-specific file doesn't exist
if (!fs.existsSync(envPath)) {
    dotenv.config();
}