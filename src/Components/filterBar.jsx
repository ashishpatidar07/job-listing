function FilterBar({ search, setSearch, location, setLocation, type, setType }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
      </select>
    </div>
  );
}

export default FilterBar;
