# contentstack-content-delivery-module

contentstack-content-delivery-module is a module for connecting contenstack backend with your nuxt app. Using our module you can fetch contentstack api and display the data accroding to the requirements.

# Installation

Use the node package manager to install contentstack-content-delivery-module

```bash
npm i contentstack-content-delivery-module
```

# Add module in nuxt.config.js file

Add contentstack-content-delivery-module module in nuxt.config.js file.

```bash
export default {
  build: {
    transpile: ['contentstack-content-delivery-module']
  },
  modules: [
    'contentstack-content-delivery-module'
  ],
  contentstack: {
    locale:'en-us',
    environment: {
        apiKey: process.env.CONTENTSTACK_API_KEY,
        accessToken: process.env.CONTENTSTACK_DELIVERY_TOKEN,
        environment: process.env.CONTENTSTACK_ENVIRONMENT,
        apiHost: process.env.CONTENTSTACK_API_HOST
        ? process.env.CONTENTSTACK_API_HOST
        : '',
    }
  },
}
```

Create .env file in your root folder.

```bash
CONTENTSTACK_API_KEY = {api_key_of_your_stack}
CONTENTSTACK_DELIVERY_TOKEN = {delivery_token_of_the_environment}
CONTENTSTACK_ENVIRONMENT = {environment_name}
CONTENTSTACK_API_HOST = {api_host}
CONTENTSTACK_REGION = eu  //Compulsory param for EU users. NA users need not add this param.
```

# Usage

Add the following script to your .vue file and use it in your template.

```bash
<script>
import RenderComponents from '../components/RenderComponents'
export default {
  components: {
    RenderComponents,
  },
	async asyncData({ app }) {
		const data =
		await app.$contentstack.client.getSpecificEntryByUrlAndReference(
			'page',
			['page_components.from_blog.featured_blogs'],
			'/'
		)
		return {
		data: data[0][0],
		}
	}
}
</script>
```
