import MainContent from "./MainContent.jsx";
const BusinessPage = ({ articles }) => {
  const filtered = articles.filter(a => a.category === "Business");
  return <MainContent articles={filtered} />;
};

export default BusinessPage;
