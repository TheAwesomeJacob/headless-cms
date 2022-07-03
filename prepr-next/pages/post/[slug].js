import Link from "next/link";
import { GetPosts, GetPostData } from "../../queries/preprQueries";
import { prepr } from "../../services/prepr";

function Post({ post }) {
 return (
   <div>
     <h1>{post.title}</h1>
     <p>{post.summary}</p>
     <Link href="/">
       <button>Go back</button>
     </Link>
   </div>
 );
}

export default Post;

export async function getStaticPaths() {
// Running GetPosts query using prepr client
 const postsData = await prepr.graphqlQuery(GetPosts).fetch();

 return {
   paths: postsData.data.posts.items.map((postData, index) => {
     const slug = String(postData._slug);
     return {
       params: {
         slug,
       },
     };
   }),
   fallback: false,
 };
}

export async function getStaticProps(context) {
 const slug = context.params.slug;
 // Running GetPostData query using prepr client
 const postData = await prepr
   .graphqlQuery(GetPostData)
   .graphqlVariables({ slug })
   .fetch();

 const post = postData.data.post;


 // Passing post as props
 return {
   props: { post },
 };
}
