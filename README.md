# URL Shortener
[![Build Status](https://travis-ci.org/markoch/url-shortener.svg?branch=master)](https://travis-ci.org/markoch/url-shortener)
[![Dependency Status](https://img.shields.io/david/markoch/url-shortener.svg?style=flat)](https://david-dm.org/markoch/url-shortener)
[![devDependency Status](https://img.shields.io/david/dev/markoch/url-shortener.svg?style=flat)](https://david-dm.org/markoch/url-shortener#info=devDependencies)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/51afc975ad454f01900cad45df6d1f68)](https://www.codacy.com/app/markoch/url-shortener?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=markoch/url-shortener&amp;utm_campaign=Badge_Grade)

This project implements an URL shortener service, like [Bitly](https://bitlyf.com/)
or [goo.gl](https://goo.gl/). This is just some technical playground for testing Node.JS, Docker and Redis.

## Requirements
The following software must be installed:
- Bower
- Node.js
- (optionally Docker and Redis)

## Installation
Fork the repository and install the dependencies

    bower install
    npm install

## Usage
Start the application by executing from the main directory

    npm start

Then open the following URL in your browser: [http://localhost:3000/](http://localhost:3000/)

### Docker
If you want to run it from a Docker container then a [Dockerfile](Dockerfile)
configuration file is included.

Please review Docker.md for more information.

### Redis Service
You must configure your Redis host and port in transform/URLStore.js. You can also start your own Redis service in a Docker container using redis/Dockerfile.

Then enable Redis support in routes/transform.js.

## License
MIT License, see [LICENSE.txt](LICENSE.txt) for more details.
