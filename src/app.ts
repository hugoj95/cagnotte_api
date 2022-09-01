import express from "express";
import { config } from './config/config';

const app = express();
const port = config.server.port; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello hugo! anus anus" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `yo le serveur est lancé au http://localhost:${ port }` );
} );