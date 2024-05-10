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
          <h3> SIMULATION AND MODELLING ENGINEER </h3>
          <h3 class="company-class"> EUROPEAN COUNCIL FOR NUCLEAR RESEARCH </h3>
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

        <h2>Education</h2>
        <h2>Languages</h2>
        <h2>Skills</h2>
      </div>

    </>
  )
}

export default App
