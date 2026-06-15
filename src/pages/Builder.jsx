import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import "../styles/resume.css";

export default function Builder() {
  const [resume, setResume] = useState({
    name: "Mohammed Arbaaz Khan",
    title: "Laravel Developer",
    email: "arbaaz@gmail.com",
    phone: "7304733409",
    summary:
      "Backend developer experienced in Laravel and REST APIs.",
  });

  return (
    <div className="builder">
      <ResumeForm resume={resume} setResume={setResume} />

      <ResumePreview resume={resume} />
    </div>
  );
}