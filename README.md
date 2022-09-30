# Medusa Integration With Matomo Analytics

![Medusa Hackathon 2022](https://raw.githubusercontent.com/medusajs/hackathon-oct2022-guidelines/main/hackathon-banner.jpeg)

## About

### Participants

Osada - @osadavc

### Description

Storefront based on [Medusa NextJS storefront](https://github.com/medusajs/nextjs-starter-medusa) built using Medusa to work with Matomo Analytics.

## Set up Project

### Prerequisites

Before you start with the tutorial make sure you have

- [Node.js](https://nodejs.org/en/) installed on your machine
- [Matomo account](https://matomo.org/) or Matomo self-hosted instance

### Install Project

1. Clone the repository:

```bash
git clone https://github.com/osadavc/medusa-matomo-storefront
```

2. Change directory and install dependencies:

```bash
cd medusa-matomo-storefront
npm install
```

3. go back to the root folder and configure Medusa server

```bash
cd ..
npm install -g @medusajs/medusa-cli
medusa new my-medusa-store --seed
```

4.  Change directory and start Medusa server

```
cd my-medusa-store
npm start
```

## Resources

- [Medusa’s GitHub repository](https://github.com/medusajs/medusa)
- [Medusa Admin Panel](https://github.com/medusajs/admin)
- [Medusa Documentation](https://docs.medusajs.com/)
