import styles from './App.module.css';
import AutoComplete from './components/auto-complete';

function App() {
  return (
    <div className={styles['app']}>
      <header className={styles['header']}>
        <h3>Searcher App</h3>
        <p>Search for Elon Musk</p>
      </header>
      <div className={styles['content']}>
        <AutoComplete />
      </div>
    </div>
  );
}

export default App;
