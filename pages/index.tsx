import React from 'react';
import {
  MdPerson,
  MdLightbulbOutline,
} from 'react-icons/md';
import {
  FaBriefcase,
  FaUniversity,
  FaStar,
  FaTools,
} from 'react-icons/fa';

import Seo from 'features/app/Seo';
import { EXPERIENCE, ExperienceRow } from 'features/data/cv';
import styles from './index.module.scss';

const ExpPlace = ({ data }: { data: ExperienceRow }) => {
  return (
    <div className={styles.xblock}>
      <div className={styles.xdates}>{data.start} - {data.end || 'present'}{data.location ? <span>{data.location}</span> : null}</div>
      <h4>{data.title}</h4>
      <div className={styles.xcompany}>
        {data.link ? (<a href={data.link} rel="nofollow" target="_blank">{data.company}</a>) : data.company}
      </div>
      {data.desc ? <div className={styles.xdesc}>{data.desc}</div> : null}
      {data.keywords ? (<div className={styles.xkeywords}>Keywords: {data.keywords}</div>) : null}
    </div>
  );
};

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Seo title="Vladislav Shishporenok CV" />
      <div className={styles.header}>
        <div className={styles.col}>
          <span className={styles.fio}>
              Vladislav Shishporenok
          </span>
        </div>
        <div className={styles.col}>
          <ul>
            <li><span>Address:</span>Erevan, Armenia, open to relocate</li>
            <li><span>Email address:</span>vshishporenok@gmail.com</li>
            <li><span>Web:</span>worldcitizen.web.app</li>
            <li><span>Linkedin:</span>linkedin.com/in/vladislav-shishporenok-92437a106</li>
          </ul>
        </div>
      </div>
      <article>
        <div className={styles.col}>
          <section className={styles.profile}>
            <h3><MdPerson />Summary</h3>
            <div>
              Received bachelor degree at Financial University Under the Government of Russian Federation, specialization is "International Finance". I am hard- working, responsible, smart. Have skills in financial analysis. My main goal for today is to build up a good career.
            </div>
          </section>
          <section>
            <h3><FaBriefcase />Experience</h3>
            <div>
              {EXPERIENCE.slice(0, 3).map(x => <ExpPlace data={x} />)}
            </div>
          </section>
        </div>
        <div className={styles.col}>
          {/* <section>
            <h3><FaBriefcase />Work experience</h3>
            <div>
              {EXPERIENCE.slice(3).map(x => <ExpPlace key={x.title} data={x} />)}
            </div>
          </section> */}
          <section>
            <h3><FaTools />Side Projects</h3>
            <div>
              <ExpPlace
                data={{
                  start: '2021',
                  // end: '2008',
                  // location: 'Global',
                  title: 'Maker',
                  desc: 'My Cool Side Project',
                  company: 'Home',
                  link: 'https://google.com',
                  keywords: 'python, kubernetes',
                }}
              />
            </div>
          </section>
          <section>
            <h3><FaUniversity />Education</h3>
            <div>
              <ExpPlace
                data={{
                  start: '2014',
                  end: '2018',
                  location: 'RUSSIA',
                  title: 'Bachelor\'s degree, International Finance',
                  company: 'Finance University under the Government of the Russian Federation',
                }}
              />
            </div>
          </section>
          <section className={styles.skills}>
            <h3><MdLightbulbOutline />Licenses & Certifications</h3>
            <div>
              {[
                {
                  title: 'Bloomberg Market Concepts',
                  recs: ['Bloomberg LP'],
                },
                {
                  title: 'Bloomberg Essentials',
                  recs: ['Bloomberg LP'],
                },
                {
                  title: 'ACCA F1',
                  recs: ['ACCA'],
                },
                {
                  title: 'ACCA F3',
                  recs: ['ACCA'],
                },
              ].map(s => (
                <div key={s.title}><span>{s.title}:</span> {s.recs.join(', ')}</div>
              ))}
            </div>
          </section>
          <section className={styles.keywords}>
            <h3><FaStar />Keywords</h3>
            <div>
              {['Data Warehouse Architecture', 'Database Design', 'PL/SQL', 'Financial Modeling', 'International Finance', 'XBRL', 'Data Modeling', 'Data Warehousing', 'Gitlab', 'Confluence', 'Miro', 'JIRA', 'Apache Airflow', 'Docker', 'Tableau'].map(k => (
                <span key={k}>{k}</span>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Layout;
