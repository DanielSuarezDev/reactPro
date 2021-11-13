import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
import { LazyPages1, LazyPages2, LazyPages3 } from "../pages";

export const Navigation = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to={`${path}/lazy1`}>LazyPages1</Link>
        </li>
        <li>
          <Link to={`${path}/lazy2`}>LazyPages2</Link>
        </li>
        <li>
          <Link to={`${path}/lazy3`}>LazyPages3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${path}/lazy1`}>
          <LazyPages1 />
        </Route>
        <Route exact path={`${path}/lazy2`}>
          <LazyPages2 />
        </Route>
        <Route exact path={`${path}/lazy3`}>
          <LazyPages3 />
        </Route>

        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  );
};
