import { useState } from "react";
import jobsData from "./jobsData/data.jsx";
import FilterBar from "./components/FilterBar";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = jobsData
    .filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(job =>
      location ? job.location === location : true
    )
    .filter(job =>
      type ? job.type === type : true
    );

  return (
    <div className="container">
      <h1>Job Listings</h1>

      <FilterBar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
      />

      <JobList jobs={filteredJobs} searchString={search} />
    </div>
  );
}

export default App;
