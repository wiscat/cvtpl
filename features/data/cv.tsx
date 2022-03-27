import React from 'react';

export type ExperienceRow = {
  start: string,
  end?: string,
  location?: string,
  company: string,
  title: string,
  desc?: string | React.ReactNode,
  keywords?: string,
  link?: string,
};

export const EXPERIENCE: ExperienceRow[] = [
    {
        start: '10/2021',
        location: 'MOSCOW, RUSSIA',
        company: 'X5 FoodTech',
        title: 'Technical Project Manager at X5 FoodTech',
        desc: `• Creation of custom Tableau reports based on information from JIRA in realtime (transfer of Jira database to Postgres and connection of Postgres and Tableau). Helps to understand which business department waits for their tasks to be completed longer than others and allocate resources accordingly.
• Initialized migration of DWH from Postgres to Greenplum. Also initialized creation of DDS and DM layers (Data Vault model was chosen)
• Initialzed process of allocation of resources by business domains. Had helped to increase developers proficciency in certain business areas and thus to reduce time to complete tasks`,
        keywords: 'Gitlab, Confluence, Miro, PostgreSQL (PG plSQL), JIRA, Tableau',
    },
    {
        start: '11/2020',
        end: '10/2021',
        location: 'MOSCOW, RUSSIA',
        company: 'X5 FoodTech',
        title: 'System Analyst',
        desc: <>
<b>Responsibilities:</b><br/>
 • Development of DWH (Functional Requirements, Creation of Data Marts,Creation of ETL procedures)<br/>
 • Creation of Business Requirements Documentation<br/>
 • Creation of DWH Documentation in Confluence<br/>
 • Gathering business requierments from multiple teams and control of implementation of those requirements<br/>
<br/>
<b>Impact and key achievements</b><br/>
• Creation of automized code documentation in Confluence.Helped to in increase number of documented data marts to 60% from 10%<br/>
• Creation of automized financial data stream to 3P Partner. Helped to reduce number of hours spent by financial operations by 90% (they still conduct monthly comparison of financial figures with 3P Partner)<br/>
• Creation of Jira Task Template. Helped to reduce communication time between business department and development team
</>,
        keywords: 'Gitlab, Confluence, Miro, PostgreSQL (PG plSQL), JIRA, Apache Airflow, Docker',
    },
];
