import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <Sidebar />
        <main>content</main>
      </div>
    </div>
  );
}

export default App;
