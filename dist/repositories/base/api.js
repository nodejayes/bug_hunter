"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CrudApi {
    constructor(_repository) {
        this._repository = _repository;
        this.exportableApi = {
            GET: (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                let filter = { limit: 1000 };
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
            }),
            POST: (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                this._repository.create(req.body)
                    .then(next)
                    .catch((err) => {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                });
            }),
            PUT: (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                this._repository.update(req.parameter.id, req.body)
                    .then(next)
                    .catch((err) => {
                    console.error(err);
                    req.statusCode = 500;
                    res.end('Internal Server Error');
                });
            }),
            DELETE: (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                this._repository.delete(req.parameter.id)
                    .then(next)
                    .catch((err) => {
                    console.error(err);
                    req.statusCode = 500;
                    res.end('Internal Server Error');
                });
            }),
            GET_BY_ID: (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                this._repository.readById(req.parameter.id)
                    .then(next)
                    .catch((err) => {
                    console.error(err);
                    req.statusCode = 500;
                    res.end('Internal Server Error');
                });
            })
        };
    }
}
exports.CrudApi = CrudApi;
//# sourceMappingURL=api.js.map