start:
	npm run nodemon -- --exec npm run babel-node -- server/bin/slack.js

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npm run eslint .

publish:
	npm publish