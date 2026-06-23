import React from "react";
import Gh from "./github.js";
import Tw from "./twitter.js";
import Li from "./linkedin.js";
import Bs from "./bluesky.js";
import ThemeIcons from "./themeicons.js";

export default function Footer({ twitter, linkedin, github, bluesky }) {
  return (
    <footer className="footer">
      <ul className="socials">
        {twitter ? (
          <li className="social">
            <a href={`https://twitter.com/${twitter}`}>
              <Tw />
            </a>
          </li>
        ) : null}
        {bluesky ? (
          <li className="social">
            <a href={`https://bsky.app/profile/${bluesky}`}>
              <Bs />
            </a>
          </li>
        ) : null}
        {github ? (
          <li className="social">
            <a href={`https://github.com/${github}`}>
              <Gh />
            </a>
          </li>
        ) : null}
        {linkedin ? (
          <li className="social">
            <a href={`https://linkedin.com/in/${linkedin}`}>
              <Li />
            </a>
          </li>
        ) : null}
        <li className="social">
          <div className="terms">
            <p>Content Licensed Under CC-BY-NC-4.0</p>
            <p>Code Samples and Exercises Licensed Under Apache 2.0</p>
            <p>
              Site Designed by{" "}
              <a href="https://www.alexdanielson.com/">Alex Danielson</a>
            </p>
          </div>
        </li>
      </ul>
      <div className="theme-icons">
        <ThemeIcons />
      </div>
    </footer>
  );
}
