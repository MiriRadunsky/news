import MainContent from "./MainContent.jsx";

const CulturePage = ({ articles }) => {
  const filtered = articles.filter(a => a.category === "Culture");
  return <MainContent articles={filtered} />;
};

export default CulturePage;
