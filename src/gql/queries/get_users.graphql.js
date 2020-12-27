import gql from "graphql-tag";

export default gql`
    query GET_USERS {
        getUsers @rest(type: "GET_USERS_REQUEST", path: "/User/list") {
            result @type(name: "UsersResult") {
                users @type(name: "User"){
                    id
                    uid
                    firstName
                    lastName
                    userName
                    email
                    sicaTokens
                    isAdmin
                    isSicaBanned
                    avatarUrl
                    isSubscribed
                }
            }
        }
    }
`