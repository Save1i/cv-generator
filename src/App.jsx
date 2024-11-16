import { CvEditor } from "./components/editor/CvEditor1.jsx"; // Adjust as necessary
import { Preview } from "./components/preview/Preview.jsx";
import { NameProvider } from "./components/editor/LineContext.jsx"; // Import NameProvider
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <NameProvider>
        <CvEditor />
        <Preview />
      </NameProvider>
    </div>
  );
}

export default App;
