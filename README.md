# TypeScript-FHIR
FHIR TypeScript Classes

## Prerequisites
1. NodeJS
2. Typescript `npm install typescript --global`

## Setup
1. Get the latest FHIR JSON schema
   1. A schema is included in the repository, but could be out of date.
   2. Download the JSON schema from here: https://www.hl7.org/fhir/downloads.html
2. Update `INPUT_FILE` inside of `generateFHIRClasses.ts`

## Build TypeScript Classes
`npm run build`

## Run Unit Tests
`npm run test`

## Similar Projects:
https://github.com/smart-on-fhir/fhir-parser
