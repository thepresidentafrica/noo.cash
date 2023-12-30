# create a flask application with html ui
from routes.home import home
from routes.admin import admin
from routes.apps import apps
from routes.legal import legal
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import os

load_dotenv()

app = Flask(__name__, static_url_path="/static", static_folder="static")
# Create an instance of the SQLAlchemy class
db = SQLAlchemy()

# Configure the database URL
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")

# Initialize the database
db.init_app(app)
app.register_blueprint(home)
app.register_blueprint(apps)
app.register_blueprint(legal)
app.register_blueprint(admin)
