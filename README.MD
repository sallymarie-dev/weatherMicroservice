# Weather Microservice 🌤️

## What It Does

This microservice wraps around the Visual Crossing Weather API to make it **super easy to get weather info** for a specific ZIP code and date. It simplifies the raw data so you just get the essentials — date and temperature. This is meant for other servers or apps to use, not direct browser calls.

## How to Get It Running

1. **clone the repo**

bash
git clone <your-repo-url>
cd <your-repo-folder>


2. **Install the dependencies**

bash
npm install


3. **Set up your environment variables**

Create a `.env` file in the root folder with your keys:

```env
WEATHER_KEY=your_visual_crossing_api_key
SERVICE_KEY=your_microservice_api_key
PORT=3001
```

* `WEATHER_KEY` is for the Visual Crossing API
* `SERVICE_KEY` is for controlling who can access *this* microservice

4. **Start the server**

```bash
node index.js
```

You should see a message that the server is running on your chosen port.

---

## How to Use the API

### Endpoint

```
GET /weather
```

### Required Headers

| Header    | Needed? | Notes                                     |
| --------- | ------- | ----------------------------------------- |
| X-API-KEY | Yes     | Use the `SERVICE_KEY` you added in `.env` |

### Query Parameters

| Parameter | Needed? | Notes                          |
| --------- | ------- | ------------------------------ |
| zip       | Yes     | 5-digit US ZIP code            |
| date      | Yes     | Date formatted as `YYYY-MM-DD` |

---

### Example Request

```http
GET http://localhost:3001/weather?zip=90210&date=2024-07-04
Headers:
X-API-KEY: my-super-secret-service-key-12345
```

---

### Example Response

```json
[
  { "datetime": "2024-07-04", "temp": 85 },
  { "datetime": "2024-07-05", "temp": 86 }
]
```

---

### Possible Errors

| Status | Why It Happens             | Example Response                                                                                        |
| ------ | -------------------------- | ------------------------------------------------------------------------------------------------------- |
| 400    | Missing ZIP code           | `{ "error": "zip is required" }`                                                                        |
| 400    | Missing date               | `{ "error": "date is required" }`                                                                       |
| 401    | Missing or wrong API key   | `{ "error": "Not authorized" }`                                                                         |
| 502    | Visual Crossing API failed | `{ "error": "Failed to fetch weather data from provider", "status": 400, "statusText": "Bad Request" }` |

---

## Extra Notes

* You **must include your `SERVICE_KEY`** in the `X-API-KEY` header or the request will be blocked.
* The microservice automatically handles fetching from Visual Crossing using your `WEATHER_KEY`.
* The response is clean and minimal — no extra clutter, just dates and temperatures.

---

### Quick Checklist ✅

* [x] Route clearly documented
* [x] Inputs (headers and query params) explained
* [x] Example request included
* [x] Example response included
* [x] Error cases listed

Created by Sally M. Watson