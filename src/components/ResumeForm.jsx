export default function ResumeForm({
  resume,
  setResume,
}) {
  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-panel">
      <h2>Resume Details</h2>

      <input
        name="name"
        placeholder="Name"
        value={resume.name}
        onChange={handleChange}
      />

      <input
        name="title"
        placeholder="Job Title"
        value={resume.title}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={resume.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={resume.phone}
        onChange={handleChange}
      />

      <textarea
        name="summary"
        placeholder="Summary"
        value={resume.summary}
        onChange={handleChange}
      />
    </div>
  );
}