import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

const LazyPages1 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPages1")
);
const LazyPages2 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPages2")
);
const LazyPages3 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPages3")
);

export const routes: Route[] = [
  {
    path: "/lazy1",
    component: LazyPages1,
    name: "LazyPages-1",
  },
  {
    path: "/lazy2",
    component: LazyPages2,
    name: "LazyPages-2",
  },
  {
    path: "/lazy3",
    component: LazyPages3,
    name: "LazyPages-3",
  },
];
