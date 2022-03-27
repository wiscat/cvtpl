import Layout from 'features/app/Layout';
import Seo from 'features/app/Seo';

import styles from './404.module.scss';

export default function Custom404() {
  return (
    <Layout backLink="/">
      <Seo title="404"/>
      <div className={styles.box404}>
        <div className="content">
          <div className="page">
            <h1 className={styles.title}><span>NOT FOUND</span></h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
