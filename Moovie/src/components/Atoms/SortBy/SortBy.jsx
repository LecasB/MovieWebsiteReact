import "./SortBy.css";

const SortBy = ({ onChange }) => {
  return (
    <div className="title-genres">
      <h1>All Movies</h1>
      <select className="selectStyle" onChange={onChange}>
        <option value="relevance">relevance</option>
        <option value="name">name</option>
        <option value="year">year</option>
      </select>
    </div>
  );
};

export default SortBy;
