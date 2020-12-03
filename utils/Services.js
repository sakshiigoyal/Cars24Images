import request from './ApiCentral';

function fetchImageList() {
  return request({
    url: '/photos',
    method: 'GET',
  });
}

const Services = {
  fetchImageList,
};

export default Services;
