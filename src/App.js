import { Cats } from "./components/Cats/index";
import './styled/global.css'

import { Home } from './components/Home'

import { Switch, Route } from 'react-router-dom'
import { Header } from "./components/Header";
import { Adopt } from "./components/Adopt";

export function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cats" exact component={Cats} />
        <Route path="/adopt" exact component={Adopt} />
      </Switch>

    </>
  );
}
