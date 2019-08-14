# Example-js-migration-MySQL-to-PostgreSQL

This is an example showing how to transfer data from MySQL to PostgreSQL.

## Disclaimer

We don't exactly migrate the original table to the new database, instead, we export the data and store it into a JSON column.

## QUICK START

**STEP1** **`git clone`** this project.

**STEP2** **`npm install {node_package} --save`** install the node packages.

We need the package **`express`**, **`mysql`** and **`pg`**.

**STEP3** Set up the parameters.

**Part1** Require the packages

![Imgur](https://imgur.com/GHTsYYX.png)

**Part2** Set up connection for the databases

![Imgur](https://imgur.com/Yl8a2mV.png)

**Part3** Set up schema & table

![Imgur](https://imgur.com/LUP5IAy.png)

**Part4** Query & Insert

![Imgur](https://imgur.com/58ugZA5.png)
