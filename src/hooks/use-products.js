import { useStaticQuery, graphql } from "gatsby"
export const useProducts = () => {
  const { allContentfulProduct } = useStaticQuery(
    graphql`
      {
        allContentfulProduct {
          edges {
            node {
              sku
              slug
              price
              image {
                title
                file {
                  url
                }
              }
              productDescription {
                productDescription
              }
              productName {
                productName
              }
            }
          }
        }
      }
    `
  )
  return allContentfulProduct.edges
}