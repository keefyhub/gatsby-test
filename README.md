# Hatch donation component

## Setup
- run `npm install` to install dependencies
- run `npm run develop` to start the development server on `http://localhost:8000/`

## NOTES
- To view the design variation, go to `http://localhost:8000/?showVariation=true`
- I have used tailwind CSS, in a larger/production project I would use a mix of tailwind and custom utilities with scss (similar to how I have styled buttons)
- To keep some structure to tailwind classes I have followed the following structure
    - properties in this order - tw-classes, custom classes, media queries
    - A-Z ordering of classes
    - using custom utilities on repeated patterns (buttons)
- I have opted for an adaptive container (rather than fluid) to control the width of elements
- I have not added any performance enhancements, such as `gatsby-plugin-image`, but this could be added
- Donation data (type and amount) is logged to console on button submit