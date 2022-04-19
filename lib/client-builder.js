import ContentstackContentDelivery from '../src/index';

export default (options) => {
  const environments = new ContentstackContentDelivery(options);

  return {
    client: environments,
  };
};
