﻿# Auctioneer

## Live Site and Screenshot

![Auction House Screenshot](https://tordlarsson.com/assets/auction-house-screenshot-Dr-I4nwt.png)

You can view the live site here: [Auction House Live Site](https://auction-house-sp2.netlify.app/)

## Description
Auctioneer is a groundbreaking online auction platform offering a rich, interactive experience for buyers and sellers alike. New users jumpstart their journey with a 1000-credit balance, propelling them into a vibrant marketplace of bidding and sales. With unparalleled authentication security, Auctioneer is the go-to destination for trustworthy, thrilling auctions.

You can remove your listing directly from your profile page.
Add listings on list item page.
In home you can see all auction objects for sale.

Main Features:

- **Responsive Design:** Smooth performance on any device.
- **Noroff Auction API:** Leveraging the latest API for an extensive auction toolkit.
- **Secure Authentication:** State-of-the-art login security for peace of mind.
- **CRUD Functionality:** Full control over auction items, from creation to deletion.
- **Open Browsing:** Listings access without registration.
- **Engaging Bidding:** Experience the thrill of live auctions with real-time updates.
- **Credit Economy:** Earn and spend credits through sales and bids.

### Technology Stack:

- **JavaScript ES6+**: Sleek, modern scripting for the browser.
- **Bootstrap 4+**: Strong framework base for responsive styling.
- **Noroff Auction API**: The backbone for seamless auction data handling.

## Getting Started
Kick off your very own Auctioneer server following these steps. Ensure `node` and `npm` are installed on your system first.

### Setup Instructions:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/lordaake/Semester-Project-2
   ```

2. **Install Dependencies**
   Navigate to your project folder and set up with npm:
   ```sh
   npm install
   ```

3. **Launch the Platform**
   Get Auctioneer up and running:
   ```sh
   npm start
   ```

## Script Usage
To further customize or extend the functionality, leverage the `scripts` section in `package.json`:

- **npm run build**: Opt for netlify or local build settings, depending on the `NETLIFY` environment variable.
- **npm run build:netlify**: Prepare the project for production with sass compilation, webpack bundle optimization, and file copying routines.
- **npm run build:local**: Culminate an ideal environment for local development with sass and webpack in development mode.
- **npm run copy**: Establish the build directory and migrating essential files to it.
- **npm run sass**: Invoke the sass compiler to process stylesheets.
- **npm run watch**: Monitor changes in your Sass files and compile them in real-time.

```json
{
  "scripts": {
    "build": "if-env NETLIFY=true && npm run build:netlify || npm run build:local",
    "build:netlify": "npm run sass && webpack --mode production && npm run copy",
    "build:local": "npm run sass && webpack --mode development",
    "copy": "shx mkdir -p build && shx cp -r src dist src profile images feed index.html build/",
    "sass": "sass src/scss:dist/css",
    "watch": "sass --watch src/scss:dist/css"
  }
}
```

## Contributing
Auctioneer thrives with contributions from the community. For any additions or bug fixes, please fork the repository and issue a pull request, or log an issue with a clear description.

## Contact
Got questions or suggestions? Get in touch:

- **Email:** lordaake@protonmail.com
- **LinkedIn:** [Tord Åke Larsson](https://www.linkedin.com/in/tord-åke-larsson-6b35b958/)

## License
Released under a [Creative Commons license](https://creativecommons.org/licenses/by/4.0/), Auctioneer is open-source and collaborative. Please attribute any derived work to the original source. Your ideas and improvements are welcome to make Auctioneer even better!
