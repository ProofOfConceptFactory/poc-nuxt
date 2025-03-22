Hello from Nuxt!👋
========================

[![Deploy to GitHub Pages](https://github.com/abdounikarim/poc-nuxt/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/abdounikarim/poc-nuxt/actions/workflows/github-pages.yaml)

The "Hello from Nuxt!👋" application is just a starter to show a minimalist Nuxt app.

Requirements
------------

* [Docker Desktop][1]
* [mkcert][2]

Installation
------------

Clone this repository:

```console
https://github.com/abdounikarim/poc-nuxt
```

Go on the project root folder:

```console
cd poc-nuxt/
```

Install certificate to use HTTPS:

```console
mkcert -install
mkdir -p certs
mkcert -key-file certs/poc-nuxt.key.pem -cert-file certs/poc-nuxt.crt.pem localhost
```

Execute this command to launch docker container:

```console
docker compose -f docker/compose.yaml up -d --build
```

Install JavaScript dependencies:

```console
docker compose -f docker/compose.yaml exec node pnpm install
```

Usage
-----

There's no need to configure anything before running the application. There are
2 different ways of running this application depending on your needs:

**Option 1. Run the application in dev mode**

Start the application using the nuxt server:

```console
docker compose -f docker/compose.yaml exec node pnpm run dev --https --ssl-cert certs/poc-nuxt.crt.pem --ssl-key certs/poc-nuxt.key.pem
```

Then access the application in your browser at the given URL (<https://localhost:8000> by default).

**Option 2. Run the application in prod mode**

```console
docker compose -f docker/compose.yaml exec node pnpm run build
```
You now have your fresh JavaScript files for production 🚀.
You can check everything is OK by opening the [https://localhost:8000/dist/index.html][2] link and navigate on your application.

Tests
-----

Install Cypress dependencies:

```console
docker compose -f docker/compose.yaml exec node pnpm cypress install
```

Execute this command to run tests:

```console
docker compose -f docker/compose.yaml exec node pnpm cypress run
```

Deployment
----------

This application is deployed on [GitHub Pages][4].
Everything is configured and managed automatically by [GitHub Actions][5].
You can check the workflow file at [.github/workflows/github-pages.yaml][6].

[1]: https://www.docker.com/products/docker-desktop/
[2]: https://github.com/FiloSottile/mkcert
[3]: https://localhost:8000/dist/index.html
[4]: https://pages.github.com/
[5]: https://docs.github.com/en/actions
[6]: .github/workflows/github-pages.yaml
