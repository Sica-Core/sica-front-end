import gql from "graphql-tag";

export default gql`
    query GET_PRODUCTS {
        getProducts @rest(type: "GET_PRODUCTS_REQUEST", path: "/Shop/products") {
            result @type(name: "ProductsResult") {
                products @type(name: "Product"){
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