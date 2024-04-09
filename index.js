const userdata = require("./MOCK_DATA.json");
const graphql = require("graphql");
const {
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList
} = graphql;

const UserType = require("./TypeDefs/usertype");


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {id: {GraphQLInt}},
            resolve(parent, args) {
                return //mongoDB here
            }
        },
        getAllOrders: {
            type: new GraphQLList(OrderType),
            args: {id: {GraphQLInt}},
            resolve(parent, args) {
                return //mongoDB here
            }
        },
        OrderLookup: {
            type: new GraphQLList(Order),
            args: {id: {GraphQLInt}},
            resolve(parent, args) {
                return //mongoDB here
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
     createUser: {
        type: UserType,
        args: {
            firstName: {type: GraphQLString},
            lastName: { type: GraphQLString}, 
            email: {type: GraphQLString},
            password: {type: GraphQLString},

        },
        resolve(parent, args) {
            userData.push({id: userData.length + 1, firstName: args.firstName, lastName: args.lastName, email: args.email, password: args.password, 
            });
            return args
            db.query(INTO)//database
        }
     }

    }
});


module. exports = new GraphQLSchema({query: RootQuery , mutation: Mutation })