class Sw {
  cacheValue = null;
  networkValue = null;

  constructor(cacheValue, networkValue) {
    this.cacheValue = cacheValue;
    this.networkValue = networkValue;
  }

  fetchContentFromCache = async () => {
    return this.cacheValue
      ? Promise.resolve(this.cacheValue)
      : Promise.reject();
  };
  fetchContentFromNetwork = async (isReachable = true) => {
    if (!isReachable) return Promise.reject();
    return this.networkValue
      ? Promise.resolve(this.networkValue)
      : Promise.reject();
  };
}

export default function SwFactory({ cacheValue, networkValue }) {
  return new Sw(cacheValue, networkValue);
}
