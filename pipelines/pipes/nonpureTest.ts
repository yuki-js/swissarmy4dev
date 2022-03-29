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
          const chainId = {
            Ethereum: "0x1",
            Polygon: "0x89",
            Avalanche: "0xa86a",
          }[network];

          const [
            {
              caveats: [{ value: addresses }],
            },
          ] = await (window as any).ethereum.request({
            method: "wallet_requestPermissions",
            params: [
              {
                eth_accounts: {},
              },
            ],
          });

          await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId }],
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
