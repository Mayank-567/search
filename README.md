# AI Product Recommender - for Shopify stores

This is a sample chatbot that uses Gadget's built-in Shopify and OpenAI connections to recommend product to shoppers.

For details on the Gadget connections, as well as features like response streaming from HTTP routes and native vector support see the [tutorial](https://docs.gadget.dev/guides/tutorials/ai-product-recommender).

## Table of contents

- [Getting started](#getting-started)
- [App overview](#app-overview)
  - [Starter template](#starter-template)
  - [Connections](#connections)
  - [Data modeling + template overview](#data-modeling-template-overview)
    - [Template default models](#template-default-models)
  - [Environment variables](#environment-variables)
  - [Backend (actions + code)](#backend-actions-code)
  - [Access roles + API permissions](#access-roles-api-permissions)
  - [Frontend](#frontend)
- [Extending this template](#extending-this-template)
- [Questions?](#questions)

## Getting started

To set up and test this app:

- Go to the Shopify Connections page in Gadget: Connections -> Shopify -> add a Development app
- Set up a Shopify connection by creating a new Shopify Partners app
  - Copy the Client Key and Secret from the Partners dashboard into Gadget
  - Copy the URL and Redirection URL over to the Partners dashboard
- Install the Shopify app on a development store
- **This app has a custom frontend that will be moved to `.backup` files after you connect to Shopify. To get the chatbot frontend, you need to remove the new `frontend/ShopPage.jsx`, `frontend/App.jsx`, and `frontend/App.css` files, then remove the `.backup` file suffix from the original files**
- Sync data from the Shopify store by going to your Shopify Connection -> Shop Installs -> Sync Data
- View the app by clicking on your app domain in the top of the Gadget nav bar -> Go to app -> Development

You can now try out your app's development environment!

## App overview

### Starter template

This app is built using the **Shopify app** starter template.

### Connections

- A **Shopify** connection is already set up for this app, with the **products/read** scope selected and the **shopifyProduct** and **shopifyProductImage** models imported.
  - You need to add your Shopify Client Key and Secret for the development environment (and production, if desired!) 
- An **OpenAI** connection is also set up, and uses the Gadget-supplied OpenAI API key by default
  - Note: New teams get $50 in OpenAI credits, requests made using the Gadget-supplied OpenAI key use these credits!

### Data modeling + template overview

- `shopifyProduct`
  - synced Shopify product data
- `shopifyProductImage`
  - synced Shopify product images

#### Template default models

- `shopifyShop`
   - keeps track Shopify shops that your app has been installed on
- `shopifyGdprRequest`
   - provides an interface for dealing with GDPR requests
- `shopifySync`
   - records all attempted syncs, triggered manually, via code, or the automatic nightly sync
- `session`
  - keeps track of user sessions

### Environment variables

No additional environment variables are being used in this app.

### Backend (actions + code)

#### Model actions

- `shopifyProduct/actions/create.js` and `shopifyProduct/actions/update.js` both call a function defined in `shopifyProduct/utils.js` that creates a vector embedding for the product name and description using the OpenAI connection

#### HTTP routes

- `routes/POST-chat.js` is the main chatbot route, and uses the OpenAI connection to create a vector for a user's entered text, finds the most similar product embeddings (vector similarity search = cosine similarity) and then uses LangChain to stream a response along with the top 3 product recommendations

### Access roles + API permissions

No custom permissions are used for this app.

### Frontend

- `frontend/App.jsx` is the main frontend file, and defines the main frontend route
- `frontend/Chat.jsx` is the chatbot component/page and manages the stream response and recommendations from calling the `POST-chat.js` route 

All other files are part of the Shopify app template.

## Extending this template

Make sure to add your own OpenAI API key to the OpenAI connection, and your own Shopify Client Key and Secret to the Shopify connection before deploying to production!

For more information on vector fields, cosine similarity, and building AI apps, take a look at our docs for [building AI apps in Gadget](https://docs.gadget.dev/guides/building-ai-apps).

## Questions?

Join our [developer Discord](https://ggt.link/discord) if you have any questions about this template or Gadget!