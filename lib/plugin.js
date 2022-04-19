import clientBuilder from 'contentstack-content-delivery-module/lib/client-builder'

export default (ctx, inject) => {
  // read from injected options
  const options = <%= JSON.stringify(options) %>
  
  inject('contentstack', clientBuilder(options))
}
