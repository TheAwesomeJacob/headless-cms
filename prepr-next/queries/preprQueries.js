export const GetPosts = `
 query GetPostsQuery {
   posts: Posts {
     items {
       _id
       _slug
       title
     }
   }
 }`;

export const GetPostData = `
 query PostQuery($slug: String!) {
   post: Post (slug: $slug) {
       _id
       title
       summary
   }
 }`;

 export const GetArticles = `
 query GetArticles {
    article: Article(
      slug: "the-best-things-about-summer"
    ) {
      _id
      headline
      author {
        _id
        name
        image {
          url(width:800)
        }
      }
      intro
      image {
        url(width: 1000)
      }
      content {
        ... on Text {
          format
          body
        }
        ... on Assets {
          items {
            url(width:600)
          }
        }
      }
      tags {
          body
        }
      }
    }
 `
