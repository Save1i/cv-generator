import { CvEditor } from "./components/editor/CvEditor1.jsx"; // Adjust as necessary
import { Preview } from "./components/preview/Preview.jsx";
import { NameProvider } from "./components/editor/LineContext.jsx"; // Import NameProvider
import { ManyNameProvider } from "./components/editor/LineManyContexts.jsx"; // Import NameProvider
import { ManyNameProviderWork } from "./components/editor/LineManyContextsWork.jsx"; // Import NameProvider
import { LineManyContextsSkillsProvider } from "./components/editor/LineManyContextsSkills.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <LineManyContextsSkillsProvider>
        <ManyNameProviderWork>
          <ManyNameProvider>
            <NameProvider>
              <CvEditor />
              <Preview />
            </NameProvider>
          </ManyNameProvider>
        </ManyNameProviderWork>
      </LineManyContextsSkillsProvider>
    </div>
  );
}

export default App;
