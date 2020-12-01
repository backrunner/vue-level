# vue-level

A wrapper of level-js for Vue.
## Install

```bash
$ npm install vue-level --save-dev
```

## Usage

```js
import Vue from 'vue';
import VueLevel from 'vue-level';

Vue.use(VueLevel);

// then use this.$db to access your database, API is the same as level-js db instance.
```

You can set options like this, it's not necessary:

```js
Vue.use(VueLevel, {
  name: 'my-database', // name of your db, default is "site-data"
  levelOptions: { // options passed to level, see level-js docs for more details
    prefix: 'level-',
    version: 1,
  },
  shortcuts: true, // if set to true, we will add some functions, default is false
});

// shortcuts

await this.$dbGet(key);
await this.$dbSet(key, value); // key must be a string
await this.$dbPut(key, value); // same as this.$dbSet

```

## License

MIT
