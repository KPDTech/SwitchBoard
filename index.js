class featureSwitchInstance {
  constructor({ featureList, redisConfig, dbPrefix }) {
    // test to check the input
    console.log("featureList", featureList);
    this.featureStates = featureList;
    this.redisConfig = redisConfig;
    this.dbPrefix = dbPrefix || "fs";
    this.init();
  }

  enable(feature) {}

  disable(feature) {}

  isEnabled(feature) {}
}

export default featureSwitchInstance;
