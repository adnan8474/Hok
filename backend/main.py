import os
from fastapi import FastAPI, Request, UploadFile, File
from fastapi.responses import JSONResponse, FileResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.responses import RedirectResponse
from dotenv import load_dotenv

from routes import ask, upload, docs

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

app = FastAPI()

origins = [
    "https://ai.poctify.com",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ask.router, prefix="/api")
app.include_router(upload.router, prefix="/api")
app.include_router(docs.router, prefix="/api")

# Health check
@app.get("/healthz")
async def healthz():
    return {"status": "ok"}

# Serve static files
app.mount("/", StaticFiles(directory="dist", html=True), name="static")

# Fallback to index.html for client-side routing
@app.exception_handler(404)
async def custom_404_handler(request: Request, exc):
    index_path = os.path.join("dist", "index.html")
    if os.path.exists(index_path):
        return HTMLResponse(open(index_path).read())
    return JSONResponse(status_code=404, content={"detail": "Not Found"})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
