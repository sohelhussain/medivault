import { AnchorProvider, Program, Idl, Wallet } from '@coral-xyz/anchor';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import idl from './idl.json';

// Define the network and commitment level
const network = 'http://127.0.0.1:8899'; // Localnet; use 'https://api.devnet.solana.com' for devnet
const commitment = 'confirmed';

// Create a connection to the Solana cluster
const connection = new Connection(network, commitment);

// Load your wallet's keypair from a local file or environment variable
// Ensure that the path to your keypair file is correct
import fs from 'fs';
const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync('/path/to/your/wallet/keypair.json', 'utf8')));
const keypair = Keypair.fromSecretKey(secretKey);

// Create a Wallet instance from the keypair
const wallet = new Wallet(keypair);

// Create an AnchorProvider instance
const provider = new AnchorProvider(connection, wallet, { commitment });

// Extract the program ID from the IDL
const programId = new PublicKey((idl as any).metadata.address);

// Create a Program instance
const program = new Program(idl as Idl, programId, provider);

export default program;
