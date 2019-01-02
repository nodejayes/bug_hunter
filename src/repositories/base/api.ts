import {CrudRepository} from './crud';
import {Model}          from 'sequelize-typescript';

export class CrudApi<T extends Model<T>> {
  constructor(private _repository: CrudRepository<T>) {}

  exportableApi = {
    GET: async (req, res, next) => {
      let filter = {limit: 1000};
      if (req.parameter) {
        // We have to unescape the Filter Object while it is a JSON Object
        // Be careful SQL Injections are re enabled with this!!!!!
        // But otherwise we can not parse the String as JSON
        const UNESCAPE_FILTER = req.parameter.filter.split('\\"').join('"');
        const PARSED_FILTER = JSON.parse(UNESCAPE_FILTER);
        if (PARSED_FILTER) {
          filter = PARSED_FILTER;
        }
      }
      this._repository.readAll(filter)
        .then(next)
        .catch((err) => {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal Server Error');
        });
    },
    POST: async (req, res, next) => {
      this._repository.create(req.body)
        .then(next)
        .catch((err) => {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal Server Error');
        });
    },
    PUT: async (req, res, next) => {
      this._repository.update<number>(req.parameter.id, req.body)
        .then(next)
        .catch((err) => {
          console.error(err);
          req.statusCode = 500;
          res.end('Internal Server Error');
        });
    },
    DELETE: async (req, res, next) => {
      this._repository.delete(req.parameter.id)
        .then(next)
        .catch((err) => {
          console.error(err);
          req.statusCode = 500;
          res.end('Internal Server Error');
        });
    },
    GET_BY_ID: async (req, res, next) => {
      this._repository.readById<number>(req.parameter.id)
        .then(next)
        .catch((err) => {
          console.error(err);
          req.statusCode = 500;
          res.end('Internal Server Error');
        });
    }
  }
}
