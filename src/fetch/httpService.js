import instance from './instance';

function getUserInfo(params, callback) {
  return instance('/user/getUserInfo', params, data => {
    callback(data)
  });
}

const httpService = {
  getUserInfo: getUserInfo
};

export default httpService;
