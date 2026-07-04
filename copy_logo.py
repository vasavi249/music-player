import shutil
import os

source_path = r"C:\Users\gorla\.gemini\antigravity-ide\brain\a2a87373-ddaf-4594-91dd-428bf415b8e8\media__1783188812755.png"
dest_path = r"images\logo.png"

try:
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    shutil.copyfile(source_path, dest_path)
    print("Logo copied successfully!")
except Exception as e:
    print(f"Error copying logo: {e}")
