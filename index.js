module.exports = function(ok, fail) {
	return function(error, data) {
		if (error) {
			fail(error);
			return;
		}
		ok(data);
		return;
	}
};