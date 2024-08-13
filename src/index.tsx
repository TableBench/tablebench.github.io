import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom"
import Leaderboard from "./LeaderboardComp"

import "./index.css"

// import mockDataInfillingLightSpan from "./mocks/code_infilling_light_span.json"
// import mockDataInfillingMultiLine from "./mocks/code_infilling_multi_line.json"
// import mockDataInfillingSingleLine from "./mocks/code_infilling_single_line.json"
// import mockDataInfillingSpan from "./mocks/code_infilling_span.json"
// import mockDataComplete from "./mocks/code_complete.json"
// import mockDataExpalin from "./mocks/code_expalin.json"

import mockDataPoT from "./mocks/TableBench_PoT.json"
import mockDataSCoT from "./mocks/TableBench_SCoT.json"
import mockDataTCoT from "./mocks/TableBench_TCoT.json"
import mockDataDP from './mocks/TableBench_DP.json'



const LeaderboardTabs = () => {
  // State to track the currently selected tab
  const [activeTab, setActiveTab] = useState('tab1');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to render the leaderboard based on the selected tab
  const renderLeaderboard = () => {
    // console.log(activeTab);
    switch (activeTab) {
      case 'tab1':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataDP, "DP"]} />;
      case 'tab2':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataTCoT, "TCoT"]} />;
      case 'tab3':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataSCoT, "SCoT"]} />;
      case 'tab4':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataPoT, "PoT"]} />;
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <div className="tabs-container" style={{ justifyContent: 'center', width: '70vw', margin: '0 auto' }}>
      <ul className={`tabs ${isMobile ? 'mobile' : ''}`}>
        <li className={activeTab === 'tab1' ? 'is-active' : ''} onClick={() => setActiveTab('tab1')}><a>DP</a></li>
        <li className={activeTab === 'tab2' ? 'is-active' : ''} onClick={() => setActiveTab('tab2')}><a>TCoT</a></li>
        <li className={activeTab === 'tab3' ? 'is-active' : ''} onClick={() => setActiveTab('tab3')}><a>SCoT</a></li>
        <li className={activeTab === 'tab4' ? 'is-active' : ''} onClick={() => setActiveTab('tab4')}><a>PoT</a></li>
      </ul>
      <div className="tab-content">
        {renderLeaderboard()}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <section className="hero">
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns  is-fullwidth">
            <div className="column has-text-centered is-fullwidth">
              <h1 className="title is-1 publication-title">
              TableBench: A Comprehensive and Complex Benchmark for Table Question Answering
              </h1>
              <div className="column has-text-centered">
                <div className="publication-links">

                  <span className="link-block" style={{ padding: '10px' }}>
                    <a href="https://arxiv.org/abs/2406.07436"
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="fas fa-file-pdf"></i>
                      </span>
                      <span>Paper</span>
                    </a>
                  </span>

                  <span className="link-block" style={{ padding: '10px' }}>
                    <a href="https://github.com/TableBench/TableBench"
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Code</span>
                    </a>
                  </span>
                  <span className="link-block" style={{ padding: '10px' }}>
                    <a href="https://huggingface.co/datasets/Multilingual-Multimodal-NLP/TableBench"
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="far fa-images"></i>
                      </span>
                      <span>TableBench</span>
                    </a>
                  </span>

                  <span className="link-block" style={{ padding: '10px' }}>
                    <a href="https://huggingface.co/datasets/Multilingual-Multimodal-NLP/TableInstruct"
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="far fa-images"></i>
                      </span>
                      <span>TableInstruct</span>
                    </a>
                  </span>

                  <span className="link-block" style={{ padding: '10px' }}>
                    <a
                      href="https://mceval.github.io"
                      className="external-link button is-normal is-rounded is-dark"
                    >
                      <span className="icon">
                        <i className="fas fa-home"></i>
                      </span>
                      <span>Home</span>
                    </a>
                  </span>

                </div>
              </div>
              <div className="column has-text-centered">
                <LeaderboardTabs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
)