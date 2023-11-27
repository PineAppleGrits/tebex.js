# Tebex.js

A Node.js client for the Tebex REST API written in Typescript. Easily interact with the Tebex REST API using this library.


# 🚀 Installation
```
npm install --save tebex.js
```

# 🗒️ Getting started

Get your tebex secret at https://tebex.io

You can use `TebexClient` to generate an instance of the Tebex REST API, or you can use the `TebexRest` to interact with the Tebex REST API without creating a new instance.

# ⚒️ Usage

_All the methods are documented with their respective types._

Using a `TebexClient` instance

```js
import { TebexClient } from 'tebex.js';
const TEBEX_SECRET = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const client = new TebexClient(TEBEX_SECRET);

// Use client
(async () => {
const information = await client.information();
console.log(information)
});

```

Using `TebexRest`

```js
import { TebexClient } from 'tebex.js';
const TEBEX_SECRET = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";



// Use rest to fetch an specific endpoint
(async () => {
const information = TebexRest(TEBEX_SECRET).information();
console.log(information)
});

```

# 🤖 API

The `TebexClient` and `TebexRest` returns an object based on the interface `ITebexRest`, it contains properties based on the Tebex API endpoints\
The endpoints could give an error based on an Invalid Tebex Secret, Not found object or a Server error (_Which shouldn't happen as the UknownError._) 
They extend the `BaseApiError` which has the `message` and `name` property.



_You can check out the [documentation](https://tebexjs.ginos.codes) for more detailed documentation_

# 🌍 Contribute

Feel free to help! If you're interested in helping with the project, please take a look at our [issues tracker](https://github.com/PineAppleGrits/tebex.js/issues)

# ✨ More

You can check the [official documentation](https://plugin.tebex.io/docs). Our package uses the official endpoints. 

