# azure-cors-stripper

An Azure function that will ingest a URL and return the file with CORS removed.

```
curl -X GET "https://<function-domain.com>/api/cors-stripper-func?url=https://files.catbox.moe/fakj8d.CSV"
```
