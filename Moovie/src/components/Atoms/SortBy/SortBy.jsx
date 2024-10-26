const SortBy = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="relevance">relevance</option>
      <option value="name">name</option>
      <option value="year">year</option>
    </select>
  );
};

export default SortBy;
