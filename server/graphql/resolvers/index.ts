import { userMutations, projectMutations } from './mutations';
import { userQueries, projectQueries } from './queries';
import projectTypes from './project-bridge/types';
import Date from './types/Date';
import { User, Generation } from './types';

const resolvers = {
  Query: {
    ...userQueries,
    ...projectQueries,
  },
  Mutation: {
    ...userMutations,
    ...projectMutations,
  },
  Date,
  ...projectTypes,
  User,
  Generation,
};

export default resolvers;
