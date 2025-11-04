const BASE_URL = "https://69061ac0ee3d0d14c134d489.mockapi.io/api";

export async function handleApi(endpoint, method = "GET", body = null) {
  const url = `${BASE_URL}/${endpoint}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      let errorMessage = `API Error: ${response.status} ${response.statusText}`;

      // MockAPI rate limits (HTTP 429)
      if (response.status === 429) {
        errorMessage =
          "You have reached the maximum limit allowed by the mock API.";
      } else {
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch (err) {
          throw new Error(err);
        }
      }
      throw new Error(errorMessage);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`[apiService] ${method} ${url} failed:`, error.message);
    throw error;
  }
}
