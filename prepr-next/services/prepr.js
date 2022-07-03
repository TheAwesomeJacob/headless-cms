import { createPreprClient } from "@preprio/nodejs-sdk";

const prepr = createPreprClient({
 token: process.env.PREPR_ACCESS_TOKEN, // You can find one in your Prepr environment
 baseUrl: "https://graphql.prepr.io/graphql",
 userId: null, // Optional, used for AB testing implmentations
});

export { prepr };
