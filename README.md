# URL Shortener

[![Build Status](https://travis-ci.org/markoch/url-shortener.svg?branch=master)](https://travis-ci.org/markoch/url-shortener)
[![Dependency Status](https://img.shields.io/david/markoch/url-shortener.svg?style=flat)](https://david-dm.org/markoch/url-shortener)
[![devDependency Status](https://img.shields.io/david/dev/markoch/url-shortener.svg?style=flat)](https://david-dm.org/markoch/url-shortener#info=devDependencies)


This project implements an URL shortener service, like [Bitly](https://bitly.com/)
or [goo.gl](https://goo.gl/).

## Requirements
The following software must be installed:
- Bower
- Node.js
- (optionally Docker)

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

## Next steps
- Provide additional REST API
- Use [redis](http://redis.io/) as storage service

## License
Copyright (c) 2016 Marco Koch

MIT License, see [LICENSE.txt](LICENSE.txt) for more details.
