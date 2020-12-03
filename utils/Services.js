import request from './ApiCentral';

function fetchImageList() {
  return request({
    url: 'https://jsonplaceholder.typicode.com/photos',
    method: 'GET',
  });
}

const Services = {
  fetchImageList,
};

export default Services;
