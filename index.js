/**
 * render function is copy from https://segmentfault.com/a/1190000004428305
 * @param {String} template
 * @param {*} context
 * @return {String}
 */
function render(template, context) {
  const tokenReg = /\{([^{}]+)\}/g;

  return template.replace(tokenReg, function(word, token) {
    const variables = token.replace(/\s/g, '').split('.');
    let currentObject = context;
    let i; let length; let variable;

    for (i = 0, length = variables.length; i < length; ++i) {
      variable = variables[i];
      currentObject = currentObject[variable];
      if (currentObject === undefined || currentObject === null) return '';
    }
    return currentObject;
  });
}

/**
 * mapConvert
 * @param {Object} source source Data
 * @param {*} schema definition schema
 * @return {*}
 */
function mapConvert(source, schema) {
  let ret = {};

  switch (Object.prototype.toString.call(schema)) {
    case '[object Object]':
      for (const key in schema) {
        if (Object.prototype.hasOwnProperty.call(schema, key)) {
          ret[key] = mapConvert(source, schema[key]);
        }
      }
      break;
    case '[object Array]':
      ret = schema.map((itemSchema) => mapConvert(source, itemSchema));
      break;
    case '[object String]':
      ret = render(schema, source);
      break;
    default:
      ret = schema;
  }

  return ret;
}

module.exports = mapConvert;
exports.mapConvert = mapConvert;
