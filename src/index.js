const { CronJob } = require("cron");

const CONFIG = require("./config");
const contractCallback = require("./contractCallback");

const job = new CronJob(
  CONFIG.cron,
  () => contractCallback(CONFIG.web3),
  null,
  false,
  CONFIG.timezone
);

job.start();
