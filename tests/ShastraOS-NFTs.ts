import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { ShastraOsNfTs } from "../target/types/shastra_os_nf_ts";

describe("ShastraOS-NFTs", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ShastraOsNfTs as Program<ShastraOsNfTs>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
