import {
  RESET_PASSWORD,
  SUBJECT_VERIFY_EMAIL,
  TOKEN_FOR_RESETTING_PASSWORD,
} from '@/constants';
import getDomain from '../utils/getDomain';
import { generateToken } from './token';
import { send } from './mailjet';
import { wrapEmail } from '../utils/emails';

export const sendForgetPasswordEmail = async (email: string, name: string) => {
  const text = wrapEmail(`
  <p class="p">Hello ${name}</p>
            <p class="p">
            We've received a request to reset your password. To complete this process, please tap on the link below: 
            </p>
            <p class="p blue-text">
            <a href="${getDomain()}/reset-password?token=${generateToken({
              tokenFor: TOKEN_FOR_RESETTING_PASSWORD,
              data: { email },
            })}" class="blue-text">Reset Password Link</a>
            </p>
            <p class="p">
            If you didn't make this request, please 
            <a href="${
              process.env.APP_URL
            }/contact-us"><span class="yellow-text">contact</span></a>
            our customer support immediately.
            </p>
            
            </p>
    `);
  await send({
    to: email,
    from: process.env.FROM_EMAIL as string,
    subject: RESET_PASSWORD,
    text,
  });
};

export const sendVerificationEmail = async (email: string, name: string) => {
  const text = wrapEmail(`
  <p class="email-heading">Confirm Your Email</p>
  <p class="p">Hi ${name},</p>
  <p class="p">
  <div class="div">
    <center>
      <a href='${getDomain()}/verification?token=${generateToken({
        tokenFor: TOKEN_FOR_RESETTING_PASSWORD,
        data: { email },
      })}'>
        <button class="button">
          Activate Account
        </button>
      </a>
    </center>
  </div>
  <p class="p">
  </p>
  <p class="p">
  </p>
    `);
  await send({
    to: email,
    from: process.env.FROM_EMAIL as string,
    subject: SUBJECT_VERIFY_EMAIL,
    text,
  });
};

export const sendNewContractEmail = async (email: string, name: string, contractName: string) => {
  const text = wrapEmail(`
  <p class="p">Hi ${name},</p>
  <p class="p">
  Welcome to AidChain! You have been invited to sign the contract: <strong>${contractName}</strong>.
  Please click on the link below to sign the contract.
  </p>
  <p class="p blue-text">
  <a href="${getDomain()}/inbox" class="blue-text">Sign Contract</a>
  </p>

  <p class="p">
  If you don't have an account, you can create one <a href="${getDomain()}/register" class="blue-text">here</a>.
  </p>
  `);
  await send({
    to: email,
    from: process.env.FROM_EMAIL as string,
    subject: 'New Contract',
    text,
  });
};
