let baseParams = {
  guid: guid(),
  source: 'H',
  version: '1.0'
};

let instance = (url, objParams, callback) => {
  let params = Object.assign(baseParams, objParams);
  fetch(getBaseURL() + url, {
    method: 'post',
    headers: {
      'Accept': 'text/html',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(json => {
    if (callback) {
      callback(json);
    }
  }).catch(err => {
    console.log(err.message);
  });
}

function getBaseURL() {
  let baseURL = 'http://172.16.150.198:54673/v1';
  const origin = window.location.origin;

  switch (origin) {
    case 'http://172.16.152.117':
      //test环境
      baseURL = 'http://172.16.152.109:54671/v1';
      break;
    case 'http://172.16.151.159':
      //foftest环境
      baseURL = 'http://172.16.151.160:54671/v1';
      break;
    case 'http://galaxysit.qiangungun.com':
      //sit环境
      baseURL = 'http://mobilesit.qiangungun.com/v1';
      break;
    case 'https://galaxypre.qiangungun.com':
      //预发环境
      baseURL = 'https://mobilepre.qiangungun.com/v1';
      break;
    case 'https://galaxy.qiangungun.com':
      //生产环境
      baseURL = 'https://mobile.qiangungun.com/v1';
      break;
    default:
      //默认开发环境
      baseURL = 'http://172.16.150.198:54673/v1';
  }
  return baseURL;
}

function guid() {
  let guid = "";
  for (let i = 1; i <= 32; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
  }
  return guid;
}

export default instance;
