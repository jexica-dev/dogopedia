# dogopedia


A minimalist, responsive web application for exploring dog breeds and discovering random canine imagery. This project demonstrates asynchronous data fetching from multiple API endpoints using the **TheDogAPI**.

---

## How to Run Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/jexica-dev/dogopedia.git](https://github.com/jexica-dev/dogopedia.git)
  ``` 

2. **Open the project**:
Navigate to the project folder and open the index.html file in any modern web browser (Chrome, Firefox, Safari, or Edge).

3. **API Configuration**:
The project is pre-configured with a functional API key within index.js. No additional registration or environment variables are required for evaluation.

---

## Structure & Functionality
Two Separate Endpoints: (2 GET requests):

GET /v1/breeds: Fetches the main library gallery data.

GET /v1/images/search: Fetches a single random dog image.

Navigation: Features a custom navigation bar to switch between the Library and Random Dog views without reloading the page or requesting unnecessary data.

Readable Code: The script is organized into logical, named functions with clear comments explaining each section.

---

## Design & Styling

Responsive Layout: Uses CSS Media Queries to adapt the UI for different devices:

Mobile: Images display at 80% width for better visibility.

Desktop: Images scale to 50% width to maintain architectural proportions.

Effective Styling: Features IBM Plex Mono with high-contrast colors and accessible font sizes to ensure readability across all devices.



