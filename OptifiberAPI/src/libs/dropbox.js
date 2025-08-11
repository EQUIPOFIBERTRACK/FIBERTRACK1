import { Dropbox } from 'dropbox';
import fetch from 'node-fetch';

const dbx = new Dropbox({ accessToken: process.env.DROPBOX_ACCESS_TOKEN, fetch });

export default dbx;