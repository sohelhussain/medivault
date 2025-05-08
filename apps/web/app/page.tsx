import Image, { type ImageProps } from "next/image";
import program from '@anchor/program';

export default function Home() {

  const createPrescription = async () => {
    try {
      if (program?.methods?.createPrescription) {
        await program.methods
          .createPrescription('Prescription Data')
          .accounts({
            // specify required accounts
          })
          .rpc();
      } else {
        throw new Error('Program methods or createPrescription is undefined');
      }
      console.log('Prescription created successfully');
    } catch (error) {
      console.error('Error creating prescription:', error);
    }
  };

  return (
    <div>
      <h1>Create Prescription</h1>
      <button onClick={createPrescription}>Create</button>
    </div>
  );
}
