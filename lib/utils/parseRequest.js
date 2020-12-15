module.exports = rawRequest => {
  let request = '';

  const rawRequestArray = rawRequest.split('\r');
  const requestInfo = rawRequestArray[0].split(' ');
  const method = requestInfo[0];
  const path = requestInfo[1];

  const index = rawRequest.indexOf('{');
  if(index !== -1){
    let body = rawRequest.substring(index, rawRequest.length);
    body = body.replace(/\s\s|:\s/g, '');
    request = { body, method, path };
  } else {
    request = { method, path };
  }

  return request;
};
