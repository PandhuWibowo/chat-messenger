const getTimeStamp = _ => new Date().toISOString();

// INFO Logging
const info = (namespace, message, object = null) => {
  if (object) console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
  else console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
};

// WARNING Logging
const warn = (namespace, message, object = null) => {
  if (object) console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
  else console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
};

// DEBUG Logging
const debug = (namespace, message, object = null) => {
  if (object) console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
  else console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
};

// ERROR Logging
const error = (namespace, message, object = null) => {
  if (object) console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
  else console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
};

export default {
  info,
  warn,
  error,
  debug,
};
