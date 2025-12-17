/* global require */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const kolmafia = require("kolmafia");
export let console = { log: kolmafia.print };
