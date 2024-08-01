# Fetch API ❤️ TypeScript

Build and consume REST APIs with ease. No more compromises on type safety in client-server communication. All thanks to TypeScript and OpenAPI. [Go to documenation](https://the-guild.dev/openapi/fets)

## Table of Contents

* [Introduction](#introduction)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)

## Introduction

The feTS library is designed to enhance the safety and type integrity of client-server communication using TypeScript and OpenAPI. By leveraging TypeScript's type-checking capabilities and OpenAPI's API documentation, feTS ensures that the types and structures expected by both the client and server are consistently enforced.

#### Key Features of feTS:

1. **Type Safety**: Ensures that both client and server adhere to the same type definitions, reducing runtime errors and increasing code reliability.
2. **Ease of Use**: Simplifies the process of building and consuming REST APIs by generating client and server code based on OpenAPI specifications.
3. **Flexibility**: Can be used together for a cohesive, type-safe API experience or independently to suit specific project requirements.

#### Benefits:

* **Improved Development Experience**: By using TypeScript and OpenAPI, developers can catch type-related errors at compile time, leading to fewer bugs and more predictable code.
* **Consistent API Contracts**: Ensures that any changes to the API are consistently reflected in both client and server code, reducing the chances of mismatches and integration issues.
* **Enhanced Productivity**: Automates much of the boilerplate code involved in setting up and maintaining API endpoints, allowing developers to focus on business logic.

#### Usage Scenarios:

* **Full Stack Development**: Ideal for projects where both client and server codebases are developed and maintained together, ensuring seamless integration and type safety across the stack.
* **API Consumers**: Can be used by frontend teams to generate type-safe API clients from existing OpenAPI specs, ensuring that API calls are made correctly according to the server's expectations.
* **API Providers**: Server-side teams can use feTS to generate type-safe server code from OpenAPI specs, ensuring that API endpoints conform to the specified contract.

#### Magic Part for feTS: 
When you write `await client.` and then click on `ctrl + key` you will find list for all endpoints in API Spec with structure for each endpoint and HTTP Method supposed to be sent for the server.

<img src="https://github.com/user-attachments/assets/3c22d7a6-45b4-4b19-93f3-386cf4db02f0" width="900" height="430" />

#### Getting Started:

To start using feTS, you would typically:

1. **Install the Library**: Add feTS to your project dependencies.
2. **Generate Code**: Use the OpenAPI specification to generate type-safe client and server code.
3. **Integrate**: Integrate the generated code into your project, ensuring that both client and server adhere to the specified types and structures.

By incorporating feTS into your development workflow, you can achieve a higher level of type safety and consistency in your REST APIs, ultimately leading to more robust and maintainable code.


<br />

## Demo

<img src="https://github.com/user-attachments/assets/320f5b46-bccd-4c53-9c0e-3e51c791e15a" width="860" height="1300"/>


## Installation

1. Clone the repository:
    
    ```bash
    git clone https://github.com/Shaban-Eissa/Fetch-API-TypeScript
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd Fetch-API-TypeScript
    ```
    
3. Install dependencies:
    
    ```bash
    npm install
    ```

6. Set up `.env` file:
    * You can follow steps in Spotify Docs for Developers https://developer.spotify.com/documentation/web-api/tutorials/getting-started or follows the steps below to save the time
    * First, open https://developer.spotify.com/dashboard and create new app
    * Second step is go to settings and get Client ID & Client Secret
    * Then open git terminal and write this command
      ```bash
      curl -X POST "https://accounts.spotify.com/api/token" \
      -H "Content-Type: application/x-www-form-urlencoded" \
      -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
      ```
    * You will get new token valid for one hour and you can generate new one again in same way after it expires.
    * The last one, go to `.env` file and create VITE_APP_SPOTIFY_API_KEY=your_secret_token

  
8. Open terminal to start the application:
    
    ```bash
    npm run dev
    ```
    
9. Open your browser and visit [http://localhost:5173](http://localhost:5173).
    

## Usage

* I used the Spotify API Spec as JSON file (used sawgger to convert yaml to JSON) with feTS library and you can find it here https://developer.spotify.com/reference/web-api/open-api-schema.yaml.
* I used Swagger editor from this link https://editor-next.swagger.io/ to generate JSON file from the Spotify API Spec I copied ( from `Edit` tab and choose `Convert to JSON` ) becuase we need to create JSON file in project as it will be a file contain API Spec to make autocomplete for all endpoints and to make safety for all network requests.

## Technologies Used

* React
* Vite
* Typescript
* Tailwind
* feTS (fetch & typescript)
* Shadcn UI

## Contributing

Feel free to contribute to this project. Fork the repository and submit a pull request.
