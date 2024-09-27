#!/usr/bin/env bash

openapi-generator generate \
  --generator-name typescript-axios \
  --input-spec ./vendor/bcoas1.0.yaml \
  --output . \
  --package-name=business-central \
  --additional-properties="withNodeImports=true" \
  --additional-properties="withSeparateModelsAndApi=true" \
  --additional-properties="npmName=business-central-client" \
  --additional-properties="apiPackage=api" \
  --additional-properties="modelPackage=model" \
  --additional-properties="useSingleRequestParameter=true" \
