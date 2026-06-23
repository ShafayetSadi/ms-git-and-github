import { useState } from "react";

import Footer from "./footer.js";
import Header from "./header.js";
import getCourseConfig from "../data/course.js";
import { Provider as HeaderProvider } from "../context/headerContext.js";
import { Provider as CourseInfoProvider } from "../context/courseInfoContext.js";

function Layout({ children }) {
  const courseInfo = getCourseConfig();
  const headerHook = useState({});
  return (
    <CourseInfoProvider value={courseInfo}>
      <HeaderProvider value={headerHook}>
        <div className="remix-app">
          <Header title={courseInfo.title} />
          <div className="content-container">
            <div className="main">{children}</div>
          </div>
          <Footer
            twitter={courseInfo.social.twitter}
            github={courseInfo.social.github}
            linkedin={courseInfo.social.linkedin}
            bluesky={courseInfo.social.bluesky}
          />
        </div>
      </HeaderProvider>
    </CourseInfoProvider>
  );
}

export default function App({ children }) {
  return <Layout>{children}</Layout>;
}
