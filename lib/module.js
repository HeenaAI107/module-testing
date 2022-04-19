import path from 'path';

export default function ContentStackDelivery() {
  const options = Object.assign({}, this.options.contentstack);

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: Object.assign({}, options),
  });
}
