const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((cat) => (
          <button
            key={cat}
            onClick={() => handleClick(cat)}
            className={currentFilter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </nav>
    </div>
  );
}
