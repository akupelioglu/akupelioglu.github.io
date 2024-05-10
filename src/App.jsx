import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Arda Kupelioglu</h1>
        <h2>Experiences</h2>
        <div>
          <h3> Simulation and Modelling Engineer - EUROPEAN COUNCIL FOR NUCLEAR RESEARCH</h3>
          <ul>
            <li>Led pioneering pollutant dispersion modelling at CERN, utilizing CFD techniques to preempt potential accidental discharges at particle accelerator facilities.</li>
            <li>Seamlessly integrated wind tunnel test results with computational simulations to ensure stringent regulatory safety compliance.</li>
            <li>Collaborated with key stakeholders to craft comprehensive requirements and workﬂow pipelines, culminating in the creation of highly accurate 3D digital surface models.</li>
            <li>Employed advanced mesh benchmarking and testing methodologies to optimize geometry designs, leveraging multi-physics simulations for unparalleled precision.</li>
            <li>Spearheaded multiphase simulations utilizing RANS and LES approaches via Ansys Fluent, ensuring robust and comprehensive analysis.</li>
            <li>Meticulously maintained project documentation and enhanced expertise in vacuum technology and cryogenic physics, contributing to project success and regulatory adherence.</li>
            <li>Received acclaim for contributions, paving the way for further career advancement and professional growth.</li>
          </ul>
        </div>
        <div>
          <h3> Vehicle Dynamics Software Engineer - APPLUS IDIADA</h3>
          <ul>
            <li>Spearheaded the development of cutting-edge vehicle performance analysis software, facilitating data manipulation, monitoring, and comprehensive reporting.</li>
            <li>Orchestrated stakeholder meetings to meticulously deﬁne test requirements and strategize optimal sensor placements, ensuring precise and eﬀective testing protocols.</li>
            <li>Programmed a diverse array of test scenarios and fostered seamless collaboration across interdisciplinary teams to propose innovative solutions, enhancing overall project eﬃcacy.</li>
            <li>Cultivated strong client relationships through regular communication and diligent progress updates, fostering trust and satisfaction.</li>
            <li>Played a pivotal role in enhancing international codebases by making signiﬁcant contributions across various programming languages, driving software excellence and global impact.</li>
            <li>Revolutionized testing procedures by automating test execution, resulting in streamlined reporting processes and contributing to the successful closure of sales deals.</li>
          </ul>
        </div>
        <div>
          <h3> Research and Development Engineer - STUDENT FORMULA TEAM</h3>
          <ul>
            <li>I enhanced performance data analysis through script development for instrumentation data reading and post-processing.</li>
            <li>Responsible for devising eﬃcient methods to extract and interpret instrumentation data, aiming to evaluate the performance metrics of the formula team's vehicle, requiring a deep understanding of both technical data processing and project-speciﬁc requirements.</li>
            <li>Leveraged expertise in scripting languages and data analysis techniques to create tailored solutions. Collaborated with team members to identify crucial parameters for accurate performance assessment. Developed scripts to automate data reading and implemented algorithms for post-processing to derive meaningful insights.</li>
            <li>Signiﬁcantly improved the eﬃciency and accuracy of performance data analysis workﬂow. Streamlined data processing, reducing manual eﬀort and errors. Enhanced ability to evaluate vehicle performance and contributed to informed decision-making and continuous improvement within the team.</li>
          </ul>
        </div>

        <h2>Education</h2>
        <div>
          <h3> Master of Science ADVANCED MECHANICAL ENGINEERING - University of Southampton</h3>
          <h3> Bachelor of Engineering  - AERONAUTICS AND ASTRONAUTICS ENGINEERING WITH FOUNDATION YEAR - University of Southampton </h3>
        </div>

        <h2>Languages</h2>
        <p>Turkish(Native) English(Fluent) Spanish(Intermediate)</p>
        <h2>Skills</h2>
        <div>
          <h3> CODING LANGUAGES </h3>
          <p>CSS3 React C/C++ JS HTML5 Python MATLAB GIT</p>
          <h3> MODELLING AND SIMULATION </h3>
          <p>SolidWorks COMSOL Abaqus Ansys</p>
          <h3> REPORTING </h3>
          <p>Notion MSOffice MarkDown</p>
          <h3> OPERATING SYSTEMS </h3>
          <p>Linux Windows MacOs</p>
        </div>
      </div>
    </>
  )
}

export default App
