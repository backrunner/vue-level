/* eslint-disable no-param-reassign */
import levelup from 'levelup';
import leveljs from 'level-js';

const plugin = {
  install(Vue, config) {
    const db = levelup(
      leveljs(config.name || 'site-data'),
      config.levelOptions || null,
    );
    Vue.prototype.$db = db;
    if (config.shortcuts) {
      Vue.prototype.$dbSet = async (key, value) => {
        if (typeof key !== 'string') {
          throw new Error('Key must be a string.');
        }
        return db.set(key, JSON.stringify(value));
      };
      Vue.prototype.$dbGet = async (key) => {
        if (typeof key !== 'string') {
          throw new Error('Key must be a string.');
        }
        return JSON.parse(await db.get(key));
      };
    }
  },
};

export default plugin;
