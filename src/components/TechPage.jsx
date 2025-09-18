import MainContent from "./MainContent.jsx";

const TechPage = ({ articles }) => {
  const filtered = articles.filter(a => a.category === "Technology");
  return <MainContent articles={filtered} />;
};

export default TechPage;
