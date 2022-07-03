import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import { GetPosts, GetArticles } from "../queries/preprQueries";
import { prepr } from "../services/prepr";

  export default function Home({ posts, articleHeadline, articleImage }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our new Page
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <div key={post._id} className={styles.card}>
              <Link href={`/post/${post._slug}`}>{post.title}</Link>
            </div>
          ))}
          <div className={styles.card}>
            <Link href='google.com'>{articleHeadline}</Link>
          </div>
          {articleImage.map((image) => (
              <Image src={image.url} alt="Article Image" width={100} height={100} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    
  )
}

export async function getStaticProps(context) {
 // Running GetPosts query using prepr client
 const postsData = await prepr.graphqlQuery(GetPosts).fetch();
 const postsDataArticle = await prepr.graphqlQuery(GetArticles).fetch();
 const posts = postsData.data.posts.items;
 const articleHeadline = postsDataArticle.data.article.headline;
 const articleImage = postsDataArticle.data.article.image;

 articleImage.map((image) => (
  console.log(image)
))

 

 // Passing posts as props
 return {
   props: { posts, articleHeadline, articleImage },
 };
}


