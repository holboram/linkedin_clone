import React from 'react';

import NavJobLink from '../../components/jobs/NavJobLink.js';
import JobRecommendation from '../../components/jobs/JobRecommendation.js';
import Advertising from '../../components/Advertising.js';
import Footer from '../../components/Footer.js';

import CardMainSection from '../../components/UI/CardMainSection.js';
import Card from '../../components/UI/Card.js';

import clientServerLogo from '../../assets/client-server.jpeg';
import designMyNightLogo from '../../assets/design-my-night.jpeg';
import smartfireLogo from '../../assets/smartfire.jpeg';
import wevideoLogo from '../../assets/wevideo.jpeg';

import styles from './Jobs.module.scss';

const Jobs = () => {
  return (
    // Main section
    <CardMainSection>
      {/* Aside Left */}
      <div className={styles['height']}>
        <Card>
          <ul className={styles['wrapper-left__nav-list']}>
            <NavJobLink linkText="My Jobs" svgPath="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z" link="my-jobs" />
            <NavJobLink
              linkText="Job Alerts"
              svgPath="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"
              link="job-alerts"
            />
            <NavJobLink
              linkText="Salary"
              svgPath="M12 9.88A2.13 2.13 0 119.88 12 2.13 2.13 0 0112 9.88M12 9a3 3 0 103 3 3 3 0 00-3-3zm9-4H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM4 7h2.13A2.13 2.13 0 014 9.13V7zm0 10v-2.12A2.13 2.13 0 016.13 17H4zm16 0h-2.12A2.13 2.13 0 0120 14.88V17zm0-3a3 3 0 00-3 3H7a3 3 0 00-3-3v-4a3 3 0 003-3h10a3 3 0 003 3v4zm0-4.87A2.13 2.13 0 0117.88 7H20v2.13z"
              link="salary"
            />
            <NavJobLink
              linkText="Skill Assessments"
              svgPath="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"
              link="assessments"
            />
            <NavJobLink
              linkText="Interview Prep"
              svgPath="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"
              link="interview-prep"
            />
            <NavJobLink
              linkText="Resume Builder"
              svgPath="M15.5 2H4v20h16V6.5zM6 20V4h8v4h4v12z"
              link="resume-builder"
            />
            <NavJobLink
              linkText="Application Settings"
              svgPath="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"
              link="app-settings"
            />
          </ul>
        </Card>
      </div>
      <div>
        {/* Center */}
        <main>
          <ul className={styles['wrapper-center__list']}>
            <li className={styles['wrapper-center__list-item']}>
              <h1>Recommended for you</h1>
              <p>Based on your profile and search history.</p>
            </li>
            <JobRecommendation
              companyLogo={clientServerLogo}
              companyName="Client Server"
              companyPosition="Full Stack JavaScript Developer"
              jobLocation="London, UK"
              timePosted="9"
            />
            <JobRecommendation
              companyLogo={designMyNightLogo}
              companyName="DesignMyNight"
              companyPosition="PHP/Javascript Developer"
              jobLocation="London, UK"
              timePosted="9"
            />
            <JobRecommendation
              companyLogo={smartfireLogo}
              companyName="Smartfire"
              companyPosition="Développeur web"
              jobLocation="Lyon, France"
              timePosted="9"
            />
            <JobRecommendation
              companyLogo={wevideoLogo}
              companyName="WeVideo"
              companyPosition="Développeur web"
              jobLocation="Timisoara, Romania"
              timePosted="7"
            />
          </ul>
        </main>
      </div>
      {/* Aside right */}
      <aside className={styles['wrapper-right']}>
        <Advertising />
        <Footer />
      </aside>
    </CardMainSection>
  );
};
export default Jobs;
