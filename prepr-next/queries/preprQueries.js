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
