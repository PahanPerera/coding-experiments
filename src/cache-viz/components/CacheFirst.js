import { useState } from "react";
import Box from "../shared/Box";
import CacheFactory from "../shared/Cache";
import Connection from "../shared/Connection";
import SwFactory from "../shared/Sw";

export default function CacheFirst() {
  let [pageValue, setPageValue] = useState();
  let [cacheValue, setCacheValue] = useState();
  let [networkValue, setNetworkValue] = useState(1);
  const sw = SwFactory({ cacheValue, networkValue });
  const cache = CacheFactory({ setCacheValue });

  const fetchContent = async () => {
    let result;
    try {
      result = await sw.fetchContentFromCache();
    } catch (error) {
      const newValue = await sw.fetchContentFromNetwork();
      await cache.setValue(newValue);
      result = newValue;
    }
    setPageValue(result);
  };

  return (
    <div className="row">
      <div className="header">
        <h1>Cache First (Cache Falling Back to Network)</h1>
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
      <Connection />
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
