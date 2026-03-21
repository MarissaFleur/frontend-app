# utils.py

import datetime
import os

def get_current_timestamp():
    return datetime.datetime.now().timestamp()

def ensure_dir(directory: str) -> None:
    if not os.path.exists(directory):
        os.makedirs(directory)

def calculate_size(file_path: str) -> int:
    return os.path.getsize(file_path)