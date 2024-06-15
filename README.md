# Setting Up the environment for Development

This guide will walk you through the steps needed to set up a Trendy Store locally.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

1. **Node.js** (version 14 or higher) and **npm**: You can download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm (Node Package Manager).

2. **Git**: To clone the repository if it's hosted on a platform like GitHub. You can download Git from [git-scm.com](https://git-scm.com/).

## Steps to Set Up the Project

Follow these steps to set up your development environment:

### 1. Clone the Repository

The project is hosted on Github, so clone it to your local machine using the following command:

```sh
git clone https://github.com/marvelxcodes/TrendyStore.git
```

### 2. Navigate to the Project Directory

Move into the project directory:

```sh
cd TrendyStore
```

### 3. Install Dependencies

Install the project dependencies using npm (pnpm is recommended):

```sh
npm install
```

### (or)

```sh
pnpm install
```

Now you have successfully completed the setup of the project.

### Start Development Server

Start development server using this following command:

```sh
npm run dev
```

### Start a Production Server

Start production server using this following command:

```sh
npm run build
npm start
```

Now you can visit the page at [localhost:5173](http://localhost:5173/)
