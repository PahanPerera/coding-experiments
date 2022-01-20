import { useState } from "react";
import Box from "../shared/Box";
import Connection from "../shared/Connection";
import SwFactory from "../shared/Sw";

export default function NetworkOnly() {
  let [pageValue, setPageValue] = useState();
  let [networkValue, setNetworkValue] = useState(1);
  let [isNetworkReachable, setIsNetworkReachable] = useState(true);
  const sw = SwFactory({ cacheValue: null, networkValue });

  const fetchContent = async () => {
    let result;
    try {
      result = await sw.fetchContentFromNetwork(isNetworkReachable);
    } catch (error) {
      result = "err";
    }

    setPageValue(result);
  };

  return (
    <div className="row">
      <div className="header">
        <h1>Network Only</h1>
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
      <Box type={"Cache"} value={null} />
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
