
import Link from 'next/Link'
import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import NewsItem from '@/components/NewsItem'
export default function Home({news}) {
  return (
    <Layout>
     <h1>Latest News</h1>
     {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
{news.length > 0 && (
          <Link href="/news">
            <a className="btn-secondary">View All News</a>
          </Link>
        )}
    </Layout>
  )
}


export async function getStaticProps(context) {
  const res = await fetch(`${API_URL}/api/news`)
  const news = await res.json();
  console.log(news)

  if (!news) {
    return {
      notFound: true,
    }
  }

  return {
    props: { news }, // will be passed to the page component as props
  }
}