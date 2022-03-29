import { Args, Enum, Int32, Nullable, String } from "@yuki-js/tinytype";
import { createPipeline } from "../pipeline";
import { createStep } from "../step";

const step0 = createStep({
  inArg: Args(
    Nullable(Enum("Wallet type", ["Web3 Provider", "WalletConnect"]))
  ),
  fn: async (args) => {
    const [walletType] = args;
    if (walletType === "Web3 Provider") {
      return createStep({
        inArg: Args(
          Enum("What network?", ["Ethereum", "Polygon", "Avalanche"])
        ),
        fn: async (args) => {
          const [network] = args;
          const networkId = {
            Ethereum: 1,
            Polygon: 2,
            Avalanche: 3,
          }[network];

          const addresses = await (window as any).ethereum.request({
            method: "eth_requestAccounts",
            params: [],
          });
          return createStep({
            inArg: Args(Enum("Address to use", addresses)),
            fn: async (args) => {
              const [address] = args;
              const result = await (window as any).ethereum.request({
                method: "eth_getBalance",
                params: [address, "latest"],
              });
              return createStep({
                inArg: Args(Int32("Balance")),
                sync: false,
                pure: true,
              })([result]);
            },
            pure: false,
            sync: false,
          })([addresses[0]]);
        },
        sync: false,
        pure: false,
      })(["Ethereum"]);
    } else if (walletType === "WalletConnect") {
      throw new Error("WalletConnect not implemented");
    } else {
      return null;
    }
  },
  sync: false,
  pure: true,
});

export default createPipeline({
  id: "nonpureTest",
  displayName: "nonpure test",
  initialStep: step0([null]),
});
