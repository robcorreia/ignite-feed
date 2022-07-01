import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { Comment } from "./components/Comment";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.layout}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
