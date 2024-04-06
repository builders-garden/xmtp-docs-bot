import "dotenv/config";
import { privateKeyToAccount } from "viem/accounts";
import HandlerContext from "./handler-context";
import run from "./runner.js";
import { brian } from "./lib/index.js";

run(async (context: HandlerContext) => {
  const { message } = context;
  const wallet = privateKeyToAccount(process.env.KEY as `0x${string}`);

  const { content, senderAddress } = message;

  if (senderAddress?.toLowerCase() === wallet.address?.toLowerCase()) {
    // safely ignore this message
    return;
  }

  const brianResponse = await brian.ask({
    prompt: content,
    kb: process.env.BRIAN_KB || "xmtp-kb",
  });

  await context.reply(brianResponse.text);
});
