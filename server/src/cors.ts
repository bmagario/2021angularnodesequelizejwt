import * as cors from 'cors'; 
import { RequestHandler } from 'express';

export class Cors {
  //options for cors midddleware
  options: cors.CorsOptions = {
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
      ],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: process.env.API_URL,
      preflightContinue: false,
  };

  getOptions(): RequestHandler {
    return cors(this.options);
  }
}