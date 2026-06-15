import "../styles/resume.css";

export default function ResumePreview() {
  return (
    <div className="resume-page">
      {/* Header */}
      <div className="header">
        <h1>MOHAMMED ARBAAZ KHAN</h1>

        <h3>Laravel Developer</h3>

        <div className="contact">
          <span>📞 7304733409</span>
          <span>✉ arbaazkhan007.ak3@gmail.com</span>
          <span>🔗 linkedin.com/in/arbaazkhan03</span>
          <span>📍 Thane</span>
        </div>
      </div>

      <div className="main-grid">
        {/* LEFT */}
        <div className="left">
          <section>
            <h2>SUMMARY</h2>

            <p>
              Backend Developer with 3.9 years of experience in Laravel, PHP,
              MySQL, REST APIs, HRMS, payroll, attendance management, workflow
              automation, and third-party integrations. Built scalable backend
              systems for leave management, payroll processing, and attendance
              synchronization.
            </p>
          </section>

          <section>
            <h2>EXPERIENCE</h2>

            <div className="job">
              <h4>Laravel Full Stack Developer</h4>

              <p className="blue">Core Ocean Solutions Pvt Ltd</p>

              <small>June 2025 - Present | Thane</small>

              <ul>
                <li>
                  Built and maintained RESTful APIs and backend services using
                  Laravel and MySQL.
                </li>

                <li>
                  Integrated third-party APIs and notification services across
                  multiple applications.
                </li>

                <li>
                  Developed HRMS and analytics modules for employee, attendance,
                  salary, and reporting workflows.
                </li>
                <li>
                  Collaborated with frontend teams to deliver scalable backend
                  solutions and clean API contracts.
                </li>
              </ul>
            </div>

            <div className="job">
              <h4>Laravel Backend Developer</h4>

              <p className="blue">Fyntune Solutions Pvt Ltd</p>

              <small>Nov 2022 - July 2025 | Turbhe</small>

              <ul>
                <li>
                  Developed HRMS modules for leave management, attendance,
                  payroll, and reporting.
                </li>

                <li>
                  Integrated attendance management system APIs with HRMS for
                  real-time leave and attendance synchronization.
                </li>

                <li>
                  Optimized leave approval and cancellation workflows with
                  hierarchical approvals and payroll validation checks.
                </li>
                <li>
                  Enhanced salary generation logic using attendance data,
                  improving payroll accuracy and automation.
                </li>
                <li>
                  Implemented payroll change requests for salary, pension, and
                  supplementary calculations.
                </li>
              </ul>
            </div>

            <div className="job">
              <h4>Internship</h4>

              <p className="blue">Commtex Solutions Pvt</p>

              <small>Jun 2022 - Oct 2022 | Chembur Mumbai</small>

              <ul>
                <li>Developed and implemented user-friendly interfaces.</li>

                <li>Integrated APIs to dynamically fetch data.</li>

                <li>Provided backend support during testing.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>PROJECT</h2>

            <h4>Employee Benefits</h4>

            <p className="blue">Organization Name</p>

            <ul>
              <li>Developed custom backend solutions.</li>

              <li>Implemented REST APIs.</li>

              <li>Improved overall application workflow.</li>
            </ul>
          </section>
        </div>

        {/* RIGHT */}
        <div className="right">
          <section>
            <h2>EDUCATION</h2>

            <div className="edu">
              <h4>BSCIT</h4>
              <p className="blue">JSRS COLLEGE, KALWA</p>
              <small>2017 - 2020</small>
            </div>

            <div className="edu">
              <h4>MCA</h4>
              <p className="blue">ASM IMCOST, THANE</p>
              <small>2020 - 2022</small>
            </div>

            <div className="edu">
              <h4>HSC</h4>
              <p className="blue">Satish Pradhan College</p>
            </div>

            <div className="edu">
              <h4>SSC</h4>
              <p className="blue">Shreerang Vidyalaya</p>
            </div>
          </section>

          <section>
            <h2>OTHER PROJECTS</h2>

            <h4>Quote Management System</h4>

            <ul>
              <li>Backend development.</li>
              <li>Database design.</li>
              <li>Code review and testing.</li>
            </ul>

            <h4>Analytics Reports</h4>

            <ul>
              <li>Built analytics dashboard.</li>
              <li>Generated reports.</li>
              <li>Laravel + MySQL.</li>
            </ul>
          </section>

          <section>
            <h2>SKILLS</h2>

            <div className="skill-list">
              <span>Laravel</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>REST API</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
