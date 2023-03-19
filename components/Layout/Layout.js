import PropTypes from "prop-types"
import Head from "next/head";

import { NavBar } from "../NavBar";

import styles from "./Layout.module.css";

export function Layout({ children: pageContent }) {

    return <div className={styles["main-container"]}>
    <Head>
      <title>LawConnect</title>
      <meta name="description" content="LawConnect" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
        <NavBar />
        { pageContent }
    </main>

    <footer className={styles.footer}></footer>
  </div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}