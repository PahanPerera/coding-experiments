import { useState } from "react";
import Box from "../shared/Box";
import Connection from "../shared/Connection";
import SwFactory from "../shared/Sw";

export default function NetworkOnly() {
  let [pageValue, setPageValue] = useState();
  let [networkValue, setNetworkValue] = useState(1);
  const sw = SwFactory({ cacheValue: null, networkValue });

  const fetchContent = async () => {
    let result = await sw.fetchContentFromNetwork();
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
