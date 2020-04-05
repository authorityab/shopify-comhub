export default class Server() {
  // init() {

  //   console.log('server init');
  //
  //   require('isomorphic-fetch');
  //
  //   import core from '@shopify-comhub/core';
  //   const next = require('next');
  //   const dotenv = require('dotenv');
  //   const session = require('koa-session');
  //
  //   const Koa = require('koa');
  //   const Router = require('koa-router');
  //
  //   const {  verifyRequest  } = require('@shopify/koa-shopify-auth');
  //   const {  ApiVersion  } = require('@shopify/koa-shopify-graphql-proxy');
  //   const {  default: createShopifyAuth  } = require('@shopify/koa-shopify-auth');
  //   const {  receiveWebhook, registerWebhook  } = require('@shopify/koa-shopify-webhooks');
  //
  //   dotenv.config();
  //
  //   const port = parseInt(process.env.PORT, 10) || 3000;
  //   const dev = process.env.NODE_ENV !== 'production';
  //   const app = next({ dev });
  //   const handle = app.getRequestHandler();
  //
  //   const SHOPIFY_API_SECRET_KEY = process.env.SHOPIFY_API_SECRET;
  //   const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
  //   const HOST = process.env.HOST;
  //
  //   app.prepare().then(() => {
  //     const server = new Koa();
  //     const router = new Router();
  //
  //     console.log(core);
  //
  //     server.use(session({
  //       secure: true,
  //       sameSite: 'none'
  //     }, server));
  //     server.keys = [SHOPIFY_API_SECRET_KEY];
  //
  //     server.use(
  //       createShopifyAuth({
  //         apiKey: SHOPIFY_API_KEY,
  //         secret: SHOPIFY_API_SECRET_KEY,
  //         scopes: ['read_products', 'write_products', 'read_orders', 'write_orders'],
  //         async afterAuth(ctx) {
  //           const {
  //             shop,
  //             accessToken
  //           } = ctx.session;
  //           ctx.cookies.set('shopOrigin', shop, {
  //             httpOnly: false,
  //             secure: true,
  //             sameSite: 'none'
  //           });
  //           const productsRegistration = await registerWebhook({
  //             address: `${HOST}/webhooks/products/create`,
  //             topic: 'PRODUCTS_CREATE',
  //             accessToken,
  //             shop,
  //             apiVersion: ApiVersion.Unstable
  //           });
  //
  //           const ordersRegistration = await registerWebhook({
  //             address: `${HOST}/webhooks/orders/create`,
  //             topic: 'ORDERS_CREATE',
  //             accessToken,
  //             shop,
  //             apiVersion: ApiVersion.Unstable
  //           });
  //
  //           if (productsRegistration.success) {
  //             console.log('Successfully registered product webhook!');
  //           } else {
  //             console.log('Failed to register product webhook', productsRegistration.result);
  //
  //             console.log(productsRegistration.result.data.webhookSubscriptionCreate.userErrors);
  //           }
  //
  //           if (ordersRegistration.success) {
  //             console.log('Successfully registered order webhook!');
  //           } else {
  //             console.log('Failed to register order webhook', ordersRegistration.result);
  //
  //             console.log(ordersRegistration.result.data.webhookSubscriptionCreate.userErrors);
  //           }
  //         },
  //       }),
  //     );
  //
  //     const webhook = receiveWebhook({
  //       secret: SHOPIFY_API_SECRET_KEY
  //     });
  //
  //     router.post('/webhooks/orders/create', webhook, (ctx) => {
  //       console.log('received webhook order: ', ctx.state.webhook);
  //
  //       ctx.state.webhook.payload
  //     });
  //
  //     router.post('/webhooks/products/create', webhook, (ctx) => {
  //       console.log('received webhook product: ', ctx.state.webhook);
  //     });
  //
  //     router.get('*', verifyRequest(), async (ctx) => {
  //       await handle(ctx.req, ctx.res);
  //       ctx.respond = false;
  //       ctx.res.statusCode = 200;
  //     });
  //     server.use(router.allowedMethods());
  //     server.use(router.routes());
  //
  //     server.listen(port, () => {
  //       // core.comHub.sendOrder({a: 4});
  //       // console.log(core);
  //       console.log(`> Ready on http://localhost:${port}`);
  //     });
  //
  //   })
  //   .catch(error => console.log('server crashed: ' + error));
  //
  // }
}
