import { useState } from "react";
import Box from "../shared/Box";
import Connection from "../shared/Connection";
import SwFactory from "../shared/Sw";

export default function CacheOnly() {
  let [pageValue, setPageValue] = useState();
  let [cacheValue, setCacheValue] = useState();
  let [networkValue, setNetworkValue] = useState(1);
  const sw = SwFactory({ cacheValue, networkValue });

  const fetchContent = async () => {
    let result = await sw.fetchContentFromCache();
    setPageValue(result);
  };

  return (
    <div className="row">
      <div className="header">
        <h1>Cache Only</h1>
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
        buttonText={"Pre Cache"}
        buttonAction={() => {
          setCacheValue(networkValue);
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
