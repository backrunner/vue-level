/* eslint-disable no-param-reassign */
import levelup from 'levelup';
import leveljs from 'level-js';

const plugin = {
  install(Vue, config) {
    if (Vue.prototype.$db) {
      return;
    }
    const db = levelup(
      leveljs(config.name || 'site-data'),
      config.levelOptions || null,
    );
    Vue.prototype.$db = db;
    if (config.shortcuts) {
      const setFunc = async (key, value) => {
        if (typeof key !== 'string') {
          throw new Error('Key must be a string.');
        }
        return db.put(key, JSON.stringify(value));
      };
      const getFunc = async (key) => {
        if (typeof key !== 'string') {
          throw new Error('Key must be a string.');
        }
        return JSON.parse(await db.get(key));
      };
      Vue.prototype.$dbSet = setFunc;
      Vue.prototype.$dbPut = setFunc;
      Vue.prototype.$dbGet = getFunc;
    }
  },
};

export default plugin;
