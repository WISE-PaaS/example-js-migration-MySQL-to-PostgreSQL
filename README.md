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

![Imgur](https://i.imgur.com/wD0T23x.png)

**Part3** Set up schema & table

**NOTE** We set our column type to **JSON** and give it a serial ID.

![Imgur](https://imgur.com/LUP5IAy.png)

**Part4** Query & Insert

![Imgur](https://imgur.com/58ugZA5.png)

**STEP4** **`node app.js`** start this project

If the result are successful, you would see:

![Imgur](https://i.imgur.com/rAdKpO2.png)

**STEP5** Post-Result Check

Login to your [pgAdmin](https://www.pgadmin.org/download/)

Find the database you've set.

Create a query to check if the data is in the database.

![Imgur](https://i.imgur.com/BeaVqcK.png)
