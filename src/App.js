import { useState } from "react";

import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/WelcomeWorld"

function App() {
  const [page, setPage] = useState('/home');

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  const router = (path) => {
    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler}/>,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
      'create-game': <CreateGame />,
      'login': <Login />,
      'register': <Register />,
      'details': <GameDetails id={argument} />,
    };

    return routes[rootPath];
  }

  return (
    <div id="box">

      <Header 
        navigationChangeHandler={navigationChangeHandler} 
      />
        
      <main id="main-content">
        { router(page) || <ErrorPage />}
      </main>
      
          
    </div>
  );
}

export default App;
