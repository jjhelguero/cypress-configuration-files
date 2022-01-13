# cypress-configuration-files
This repo is an example of implementing cypress-grep and configuration files. 

Each `config` file contains an environment variable named `whereAmI` that holds a string `You are in XXX environment` where `XXX` is the environmetnt. Each test has an assertion for their appropriate environment, thus a tag is appended to each test `@dev, @qa, @prod`. We pass the `grepOmitFiltered=true` to only run tagged tests with the passed tag (ie if we use the qa config file, then we only run the qa.js test file)

## Get started
Run command to install all dependencies\
`npm install`

There are three different environment configuration files, thus we have three npm scripts to pass along the necessary environment variables(`configFile, grepTags, grepOmitFiltered`)

`npm run cy:run:dev`\
`npm run cy:run:qa`\
`npm run cy:run:prod`