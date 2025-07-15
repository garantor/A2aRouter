import { mainAgent, z } from "../genkit";

export function getSupportedChains(): string[] {
  return ["Polygon", "Arbitrum", "Optimism", "Base", "Ethereum"];
}


export const supportedChains = mainAgent.defineTool(
  {
    name: "supportedChains",
    description: "Get a list of supported chains for the A2A JS SDK",
    inputSchema: z.object({}),
    outputSchema: z.object({
      chains: z.array(z.string())
    }),
  },
  async () => {
    const chains = getSupportedChains();
    return { chains };
  }
);