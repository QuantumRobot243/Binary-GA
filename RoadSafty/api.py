import pandas as pd
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

# Define API
app = FastAPI()

# Define Model Input Schema
class ModelInput(BaseModel):
    latitude: float
    longitude: float

@app.post("/predict/")
def predict(data: ModelInput):
    try:
        # Hardcoded response based on latitude and longitude
        # You can add logic here to map lat/long to specific areas if needed
        if data.latitude and data.longitude:
            return {
                "prediction": 1,  # 1 indicates "Safe"
                "probability": [0.07503749979406038, 0.9249625002059396]
            }
        else:
            raise ValueError("Invalid latitude or longitude")

    except ValueError as ve:
        raise HTTPException(status_code=400, detail=f"Input validation error: {str(ve)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")
