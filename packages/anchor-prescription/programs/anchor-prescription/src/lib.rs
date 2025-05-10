use anchor_lang::prelude::*;

declare_id!("7CFLAA3YZTvtoi2bMgWegw5QbuoD5LS9kcekuumPbHKa");

#[program]
pub mod anchor_prescription {
    use super::*;

    pub fn create_prescription(ctx: Context<CreatePrescription>, data: String) -> Result<()> {
        let prescription = &mut ctx.accounts.prescription;
        prescription.data = data;
        prescription.authority = *ctx.accounts.authority.key;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreatePrescription<'info> {
    #[account(init, payer = authority, space = 8 + 32 + 280)]
    pub prescription: Account<'info, Prescription>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Prescription {
    pub authority: Pubkey,
    pub data: String,
}
