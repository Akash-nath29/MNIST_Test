from fastapi import FastAPI, File, UploadFile
# from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from io import BytesIO
from PIL import Image, ImageOps
import pickle

# Load the model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)
    
    
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
    
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(BytesIO(contents)).convert('L')
    image = ImageOps.invert(image)
    image = image.resize((28, 28))
    image = np.array(image).reshape(1, 784)
    prediction = model.predict(image)
    return {"prediction": int(prediction[0])}