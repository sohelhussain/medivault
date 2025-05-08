import { AnchorProvider, Program, Idl } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import idl from './idl.json';

const network = 'https://api.devnet.solana.com'; // or your preferred cluster
const connection = new Connection(network);
const provider = AnchorProvider.local(); // or configure with your wallet
const programId = new PublicKey(idl.metadata.address);

const program = new Program(idl as Idl, programId, provider);

export default program;
