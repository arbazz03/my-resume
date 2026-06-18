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
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
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
      const { jsPDF }   = await import("jspdf");

      const el = resumeRef.current;

      // Capture ONLY the visible rendered size — not scrollHeight
      const rect = el.getBoundingClientRect();
      const canvas = await html2canvas(el, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        width: rect.width,
        height: rect.height,        // exact rendered height, no extra space
        windowWidth: rect.width,
        windowHeight: rect.height,
      });

      const imgData = canvas.toDataURL("image/png");

      // Convert px to mm: 1px = 0.264583mm at 96dpi
      const pxToMm = 0.264583;
      const contentW = rect.width  * pxToMm;   // should be ~210mm
      const contentH = rect.height * pxToMm;   // actual content height in mm

      // Create PDF exactly the size of the content (no blank space)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [contentW, contentH],   // custom page size = exact content
        compress: true,
      });

      pdf.addImage(imgData, "PNG", 0, 0, contentW, contentH);
      pdf.save("Mohammed_Arbaaz_Resume.pdf");
    } catch (err) {
      console.error("PDF download failed:", err);
      alert("PDF download failed.\nnpm install html2canvas jspdf");
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
              <section className="r-section">
                <h2 className="r-section-title">Summary</h2>
                <p className="r-body-text">
                  Backend Developer with 3.9+ years of experience in designing and developing
                  scalable web applications using Laravel, PHP, MySQL, REST APIs, and third-party
                  integrations. Experienced in building enterprise-level HRMS, Attendance
                  Management, Payroll, and Employee Benefit systems. Strong expertise in business
                  workflow automation, API integration, payroll processing, database design, and
                  performance optimization. Proven ability to translate complex business
                  requirements into efficient backend solutions while maintaining code quality
                  and system reliability.
                </p>
              </section>

              {/* EXPERIENCE */}
              <section className="r-section">
                <h2 className="r-section-title">Experience</h2>

                <div className="r-job">
                  <h4 className="r-job-title">Laravel Full Stack Developer</h4>
                  <p className="r-company">Coreocean Solutions LLP</p>
                  <small className="r-meta">07/2025 – Present | Thane</small>
                  <ul className="r-list">
                    <li>Developed and maintained a comprehensive HRMS application for employee management, attendance tracking, leave management, payroll processing, and reporting.</li>
                    <li>Owned implementation of complex business workflows: leave approvals, cancellation, role-based hierarchy, payroll validations, and attendance synchronization.</li>
                    <li>Enhanced the payroll engine by automating salary calculations using attendance, leave, and supplementary components.</li>
                    <li>Delivered business-critical enhancements across HRMS, payroll, reporting, and employee management modules.</li>
                    <li>Optimized application performance, database queries, and backend logic to improve system reliability.</li>
                    <li><strong>Skills:</strong> Laravel, MySQL, HTML, CSS, Gitlab, Cpanel.</li>
                  </ul>
                </div>

                <div className="r-job">
                  <h4 className="r-job-title">Laravel Backend Developer</h4>
                  <p className="r-company">FynTune Solution Private Limited</p>
                  <small className="r-meta">09/2022 – 07/2025 | Turbhe, Navi Mumbai</small>
                  <ul className="r-list">
                    <li>Developed custom backend solutions using Laravel to streamline data processing and improve system efficiency.</li>
                    <li>Implemented RESTful APIs to facilitate seamless communication between front-end and back-end systems.</li>
                    <li>Managed third-party API integrations and communication channels to notify users for events.</li>
                    <li>Integrated third-party APIs and services to enhance functionality of internal systems.</li>
                    <li><strong>Skills:</strong> Laravel, MySQL, Gitea, Postman.</li>
                  </ul>
                </div>
              </section>

              {/* PROJECTS */}
              <section className="r-section">
                <h2 className="r-section-title">Projects</h2>

                <div className="r-job">
                  <h4 className="r-job-title">Human Resource Management System (HRMS)</h4>
                  <ul className="r-list">
                    <li>Developed HRMS Web app to manage employee data, attendance, and salary operations.</li>
                    <li>Built authentication modules — login, logout, role-based access control using Laravel.</li>
                    <li>Integrated AdminLTE dashboard; built attendance tracking and salary slip generation modules.</li>
                    <li><strong>Skills:</strong> Laravel, AdminLTE, MySQL, Blade, HTML/CSS.</li>
                  </ul>
                </div>

                <div className="r-job">
                  <h4 className="r-job-title">Quote Management System</h4>
                  <ul className="r-list">
                    <li>Led backend development and database schema design; participated in code reviews.</li>
                    <li>Collaborated with frontend team to ensure seamless API integration and data flow.</li>
                    <li><strong>Skills:</strong> Laravel, MySQL, Github.</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* ════ RIGHT COLUMN ════ */}
            <div className="r-right">

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
                    "Postman", "AdminLTE", "Blade", "Cpanel",
                  ].map((s) => (
                    <span key={s} className="r-skill-tag">{s}</span>
                  ))}
                </div>
              </section>

              {/* LANGUAGES */}
              <section className="r-section">
                <h2 className="r-section-title">Languages</h2>
                <div className="r-lang-list">
                  {[
                    ["English", "Professional"],
                    ["Hindi",   "Native"],
                    ["Urdu",    "Native"],
                  ].map(([lang, level]) => (
                    <div className="r-lang-item" key={lang}>
                      <span className="r-lang-name">{lang}</span>
                      <span className="r-lang-level">{level}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}