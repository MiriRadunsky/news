import MainContent from "./MainContent.jsx";

const WorldPage = ({ articles }) => {
  const filtered = articles.filter(a => a.category === "World");
  return <MainContent articles={filtered} />;
};

export default WorldPage;
