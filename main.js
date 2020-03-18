const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async function() {
	try {
		const LOCAL_PATH = process.env['LOCAL_PATH']
		const CACHE_PATH = process.env['CACHE_PATH']
		const { stdout, stderr } = await exec(`mkdir -p ${CACHE_PATH} && mkdir -p ${LOCAL_PATH} && cp -rf ${CACHE_PATH}/ ${LOCAL_PATH}/`);
		console.log(stdout);
		console.log(stderr);
	} catch (e) {
		console.error(e);
	}
})();
