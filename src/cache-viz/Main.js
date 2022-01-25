import CacheFirst from "./components/CacheFirst";
import CacheOnly from "./components/CacheOnly";
import NetworkFirst from "./components/NetworkFirst";
import NetworkOnly from "./components/NetworkOnly";
import StaleWhileRevalidate from "./components/StaleWhileRevalidate";
import "./main.css";
import { Switch, Route, Link } from "react-router-dom";

export function CacheVizNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/cache-viz/stale-while-revalidate">
              Stale While Revalidate
            </Link>
          </li>
          <li>
            <Link to="/cache-viz/cache-first">Cache First</Link>
          </li>
          <li>
            <Link to="/cache-viz/network-first">Network First</Link>
          </li>
          <li>
            <Link to="/cache-viz/cache-only">Cache Only</Link>
          </li>
          <li>
            <Link to="/cache-viz/network-only">Network Only</Link>
          </li>
        </ul>
      </nav>
      <p>
        Reference :
        <a
          href="https://developers.google.com/web/tools/workbox/modules/workbox-strategies#using_strategies"
          target="_blank"
          rel="noreferrer"
        >
          https://developers.google.com/web/tools/workbox/modules/workbox-strategies#using_strategies
        </a>
      </p>
    </div>
  );
}

export default function CacheViz() {
  return (
    <div className="cache-viz-container">
      <div className="main">
        <Switch>
          <Route path="/cache-viz/stale-while-revalidate">
            <StaleWhileRevalidate />
          </Route>
          <Route path="/cache-viz/cache-first">
            <CacheFirst />
          </Route>
          <Route path="/cache-viz/network-first">
            <NetworkFirst />
          </Route>
          <Route path="/cache-viz/network-only">
            <NetworkOnly />
          </Route>
          <Route path="/cache-viz/cache-only">
            <CacheOnly />
          </Route>
          <Route path="/cache-viz">
            <CacheVizNav />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
