class Cache {
  setCacheValue = null;

  constructor(setCacheValue) {
    this.setCacheValue = setCacheValue;
  }

  setValue = async (value) => {
    this.setCacheValue(value);
  };
}

export default function CacheFactory({ setCacheValue }) {
  return new Cache(setCacheValue);
}
