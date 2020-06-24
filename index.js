const NodeMediaServer = require('node-media-server');
const PORT = process.env.HTTP_PORT || 5000;
const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_cache: true,
		ping: 30,
		ping_timeout: 60
	},
	http: {
		port: PORT,
		allow_origin: '*'
	}
};

var nms = new NodeMediaServer(config)
nms.run();
