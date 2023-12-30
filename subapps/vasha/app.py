# create a flask application with html ui
from flask import Flask
from dotenv import load_dotenv
from routes.home import home
from routes.apps import apps
from routes.admin import admin
from routes.legal import legal

app = Flask(__name__, static_url_path="/static", static_folder="static")
load_dotenv()
app.register_blueprint(home)
app.register_blueprint(apps)
app.register_blueprint(legal)
app.register_blueprint(admin)
if __name__ == "__main__":
    app.run()
