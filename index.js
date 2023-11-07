import defaults from 'defaults';
import Handlebars from 'handlebars';
import fsTools from 'fs-tools';
const { walk } = fsTools;
import path from 'path';

function onFile(file, stats, next) {
  const id = path.basename(file, path.extname(file));
  import(path.resolve(file)).then(module => {
    for (var key of Object.keys(module)) {
      const fn = module[key];
      let name = fn.name;
      if (name === "default") {
        name = id;
      } else if (!name) {
        name = key;
      }
      Handlebars.registerHelper(name, fn);
    }
    next();
  }).catch(next);
}

export default function (options) {
  options = defaults(options, {
    directory: 'helpers',
    pattern: /\.js$/
  });
  return function (files, metalsmith, done) {
    walk(metalsmith.path(options.directory), options.pattern, onFile, done);
  }
}
