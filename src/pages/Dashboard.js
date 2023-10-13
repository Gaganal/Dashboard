import ContainerSummary from "../components/ContainerSummary";
import ContainerView from "../components/ContainerView";
import CustomerContainer from "../components/CustomerContainer";
import ProductCardForm from "../components/ProductCardForm";
import DashboardContainer from "../components/DashboardContainer";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.earning}>
        <img className={styles.earningChild} alt="" src="/rectangle-15.svg" />
        <ContainerSummary />
      </div>
      <ContainerView />
      <CustomerContainer />
      <ProductCardForm />
      <div className={styles.search}>
        <div className={styles.searchChild} />
        <div className={styles.search1}>Search</div>
        <img className={styles.search1Icon} alt="" src="/search-1.svg" />
      </div>
      <DashboardContainer />
      <div className={styles.helloEvano}>Hello Evano 👋🏼,</div>
    </div>
  );
};

export default Dashboard;
