import program from './program';
import { PublicKey, SystemProgram } from '@solana/web3.js';

export const createPrescription = async (
  prescriptionPublicKey: PublicKey,
  authorityPublicKey: PublicKey,
  data: string
) => {
  if (!program?.methods) {
    throw new Error('Program methods are not defined');
  }
  if (!program.methods) {
    throw new Error('Program methods are not defined');
  }
  if (!program?.methods?.createPrescription) {
    throw new Error('createPrescription method is not defined');
  }
  await program.methods.createPrescription(data)
    .accounts({
      prescription: prescriptionPublicKey,
      authority: authorityPublicKey,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
};
