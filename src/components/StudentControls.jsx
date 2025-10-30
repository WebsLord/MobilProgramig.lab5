import React from 'react';

function StudentControls({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
}) {
  const handleSortToggle = () => {
    // Sıralamayı tersine çevir
    setSortOrder((prevOrder) => (prevOrder === 'desc' ? 'asc' : 'desc'));
  };

  return (
    <div className="controls">
      {/* Milestone 4.1: Filtreler */}
      <div className="filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'pass' ? 'active' : ''}`}
          onClick={() => setFilter('pass')}
        >
          Pass
        </button>
        <button
          className={`filter-btn ${filter === 'fail' ? 'active' : ''}`}
          onClick={() => setFilter('fail')}
        >
          Fail
        </button>
      </div>

      {/* Milestone 4.1: Arama */}
      <input
        type="text"
        placeholder="Search by name"
        className="input search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Milestone 4.1: Sıralama */}
      <button className="btn sort-btn" onClick={handleSortToggle}>
        Sort: {sortOrder === 'desc' ? 'High → Low' : 'Low → High'}
      </button>
    </div>
  );
}

export default StudentControls;