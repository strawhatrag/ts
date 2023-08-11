"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
//npm install --save-dev @types/lodash
axios_1.default.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res.data.title))
    .catch((err) => console.log(err.message));
