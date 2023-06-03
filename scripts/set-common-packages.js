// Node file which writes the line '{ "type": "commonjs" }' to dist/cjs/package.json and '{ "type": "module" }' to dist/mjs/package.json

const fs = require('fs');
const path = require('path');

const cjsPackageJsonPath = path.join(
  __dirname,
  '..',
  'dist',
  'cjs',
  'package.json',
);
const mjsPackageJsonPath = path.join(
  __dirname,
  '..',
  'dist',
  'mjs',
  'package.json',
);

const cjsPackageJson = { type: 'commonjs' };
const mjsPackageJson = { type: 'module' };

// Create the two files
fs.writeFileSync(
  cjsPackageJsonPath,
  JSON.stringify(cjsPackageJson, null, 2),
  'utf8',
);
fs.writeFileSync(
  mjsPackageJsonPath,
  JSON.stringify(mjsPackageJson, null, 2),
  'utf8',
);
