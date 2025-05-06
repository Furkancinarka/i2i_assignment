# Lyrics Finder

A simple web application that allows users to search for song lyrics by entering the artist name and song title.

## Features

- Easy-to-use interface
- Instant lyrics search
- Responsive design
- Works on all modern browsers

## How it works

The application uses the [lyrics.ovh](https://lyricsovh.docs.apiary.io/) API to fetch song lyrics based on the artist name and song title provided by the user.

## How to use

1. Enter the artist name in the first input field
2. Enter the song title in the second input field
3. Click the "Search Lyrics" button (or press Enter)
4. The lyrics will be displayed below the search form

## Local Development

To run this project locally:

1. Clone this repository
2. Open the `index.html` file in your browser

No build steps or dependencies are required.

## Deployment to GitHub Pages

To deploy this project to GitHub Pages:

1. Create a new GitHub repository
2. Upload all the files in this project to your repository
3. Go to your repository settings
4. Scroll down to the GitHub Pages section
5. Select the branch you want to deploy (usually `main` or `master`)
6. Choose the root folder for deployment
7. Save the settings

Your site will be available at `https://your-username.github.io/your-repository-name/`

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## API Reference

This project uses the [lyrics.ovh](https://lyricsovh.docs.apiary.io/) API:

- Endpoint: `https://api.lyrics.ovh/v1/{artist}/{title}`
- Method: GET
- Response: JSON object containing the song lyrics

## License

This project is open source and available under the [MIT License](LICENSE). 