import { useRef, useState } from "react";
import "../styles/resume.css";

export default function ResumePreview() {
  const resumeRef = useRef(null);
  const [downloadingPng, setDownloadingPng] = useState(false);
  const [downloadingPdf, setDownloadingPdf] = useState(false);

  // ── Download as PNG ──────────────────────────
  const handleDownloadPng = async () => {
    setDownloadingPng(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(resumeRef.current, {
        scale: 4, // better quality for A4
        useCORS: true,
        backgroundColor: "#ffffff",
        width: resumeRef.current.offsetWidth,
        height: resumeRef.current.offsetHeight,
      });
      const link = document.createElement("a");
      link.download = "Mohammed_Arbaaz_Resume.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("PNG download failed:", err);
      alert("PNG download failed.\nnpm install html2canvas");
    }
    setDownloadingPng(false);
  };

  // ── Download as PDF — exact preview match, 1 page ──
  // Install: npm install html2canvas jspdf
const handleDownloadPdf = async () => {
  setDownloadingPdf(true);
  try {
    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");

    const el = resumeRef.current;

    const canvas = await html2canvas(el, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 210;
    const pdfHeight = 297;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("Mohammed_Arbaaz_Resume.pdf");
  } catch (err) {
    console.error("PDF download failed:", err);
    alert("PDF download failed");
  }
  setDownloadingPdf(false);
};

  const isLoading = downloadingPng || downloadingPdf;

  return (
    <div className="resume-wrapper">

      {/* ── Toolbar ── */}
      <div className="resume-toolbar">
        <span className="toolbar-title">📄 Resume — A4 Portrait</span>
        <div className="toolbar-actions">
          <button className="btn-download btn-png" onClick={handleDownloadPng} disabled={isLoading}>
            {downloadingPng ? "⏳ Generating…" : "⬇ Download PNG"}
          </button>
          <button className="btn-download btn-pdf" onClick={handleDownloadPdf} disabled={isLoading}>
            {downloadingPdf ? "⏳ Generating…" : "⬇ Download PDF"}
          </button>
        </div>
      </div>

      {/* ── Resume Page ── */}
      <div className="resume-scroll">
        <div className="resume-page" ref={resumeRef}>

          {/* ══ HEADER — ATS reads <h1> as candidate name ══ */}
          <header className="r-header">
            <h1 className="r-name">Mohammed Arbaaz Riyaz Ahmed Khan</h1>
            <p className="r-role">Laravel Developer</p>
            <div className="r-contact">
              <span>📞 7304733409</span>
              <span>✉ arbaazkhan007.ak3@gmail.com</span>
              <span>🔗 linkedin.com/in/arbaazkhan03</span>
              <span>📍 Thane</span>
            </div>
          </header>

          {/* ══ BODY GRID ══ */}
          <div className="r-grid">

            {/* ════ LEFT COLUMN ════ */}
            <div className="r-left">

              {/* SUMMARY — ATS keyword-rich paragraph */}

              {/* EXPERIENCE */}
              <section className="r-section">
                <h2 className="r-section-title">Experience</h2>

                <div className="r-job">
                  <h4 className="r-job-title">Laravel Full Stack Developer</h4>
                  <p className="r-company">Coreocean Solutions LLP</p>
                  <small className="r-meta">07/2025 – Present | Thane</small>
                  <ul className="r-list">
                    <li>Owned full-stack backend architecture for an HRMS & Attendance platform built on Laravel 10, as the sole backend engineer supporting 1,500+ employees with zero downtime escalations</li>
                    <li>Designed and implemented business-critical modules including leave management, role-based access control (RBAC), multi-level approval workflows for leave management and payroll validation.</li>
                    <li>Enhanced the payroll engine by automating salary calculations using attendance, leave, and supplementary components.</li>
                    <li>Delivered business-critical enhancements across HRMS, payroll, reporting, and employee management modules.</li>
                    <li>Resolved critical performance bottlenecks by refactoring N+1 Eloquent queries and adding composite MySQL indexes, reducing HRMS dashboard load times on high-traffic reporting views.</li>
                    <li><strong>Tech Stack :</strong> Laravel, MySQL, HTML, CSS, Gitlab, Cpanel.</li>
                  </ul>
                </div>

                <div className="r-job">
                  <h4 className="r-job-title">Laravel Backend Developer</h4>
                  <p className="r-company">FynTune Solution Private Limited</p>
                  <small className="r-meta">09/2022 – 07/2025 | Turbhe, Navi Mumbai</small>
                  <h4 className="r-job-title">Employee Benefits</h4>
                  <ul className="r-list">
                    <li>Integrated SMS, Email, and WhatsApp communication APIs to trigger real-time notifications based on business events and workflow actions.</li>
                    <li>Managed third-party API integrations and communication channels to notify users for events.</li>
                    <li>Implemented RESTful APIs to facilitate seamless communication between front-end and back-end systems.</li>
                    <li>Developed custom backend solutions using Laravel to streamline data processing and improve system efficiency.</li>
                    <li><strong>Tech Stack :</strong> Laravel, MySQL, Gitea, Postman.</li>
                  </ul>
                </div>
              </section>

              {/* PROJECTS */}
              <section className="r-section">

                <div className="r-job">
                  <h4 className="r-job-title">Human Resource Management System (HRMS)</h4>
                  <ul className="r-list">
                    <li>Developed HRMS Web app to manage employee data, attendance, and salary operations.</li>
                    <li>Built authentication modules — login, logout, role-based access control using Laravel.</li>
                    <li>Integrated AdminLTE dashboard; built attendance tracking and salary slip generation modules.</li>
                    <li><strong>Tech Stack :</strong> Laravel, AdminLTE, MySQL, Blade, HTML/CSS.</li>
                  </ul>
                </div>

                <div className="r-job">
                  <h4 className="r-job-title">Quote Management System</h4>
                  <ul className="r-list">
                    <li>Assisted in leading the project as a backend developer.</li>
                    <li>Collaborated with frontend team to ensure seamless API integration and data flow.</li>
                    <li>Followed clean code practices and participated in sprint planning and code reviews.</li>
                    <li><strong>Tech Stack :</strong> Laravel, MySQL, Postman, Github.</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* ════ RIGHT COLUMN ════ */}
            <div className="r-right">

              <section className="r-section">
                <h2 className="r-section-title">Summary</h2>
                <p className="r-body-text">
                  Backend Developer with 3.9+ years of experience in designing and developing
                  scalable web applications using Laravel, MySQL, MVC Architecture, REST APIs, and third-party
                  integrations. Experienced in building enterprise-level HRMS, Attendance
                  Management, Payroll, and Employee Benefit systems. Strong expertise in business
                  workflow automation, API integration, payroll processing, database design, and
                  performance optimization. Proven ability to translate complex business
                  requirements into efficient backend solutions while maintaining code quality
                  and system reliability.
                </p>
              </section>

              {/* EDUCATION */}
              <section className="r-section">
                <h2 className="r-section-title">Education</h2>

                <div className="r-edu">
                  <h4 className="r-edu-degree">BSCIT</h4>
                  <p className="r-company">SJRS College, Kalwa</p>
                  <small className="r-meta">2017 – 2020</small>
                </div>

                <div className="r-edu">
                  <h4 className="r-edu-degree">MCA</h4>
                  <p className="r-company">ASM IMCOST, Thane</p>
                  <small className="r-meta">2020 – 2022</small>
                </div>

                <div className="r-edu">
                  <h4 className="r-edu-degree">HSC</h4>
                  <p className="r-company">Satish PradhanDnyanasadhana College</p>
                  <small className="r-meta">2017</small>
                </div>

                <div className="r-edu">
                  <h4 className="r-edu-degree">SSC</h4>
                  <p className="r-company">Shreerang Vidyalaya English Medium</p>
                  <small className="r-meta">2015</small>
                </div>
              </section>

              {/* SKILLS — ATS extracts each keyword from span text */}
              <section className="r-section">
                <h2 className="r-section-title">Skills</h2>
                <div className="r-skill-list">
                  {[
                    "Laravel", "PHP", "HTML", "CSS",
                    "MySQL", "Linux", "GitHub", "REST API",
                    "Postman", "Blade", "Cpanel", "React.js (Basic)"
                  ].map((s) => (
                    <span key={s} className="r-skill-tag">{s}</span>
                  ))}
                </div>
              </section>

              {/* LANGUAGES */}
              <section className="r-section">
                <h2 className="r-section-title">Languages</h2>

                <div className="r-lang-list">
                  {["English", "Hindi", "Marathi"].join(", ")}
                </div>
              </section>
              {/* <section className="r-section">
                <h2 className="r-section-title">Languages</h2>
                <div className="r-lang-list">
                  {[
                    ["English," ],
                    ["Hindi," ],
                    ["Marathi." ],
                  ].map(([lang, level]) => (
                    <div className="r-lang-item" key={lang}>
                      <span className="r-lang-name">{lang}</span>
                    </div>
                  ))}
                </div>
              </section> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}