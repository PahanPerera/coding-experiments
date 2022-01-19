import CacheFirst from "./components/CacheFirst";
import CacheOnly from "./components/CacheOnly";
import NetworkFirst from "./components/NetworkFirst";
import NetworkOnly from "./components/NetworkOnly";
import StaleWhileRevalidate from "./components/StaleWhileRevalidate";
import "./main.css";

export default function CacheViz() {
  return (
    <div className="cache-viz-container">
      <div className="main">
        <StaleWhileRevalidate />
        <CacheFirst />
        <NetworkFirst />
        <NetworkOnly />
        <CacheOnly />
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
    </div>
  );
}
