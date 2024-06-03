from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import OperationalError
from sqlalchemy import text
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file
DB_NAME = 'booklibrary'
DATABASE_URL = f'mysql+pymysql://root@localhost:3306/{DB_NAME}'


# Create an engine without specifying the database name
base_url = DATABASE_URL.rsplit('/', 1)[0]
base_engine = create_engine(base_url)

# Create the database if it does not exist
with base_engine.connect() as conn:
    conn.execute(text(f"CREATE DATABASE IF NOT EXISTS {DB_NAME}"))

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
