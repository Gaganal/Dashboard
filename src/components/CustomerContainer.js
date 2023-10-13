import styles from "./CustomerContainer.module.css";

const CustomerContainer = () => {
  return (
    <div className={styles.customers}>
      <img className={styles.customersChild} alt="" src="/rectangle-291.svg" />
      <div className={styles.customers1}>Customers</div>
      <div className={styles.customersThatBuy}>Customers that buy products</div>
      <div className={styles.customersItem} />
      <div className={styles.customersInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.customersChild1} />
      <div className={styles.totalNewCustomersContainer}>
        <p className={styles.p}>
          <b>65%</b>
        </p>
        <p className={styles.totalNewCustomers}>Total New Customers</p>
      </div>
    </div>
  );
};

export default CustomerContainer;
