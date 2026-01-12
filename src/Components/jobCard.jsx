function JobCard({ job, searchString }) {

    const getTitle = () => {
        if(searchString) {
            const regex = new RegExp(`(${searchString})`, 'gi');
            const parts = job.title.split(regex);
            return parts.map((part, index) =>
                regex.test(part) ? <mark key={index}>{part}</mark> : part
            );
        }
        return job.title;
    }

  return (
    <div className="job-card">
      <h3>{getTitle()}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <span>{job.type}</span>
    </div>
  );
}

export default JobCard;
