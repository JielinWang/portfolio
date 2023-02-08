import Header from "./components/Header/Header";
import css from "./styles/app.module.scss";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
    </div>
  );
};

export default App;
