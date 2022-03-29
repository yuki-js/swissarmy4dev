import { Args, Int32, Nullable, String } from "@yuki-js/tinytype";
import { Contract, ContractFactory, ethers } from "ethers";
import { createIoPipeline } from "../io";

export default createIoPipeline({
  id: "deployEthereumContract",
  displayName: "Deploy Ethereum Contract",
  inArg: Args(String("Contract Bytecode"), Int32("Gas Limit")),
  outArg: Args(String("Contract Address")),
  fn: async (bytecode, gasLimit) => {
    const provider = new ethers.providers.Web3Provider(
      (globalThis as any).ethereum
    );
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const factory = new ContractFactory([], bytecode);
    const contract = await factory.connect(signer).deploy({ gasLimit });
    return [contract.address] as const;
  },
});
