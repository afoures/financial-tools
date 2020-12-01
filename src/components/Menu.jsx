import React from "react";
import { Link } from "react-router-dom";
import { FeedbackFish } from "@feedback-fish/react";

import styles from "./Menu.module.scss";

function Menu() {
  return (
    <header className={styles.header}>
      <aside>outils financiers</aside>
      <nav>
        <Link to="/">Informations</Link>
        <Link to="/early-retirement">Retraite anticipée</Link>
        <FeedbackFish projectId="43da111c16b019">
          <Link to="/">Votre avis sur l'outil</Link>
        </FeedbackFish>
      </nav>
    </header>
  );
}

export default Menu;
