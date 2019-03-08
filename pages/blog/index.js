import Link from 'next/link'
function Home() {
  return (
    <div>                      
        <Link href="/blog/about">
            <a>About</a>
        </Link> <br /> <br />


        <Link href="/blog/article-one">
            <a>Article-One</a>
        </Link> <br /> <br />


        <Link href="/blog/article-two">
            <a>Article-Two</a>
        </Link> <br /> <br />


        <Link href="/blog/article-three">
            <a>Article-Three</a>
        </Link> <br /> <br />
            
      <style global jsx>{`
      body{
        text-align: center;
        padding-top: 100px;
        margin-left: 200px;
        margin-right: 200px;        
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;        
        background-color: #dacece3d;
      }
      `}</style>
    </div>
  )
}

export default Home