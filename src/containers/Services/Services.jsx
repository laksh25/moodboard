import React from "react";

import Button from "../../components/Button/Button";
import servicesImage from "../../img/servicesLogo.svg";
import { serviceActions, servicesList } from "../../consts/constant";
import classes from "../../assests/styles/commonStyles.module.css";
import styles from "./Services.module.css";
import InfoCard from "../../components/InfoCard/InfoCard";

const Services = () => {
  return (
    <div className={classes.container}>
      <div className={styles.topRow}>
        <div>
          <p className={classes.pageHeading}>Services</p>
          <div className={styles.marginTop}>
            <p className={classes.subText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className={styles.btnContainer}>
            <Button customStyles={classes.yellowBtnStyles}>Try it out</Button>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img src={servicesImage} alt="Services" width={743} height={481} />
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.serviceActionRow}>
          {serviceActions.map((service) => (
            <Button key={service.id} customStyles={styles.serviceBtn}>
              {service.serviceName}
            </Button>
          ))}
        </div>
      </div>
      <div className={styles.serviceDescriptionRow}>
        {servicesList.map((service) => (
          <InfoCard
            key={service.id}
            alt={service.heading}
            btnName={service.btnName}
            description={service.description}
            heading={service.heading}
            onButtonClick={() => {}}
            isImageFirst={service.isImageFirst}
            src={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
