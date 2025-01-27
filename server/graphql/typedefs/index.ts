import { gql } from 'graphql-tag';
import projectTypedefs from './project';

const typeDefs = gql`
  scalar Date

  enum SubscriptionStatus {
    NULL
    ACTIVE
    EXPIRED
    CANCELED
  }
  type Subscription {
    id: String
    expiryDate: Date
    status: SubscriptionStatus
  }

  type Comment {
    comment: String
    id: String
    commentDoC: Date
    user: User
  }

  type Contract {
    id: String
    name: String
    contractType: String
    contractStartDate: Date
    contractEndDate: Date
    sendTo: String
    contractFile: String
    description: String
    comments: [Comment]
    history: [String]
    status: String
  }

  type User {
    id: String!
    name: String
    email: String
    address: String
    tokenExpiryDate: Date
    state: String
    country: String
    prompt: String
    systemPrompt: String
    requestCount: Int
    isAdmin: Boolean
    isDisabled: Boolean
    profileImage: String
    aiTokens: String
    aiTemperature: String
    aiModel: String
    aiKey: String
    phone: String
    company: String
    propertyDescriptions: [String]
    subscription: Subscription
    isEmailVerified: Boolean
  }

  type LoginResponse {
    token: String
    error: String
    user: User
  }

  type StatusResponse {
    message: String
    status: String!
  }
  type MessageResponse {
    message: String!
  }

  type DescriptionResponse {
    response: String
    generation: Generation
  }

  type MailResponse {
    status: String
  }

  type Query {
    user: User
    users: [User]
    contracts(folder: String): [Contract]
    getContract(id: String!): Contract
  }
  type UploadResponse {
    url: String
  }
  type Mutation {
    registerUser(
      name: String!
      email: String!
      address: String
      state: String
      country: String
      password: String!
      phone: String
      company: String
    ): User
    updateUserById(
      id: ID!
      prompt: String
      systemPrompt: String
      requestCount: Int
      isDisabled: Boolean
      aiModel: String
      aiKey: String
      aiTokens: String
      aiTemperature: String
      password: String
      tokenExpiryDate: Date
      isEmailVerified: Boolean
    ): User
    updateUser(
      name: String
      email: String
      currentPassword: String
      newPassword: String
      image: String
      phone: String
      company: String
      propertyDescriptions: [String]
    ): User
    login(email: String!, password: String!): LoginResponse!
    sendResetPasswordLink(email: String!): MessageResponse!
    resetPassword(password: String!, token: String!): StatusResponse!
    sendVerificationEmail(email: String!): MessageResponse!
    verifyEmail(token: String!): StatusResponse!
    updateAdminStatus(userId: String!, status: Boolean): User
    deleteUser(id: String!): User
    mailDescriptionToMe(content: String!): MailResponse
    uploadImage(base64: String): UploadResponse
    sendContactMessage(
      name: String
      email: String
      avgMonthlyListing: String
      message: String
    ): MailResponse

    sendPhoneOtp(phoneNo: String): StatusResponse
    phoneOtpLogin(otp: String, phoneNo: String): LoginResponse!
    signContract(
      contractId: String
    ): Contract
    createContract(
      contractType: String
      contractStartDate: Date
      contractEndDate: Date
      name: String
      sendTo: String
      contractFile: String
      description: String
    ): Contract
  }

  ${projectTypedefs}
`;

export default typeDefs;
