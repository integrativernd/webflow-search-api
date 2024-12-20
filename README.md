# Webflow Search API

## Introduction

This repository contains a servless function written in Node.js JavaScript that implements a typeahead search API for a Webflow website. You can deploy it on DigitalOcean's App Platform as a Serverless Function component or as a standalone Function. Documentation is available at https://docs.digitalocean.com/products/functions.

### Requirements

- You need a DigitalOcean account. If you don't already have one, you can sign up at [https://cloud.digitalocean.com/registrations/new](https://cloud.digitalocean.com/registrations/new).
- To deploy from the command line, you will need the [DigitalOcean `doctl` CLI](https://github.com/digitalocean/doctl/releases).

## Deploying the Function

```
# clone this repo
git clone git@github.com:integrativernd/webflow-search-api.git
```

```
# deploy the project, using a remote build so that compiled executable matched runtime environment
doctl serverless deploy webflow-search-api --remote-build
```

The output from the deploy command will resemble the following.

```
Deploying 'webflow-search-api'
  to namespace 'fn-...'
  on host '...'
Submitted function 'api/search' for remote building and deployment in runtime nodejs:default (id: ...)
Processing of action 'api/search' is still running remotely ...
Deployment status recorded in 'webflow-search-api/.deployed'

Deployed functions ('doctl sls fn get <funcName> --url' for URL):
  - api/search
```

## Using the Function

```
doctl serverless functions invoke api/search
```

This will return the default response from the function.

```
{
  "body": "Hello stranger!"
}
```

You can pass a parameter to your function using the `-p` command line argument.

```
doctl serverless functions invoke api/search -p name:functions
{
  "body": "Hello functions!"
}
```

Use this command to retrieve the URL for your function and use it as an API.

```
doctl sls fn get api/search --url
```

You can use that API directly in your browser, with `curl` or with an API platform such as Postman.
Parameters may be passed as query parameters, or as JSON body. Here are some examples using `curl`.

```
curl `doctl sls fn get api/search --url`?name=query
```

```
curl -H 'Content-Type: application/json' -d '{"name":"body"}' `doctl sls fn get api/search --url`
```

### Learn More

You can learn more about Functions by reading the [Functions Documentation](https://docs.digitalocean.com/products/functions).
