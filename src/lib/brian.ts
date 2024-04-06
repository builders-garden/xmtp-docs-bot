import { BrianSDK } from "@brian-ai/sdk";

export const brian = new BrianSDK({
  apiKey: process.env.BRIAN_API_KEY as string,
});
