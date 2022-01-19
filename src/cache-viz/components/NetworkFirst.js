import { useState } from "react";
import Box from "../shared/Box";
import CacheFactory from "../shared/Cache";
import Connection from "../shared/Connection";
import SwFactory from "../shared/Sw";

export default function NetworkFirst() {
  let [pageValue, setPageValue] = useState();
  let [cacheValue, setCacheValue] = useState();
  let [networkValue, setNetworkValue] = useState(1);
  let [isNetworkReachable, setIsNetworkReachable] = useState(true);
  const sw = SwFactory({ cacheValue, networkValue });
  const cache = CacheFactory({ setCacheValue });

  const fetchContent = async () => {
    let result;
    try {
      result = await sw.fetchContentFromNetwork(isNetworkReachable);
      await cache.setCacheValue(result);
    } catch (error) {
      result = await sw.fetchContentFromCache();
    }
    setPageValue(result);
  };

  return (
    <div className="row">
      <div className="header">
        <h1>Network First (Network Falling Back to Cache)</h1>
      </div>
      <Box
        type={"Page"}
        value={pageValue}
        buttonText={"Fetch Content"}
        buttonAction={fetchContent}
      />
      <Connection />
      <Box type={"SW"} />
      <Connection />
      <Box
        type={"Cache"}
        value={cacheValue}
        buttonText={"Invalidate"}
        buttonAction={() => {
          setCacheValue(null);
        }}
      />
      <Connection
        isConnected={isNetworkReachable}
        buttonText={"Toggle Connection"}
        buttonAction={() => {
          setIsNetworkReachable(!isNetworkReachable);
        }}
      />
      <Box
        type={"Network"}
        value={networkValue}
        buttonText={"Update Content"}
        buttonAction={() => {
          setNetworkValue(++networkValue);
        }}
      />
    </div>
  );
}
