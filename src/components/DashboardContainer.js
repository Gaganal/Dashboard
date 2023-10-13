import styles from "./DashboardContainer.module.css";

const DashboardContainer = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuChild} />
      <div className={styles.sideMenuItem} />
      <div className={styles.listMenu}>
        <img
          className={styles.icon24OutlineKeySqua}
          alt=""
          src="/icon--24--outline--keysquare.svg"
        />
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.listMenu1}>
        <img
          className={styles.icon24OutlineKeySqua}
          alt=""
          src="/3dsquare-1.svg"
        />
        <div className={styles.product}>Product</div>
        <img
          className={styles.chevronRight2Icon}
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      <div className={styles.listMenu2}>
        <img
          className={styles.icon24OutlineKeySqua}
          alt=""
          src="/usersquare-1.svg"
        />
        <div className={styles.product}>Customers</div>
        <img
          className={styles.chevronRight2Icon}
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      <div className={styles.listMenu3}>
        <img
          className={styles.icon24OutlineKeySqua}
          alt=""
          src="/walletmoney-2.svg"
        />
        <div className={styles.product}>Income</div>
        <img
          className={styles.chevronRight2Icon}
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      <div className={styles.listMenu4}>
        <img
          className={styles.icon24OutlineKeySqua}
          alt=""
          src="/discountshape-1.svg"
        />
        <div className={styles.product}>Promote</div>
        <img
          className={styles.chevronRight2Icon}
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      <div className={styles.listMenu5}>
        <img
          className={styles.icon24OutlineKeySqua}
          alt=""
          src="/messagequestion-1.svg"
        />
        <div className={styles.product}>Help</div>
        <img
          className={styles.chevronRight2Icon}
          alt=""
          src="/chevronright-2.svg"
        />
      </div>
      <img className={styles.sideMenuInner} alt="" src="/ellipse-8@2x.png" />
      <div className={styles.evanoParent}>
        <div className={styles.evano}>Evano</div>
        <div className={styles.projectManager}>Project Manager</div>
      </div>
      <img
        className={styles.chevronDown2Icon}
        alt=""
        src="/chevrondown-2.svg"
      />
      <div className={styles.accessPro}>
        <div className={styles.accessProChild} />
        <div className={styles.upgradeToPro}>
          Upgrade to PRO to get access all Features!
        </div>
        <div className={styles.cta}>
          <div className={styles.ctaChild} />
          <div className={styles.getProNow}>Get Pro Now!</div>
        </div>
      </div>
      <div className={styles.dashboardParent}>
        <div className={styles.dashboard1}>Dashboard</div>
        <img className={styles.setting1Icon} alt="" src="/setting-1.svg" />
      </div>
      <div className={styles.v01}>v.01</div>
    </div>
  );
};

export default DashboardContainer;
