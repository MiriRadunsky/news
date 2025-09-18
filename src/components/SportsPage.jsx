import MainContent from "./MainContent.jsx";

const SportsPage = ({ articles }) => {
  const filtered = articles.filter(a => a.category === "Sports");
  return <MainContent articles={filtered} />;
};

export default SportsPage;
