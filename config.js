const core = require('@actions/core');
const github = require('@actions/github');

module.exports = {
	LOCAL_PATH: core.getInput('local_path'),
	 CACHE_PATH: core.getInput('cache_path'),
};
