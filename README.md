[![Open Collective](https://opencollective.com/edudash/tiers/badge.svg)](https://opencollective.com/edudash/) [![GitHub latest release version](https://img.shields.io/github/v/release/edudash/edudash.svg?style=flat)](https://github.com/edudash/edudash/releases/latest) [![Github All Releases download count](https://img.shields.io/github/downloads/edudash/edudash/total.svg?style=flat)](https://github.com/edudash/edudash/releases/latest) [![GitHub contributors](https://img.shields.io/github/contributors/edudash/edudash.svg?style=flat)](https://github.com/edudash/edudash/graphs/contributors)

# About EduDash

Welcome to EduDash, a fully open-source homework management system for schools.

# Running the Project

To run the project, first ensure you have [Docker](https://www.docker.com) installed.

Next, clone the EduDash git repository with

> `git clone https://www.github.com/EduDash/EduDash`

This will automatically pull all submodule microservices which are a dependency of EduDash, such as IdentityService (which manages authentication).

Finally, edit any desired configuration in `docker-compose.yml` and run `npm run compose`. This will automatically install any required dependencies, mount a docker image for each microservice, and start the application.

**The default port for the API is `3000`.**

## Technical Specifications

| Property     | Value   | Description                                                                                          |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------- |
| DB Engine    | MongoDB | The data storage engine for the application. EduDash uses MongoDB by default with WiredTiger.        |
| MIS Provider | Wonde   | The school management information service, which integrates with your school's student/subject data. |

# Contributing

See [Contributing.md](.github/Contributing.md)
