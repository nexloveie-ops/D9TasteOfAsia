import { blogPosts } from '../data/menu';
import { SectionHeading } from './SectionHeading';

export function BlogSection() {
  return (
    <section className="section blog">
      <div className="container">
        <SectionHeading suptitle="Recent Updates" title="Use the Tips & Recipes" centered />

        <div className="news-block-row">
          {blogPosts.map((post) => (
            <article key={post.id} className="news-block">
              <div className="image-box">
                <div className="image">
                  <img src={post.image} alt="" loading="lazy" />
                </div>
                <div className="over-content">
                  <time className="date" dateTime={post.date}>
                    {post.date}
                  </time>
                  <div className="cat">{post.category}</div>
                  <h3 className="h4">
                    <a href="#">{post.title}</a>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
