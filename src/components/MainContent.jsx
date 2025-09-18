import "../css/mainContent.css";
const MainContent = ({ articles = [] }) => {
  return (
    <div className="main-content">
      <h2>Latest Articles</h2>
      <div className="article-list">
        {articles.map((article) => (
          <div key={article.id} className="article-item">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <span className="article-meta">
              {article.category} - {article.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
