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

// then use this.$db to access your database.
```

You can set options like this, it's not necessary:

```js
Vue.use(VueLevel, {
  name: 'my-database', // name of your db, default is site-data
  levelOptions: { // options pass to level
    prefix: 'level-',
    version: 1,
  },
  shortcuts: true, // if set to true, we will add some functions, default is false
});

// shortcuts

await this.$dbGet(key);
await this.$dbSet(key, value); // key must be a string

```

## License

MIT
