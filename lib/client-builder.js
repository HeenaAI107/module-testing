import ContentstackContentDelivery from '../src/index';

export default (options) => {
  const environments = new ContentstackContentDelivery(options);
  
  /* this code is for testing */
  return {
    client: environments,
  };
};
