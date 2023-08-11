import axios from "axios";

import _ from "lodash";   // no declaration file
//npm install --save-dev @types/lodash

axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res.data.title))
  .catch((err) => console.log(err.message));