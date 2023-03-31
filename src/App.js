import Login from './componentes/Login/Index';
import Line from './componentes/Line/Index'
// eslint-disable-next-line no-unused-vars
import styles from './App.module.scss'

function App() {
  return (
    <main className={styles.position}>
    <div>
      <Line/>
    </div>
    <div>
      <Login/>
    </div>
    </main>
  );
}

export default App;
