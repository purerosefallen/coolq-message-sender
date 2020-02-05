"use strict";
const yaml = require('js-yaml');
const CQHttp = require('cqhttp');
const fs = require('fs');
const jinja = require('jinja-js');

const config = yaml.safeLoad(fs.readFileSync('./config.yaml', 'utf8'));
let coolq = new CQHttp(config.coolq);

const message = fs.readFileSync(config.message_file, 'utf8');



for (let id of config.send_list) { 
	const rendered_message = jinja.render(message, {
		qq: id
	});
	coolq("send_private_msg", {
		user_id: id,
		message: rendered_message
	});
}
