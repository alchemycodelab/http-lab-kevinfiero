module.exports = rawRequest => {
  const rawRequestArray = rawRequest.split('\r');
  const requestInfo = rawRequestArray[0].split(' ');
  const method = requestInfo[0];
  const path = requestInfo[1];

  const index = rawRequest.indexOf('{');
  const body = JSON.parse(rawRequest.substring(index, rawRequest.length));

  return { body, method, path };
};
