module.exports = {
  "*.{ts,tsx}": [
    "prettier --write",
    "tslint -c tslint.json 'src/**/*.ts' --fix",
    "git add",
    "jest -c .jestrc.json --bail --findRelatedTests"
  ],
  "*.{json,md}": ["prettier --write", "git add"],
  "*.css": ["prettier --write", "stylelint", "git add"]
};