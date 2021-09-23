// Set the current environment.
require('custom-env').env(true);

// Import libs.
import * as express from 'express'; 
import * as helmet from 'helmet'; 
import * as morgan from 'morgan'; 
import * as http from 'http'; 
import * as path from 'path'; 
import * as bodyParser from 'body-parser';

// Import Routes.
import ApiRoutes from './routers/api.router';
import AuthRoutes from './routers/auth.router';
import TestRoutes from './routers/test.router';
import DefaultRoutes from './routers/default.router';
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/not-found.middleware";

class Server { 
	public app: express.Application; 

	public static bootstrap(): Server { 
    return new Server(); 
	} 

	constructor() { 
    // Create expressjs application.
    this.app = express(); 
 
    // Configure application.
    this.config(); 

    // Configure middlewares.
    this.middlewares(); 
 
    // Configure routes.
    this.routes(); 
	}

	private config() { 
    // Helmet helps you secure your Express apps by setting various HTTP headers. 
    this.app.use(helmet());

    // Parsers for POST data.
    this.app.use(bodyParser.json()); 
    this.app.use(bodyParser.urlencoded({ extended: false })); 
 
    // Point static path to public folder.
    this.app.use(express.static(path.join(__dirname, 'public'))); 
  
    // Get port from environment and store in Express.
    const port = process.env.PORT || '3000'; 
    this.app.set('port', port); 
 
    // Create HTTP server.
    const server = http.createServer(this.app); 
 
    // Listen on provided port, on all network interfaces. 
    server.listen(port, () => console.log(`API running on localhost:${port}`)); 
  }
  
  private middlewares() {
    // Print out http calls.
    this.app.use(morgan('dev'));

    // Accept json forms.
    this.app.use(express.json());
  }
  
	private routes() { 
    this.app.use(ApiRoutes); 
    this.app.use('/auth', AuthRoutes); 
    this.app.use('/test', TestRoutes); 
    // this.app.use(DefaultRoutes); 

    // Error Handler.
    this.app.use(errorHandler);
  
    // Not Found Handler.
    this.app.use(notFoundHandler);
  }
}

Server.bootstrap();