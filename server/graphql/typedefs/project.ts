/* Project related typedefs */

const projectTypedefs = `
    type Generation {
      id: ID!
      nRooms: Int
      nBathrooms: Int
      location: String
      keyFeatures: String
      images: [String]
      description: String
      createdAt: Date
      name: String
      createdBy: ID
      city: String
      payload: String
      fullResponse: String
      errorMessage: String
    }
    type Project {
      id: ID!
      name: String
      createdAt: Date
      createdBy: ID!
      generations: [Generation]
    }
    type Query {
      myProjects(id: String): [Project]
      myGenerations: [Generation]
      adminGenerations(
        hasError: Boolean
        userId: String
      ): [Generation]
    }
    type Mutation {
      createProject(name: String): Project
      deleteProject(id: ID!): Project
      updateGeneration(
        id: ID!
        description: String
        name: String
      ): Generation
      deleteGeneration(id: ID!): Generation
    }
`;

export default projectTypedefs;
