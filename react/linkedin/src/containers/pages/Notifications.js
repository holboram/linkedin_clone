import React from 'react';

import CardMainSection from '../../components/UI/CardMainSection';
import Card from '../../components/UI/Card.js';
import UserNotification from '../../components/notifications/UserNotification';
import Advertising from '../../components/Advertising.js';
import Footer from '../../components/Footer.js';

import notificationImg_1 from '../../assets/notification-1.jpeg';
import notificationImg_2 from '../../assets/notification-2.jpeg';
import notificationImg_3 from '../../assets/notification-3.jpeg';
import notificationImg_4 from '../../assets/notification-4.jpeg';
import notificationImg_5 from '../../assets/notification-5.jpeg';

import styles from './Notifications.module.scss';
const Notifications = () => {
  return (
    <CardMainSection>
      {/* Aside Left */}
      <div className={styles['height']}>
        <Card className={styles['wrapper-left']}>
          <div className={styles['wrapper-left__title']}>
            <h3>Notifications</h3>
            <p>You’re all caught up! Check back later for new notifications</p>
          </div>
          <div className={styles['wrapper-left__settings-summary']}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M22 18a4.52 4.52 0 00-1.17-2.83L19 13l-.8-5.56A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13l-1.83 2.17A4.52 4.52 0 002 18v1h8.28a2 2 0 103.44 0H22zM12 4a4.29 4.29 0 014.23 3.72L17 13H7l.77-5.3A4.26 4.26 0 0112 4zM4.32 17c.12-.19.24-.37.38-.55L6.77 14h10.46l2 2.42a4.67 4.67 0 01.41.58z"></path>
            </svg>
            <span>Improve your notifications</span>
            <a href="settings">View Settings</a>
          </div>
        </Card>
      </div>
      <div className={styles['wrapper-center-right']}>
        {/* Center */}
        <main className={styles['wrapper-center']}>
          <ul className={styles['wrapper-center__feed-list']}>
            <UserNotification
              notificationImg={notificationImg_1}
              name="Alexandru F."
              content="Striving to promote and preserve rural Japan communities. Promoting renewable energy development and"
              about="HR & Business Strategist, International Trainer & Career Coach #bringing human back into HR#"
              time="9"
            />
            <UserNotification
              notificationImg={notificationImg_2}
              name="UP RISE UP"
              content="Striving to promote and preserve rural Japan communities. Promoting renewable energy development and"
              about="HR & Business Strategist, International Trainer & Career Coach #bringing human back into HR#"
              time="9"
            />
            <UserNotification
              notificationImg={notificationImg_3}
              name="young.culture"
              content="Striving to promote and preserve rural Japan communities. Promoting renewable energy development and"
              about="HR & Business Strategist, International Trainer & Career Coach #bringing human back into HR#"
              time="9"
            />
            <UserNotification
              notificationImg={notificationImg_4}
              name="ReBecca Compton"
              content="Striving to promote and preserve rural Japan communities. Promoting renewable energy development and"
              about="HR & Business Strategist, International Trainer & Career Coach #bringing human back into HR#"
              time="15"
            />
            <UserNotification
              notificationImg={notificationImg_5}
              name="Chloe Lewis-Short"
              content="Striving to promote and preserve rural Japan communities. Promoting renewable energy development and"
              about="HR & Business Strategist, International Trainer & Career Coach #bringing human back into HR#"
              time="17"
            />
          </ul>
        </main>
        {/* Aside right */}
        <Card className={styles['wrapper-right__transparent']}>
          <Advertising />
          <Footer />
        </Card>
      </div>
    </CardMainSection>
  );
};

export default Notifications;
