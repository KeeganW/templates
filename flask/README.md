# Flask Template

TODO Add a basic description about this project.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Background](#background)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Install

Ensure you have `python3`, `pip` and `docker` installed. Further, install `virtualenv` using `pip install virtualenv`.

TODO Add any further installation requirements here.

### Additional System Requirements
Minimum system requirements:
- 100 Gb of Disk Space
- 16 Gb of Ram
- Intel Core i5 (sixth generation or newer) or equivalent
- Internet access for downloading packages

## Usage

To run this project, use the command `python flask_template.py`.

You can set the following environment variables for more control over how the project is run:
```bash
export ENVIRONMENT="production"  # Either "production" or "development". The former starts the app with waitress, while the latter starts the app using flask.
export DEBUG="False"  # Either True or False. Configures the application for the debug level of logging.
export HOST="0.0.0.0"  # An IP to bind the application to.
export PORT=80  # The port to bind the application to. 
```

## Background

TODO Provide any detailed background as to why this project is needed. Expand on the brief description from above.

## API

TODO If exposing capabilities to users, define what they are here.

## Contributing

TODO Provide information for how to contribute to this project (pull request guidelines, coding standards, etc.) if 
applicable.

If editing the Readme, please conform to the [Standard README Specification](https://github.com/RichardLitt/standard-readme).

Please follow PEP8 standards and PEP561 Type Checking.

## License

TODO determine which license you want to use.
[License Type](LICENSE)
