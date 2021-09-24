import Country from './../../../models/Country';

export default {
  Query: {
    countries: async (parent, args, { db }, info) => {
      return Country.findAll();
    },
  },
};
