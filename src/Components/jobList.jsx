import JobCard from "./JobCard";

function JobList({ jobs, searchString }) {
  if (jobs.length === 0) {
    return <p>No jobs found.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} searchString={searchString} />
      ))}
    </div>
  );
}

export default JobList;
