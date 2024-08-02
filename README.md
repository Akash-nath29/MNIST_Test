# MNIST Digit Classification API

This project is an API built using FastAPI for predicting handwritten digits from images using a trained machine learning model. The model is designed to classify digits based on the MNIST dataset, and the API can handle image uploads, process them, and return the predicted digit.

## Features

- Upload an image of a handwritten digit.
- Convert the image to grayscale, invert colors, and resize to 28x28 pixels.
- Use a pre-trained model to predict the digit.
- Return the predicted digit in a JSON response.

## Installation

### Prerequisites

- Python 3.7+
- pip (Python package manager)
- Virtual environment (optional but recommended)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/MNIST_Test.git
   cd MNIST_Test
   ```

2. **Create a virtual environment (optional but recommended):**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install the required packages:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Notebook:**

    ```bash
    jupyter notebook
    ```

5. Change to the `api` directory:

   ```bash
   cd api
   ```

6. **Start the FastAPI server:**

   ```bash
   uvicorn app:app --reload
   ```

   The server will start at `http://127.0.0.1:8000`.

## Usage

1. **Start the server** as mentioned in the installation steps.
2. **Send a POST request** to the `/predict/` endpoint with an image file.

### Example

Using `curl`:

```bash
curl -X POST "http://127.0.0.1:8000/predict/" \
     -H "accept: application/json" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@path/to/your/digit/image.png"
```

Using Python requests:

```python
import requests

url = "http://127.0.0.1:8000/predict/"
files = {'file': open('path/to/your/digit/image.png', 'rb')}
response = requests.post(url, files=files)
print(response.json())
```

## API Endpoints

### POST /predict/

- **Description:** Predicts the digit from an uploaded image.
- **Request Body:** Multipart form-data containing the image file.
- **Response:** JSON object with the predicted digit.

  ```json
  {
    "prediction": 7
  }
  ```

## Tech Stack

- **FastAPI** - Web framework for building APIs
- **PIL (Pillow)** - Image processing library
- **NumPy** - Numerical computing library
- **Scikit-learn** - Machine learning library
- **Uvicorn** - ASGI server for running FastAPI applications

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- The MNIST dataset for handwritten digit recognition.
- FastAPI for providing an easy-to-use framework for building APIs.
- Contributors who have helped improve this project.
