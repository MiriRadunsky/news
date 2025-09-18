import MainContent from "./MainContent.jsx";
const PoliticsPage = ({ articles }) => {
  const filtered = articles.filter(a => a.category === "Politics");
  return <MainContent articles={filtered} />;
};

export default PoliticsPage;
