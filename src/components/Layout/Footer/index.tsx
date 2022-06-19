import { useState, useEffect } from "react";
import Link from "next/link";

import { useCountdown } from "~/hooks";
import pkgInfo from "@/package.json";

import styles from "./styles.module.sass";

const Footer = () => {
  const [isLaunch, setLaunch] = useState(false);
  const [isClaim, setClaim] = useState(false);

  useEffect(() => {
    if (new Date() > new Date(process.env.NEXT_PUBLIC_LAUNCH_START_AT || "")) {
      setLaunch(true);
    }
    if (
      new Date() > new Date(process.env.NEXT_PUBLIC_CLAIM_START_AT || "") &&
      new Date() < new Date(process.env.NEXT_PUBLIC_CLAIM_END_AT || "")
    ) {
      setClaim(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useCountdown({
    end: process.env.NEXT_PUBLIC_LAUNCH_START_AT || "",
    onEnd: () => setLaunch(true),
  });

  return (
    <footer id={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.logo}>
              <Link href="/">
                <a className="d-block"></a>
              </Link>
            </div>
            <div className={styles.text}>
              <p>
                The Space is a pixel map where players can tokenize, own, trade
                and color pixels.
              </p>
              <p className="d-none d-md-block">
                Copyright © 2022 matters-lab.io
              </p>
            </div>
          </div>
          <div className="col-6 col-md-2 offset-md-1">
            <div className={styles.list}>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                {isClaim && (
                  <li>
                    <Link href="/claim">
                      <a>Claim $SPACE</a>
                    </Link>
                  </li>
                )}
                {isLaunch && (
                  <li>
                    <a
                      href="https://app.thespace.game/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Launch App
                    </a>
                  </li>
                )}

                <li>
                  <a
                    href="https://matters.news/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Matters.news
                  </a>
                </li>
                <li>
                  <a
                    href="https://matters-lab.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Matters-lab.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className={styles.list}>
              <ul>
                <li>
                  <a
                    href={pkgInfo.githubResource}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.certik.com/projects/the-space"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Audited by CertiK
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.NEXT_PUBLIC_SWAP_SPACE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Swap $SPACE
                  </a>
                </li>
                <li>
                  <a
                    href="https://wiki.thespace.game/the-space-terms-of-use-community-code-of-conduct "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Term Of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.social}>
              <a
                className={styles.twitter}
                href="https://twitter.com/thespace2022"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.icon}></span>
              </a>
              <a
                className={styles.discord}
                href="https://discord.gg/thespace"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.icon}></span>
              </a>
              <a
                className={styles.youtube}
                href="https://www.youtube.com/channel/UCC_rZ2vHqSy735e7K9I_TIg"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.icon}></span>
              </a>
              <a
                className={styles.opensea}
                href="https://opensea.io/collection/the-space-game"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.icon}></span>
              </a>
              <a
                className={styles.medium}
                href="https://matterslab.medium.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.icon}></span>
              </a>
              <a
                className={styles.github}
                href={pkgInfo.githubResource}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.icon}></span>
              </a>
            </div>
          </div>
          <div className="col-12 d-md-none">
            <div className={`${styles.copyright} text-center`}>
              <span>Copyright © 2022 matters-lab.io</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
