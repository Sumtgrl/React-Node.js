import "./blog.css"
import BlogItems from "./blogItems"
const Blog = () => {
    return (
    <section className="blogs">
    <div className="container">
      <div className="section-title">
        <h2>From Our Blog</h2>
        <p>Summer Collection New Morden Design</p>
      </div>
      <ul className="blog-list">
        <BlogItems></BlogItems>
        <BlogItems></BlogItems>
        <BlogItems></BlogItems>
      </ul>
    </div>
  </section>
  )
  }
  export default Blog