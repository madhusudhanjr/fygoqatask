const fs = require("fs");
const secret = JSON.parse(fs.readFileSync("./test/config/secret.json"));
const mysql = require('mysql2/promise');

async function execute(queryString, resolve, reject) {

	const connection = await mysql.createConnection({
		host: secret.db.db_hostname,
		user: secret.db.db_username,
		password: secret.db.db_password,
		database: secret.db.db_schema,
		dateStrings : true,
		typeCast: function castField(field, useDefaultTypeCasting) {
			if ((field.type === "BIT") && (field.length === 1)) {
				var bytes = field.buffer();
				return (bytes[0] === 1);
			}
			return (useDefaultTypeCasting());
		}
	});

	await connection.execute(queryString, function(err, results, fields) {
		if (err) {
			reject(err);
		}
		// console.log(results);
		connection.end();
		return resolve(results);
	});
}

function getResult(queryString) {
	return new Promise((resolve, reject) => {
		execute(queryString, resolve, reject);
	})
}

module.exports = {
	getResult
};