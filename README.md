Garage Manager Server
This is a garage management project built with Node.js and TypeScript. The system allows CRUD operations (Create, Read, Update, Delete) on garage data and includes the option to load data from a government API on data.gov.il. The data is stored in a MongoDB database using Mongoose.
Main Features

Add a Garage: Allows adding a new garage to the system.
Delete a Garage: Allows deleting an existing garage by its unique identifier.
Fetch Garage Data from Government Database: The system connects to an external API to import and save garage data from a government source.

Project Architecture
The project is organized as follows:

controllers: Contains files that handle API request logic, such as adding, retrieving, and deleting data. For example, garageController.ts handles CRUD operations on garage data.
models: Contains data models for MongoDB using Mongoose. For instance, garage.ts defines the structure of a "garage" document in the database.
routes: Contains the route definitions for API access points related to garages.
config: Contains configuration files for the project, like the dbConn.ts file to connect to the database.
utils: Contains helper functions for mapping data from the API to the MongoDB model.
dtos: Contains Data Transfer Objects (DTOs), which create structured data objects for transferring data between code layers.

Technologies

Node.js: Server-side runtime environment.
TypeScript: Adds static typing to improve code maintainability and static analysis.
Express: Framework for creating a REST API.
Mongoose: Manages and connects to MongoDB.
dotenv: Manages environment variables securely.

Installation and Setup

Clone the Project Repository:
bash:
git clone https://github.com/chavi-bernstein/garage-manager-server.git
cd garage-manager-server

Set up the Environment:

Create a .env file and add the following variables:
PORT=3000
DATABASE_URI=your_mongodb_connection_string



Install Dependencies:
npm install

Run the Project:
bash:
npx ts-node server.ts
