
# create a flask application with html ui
import requests
import os
from flask import Flask, render_template,request
from dotenv import load_dotenv
from routes.home import home
from routes.apps import apps
app = Flask(__name__,static_url_path='/static', static_folder='static')
app.config['SERVER_NAME'] = None
app.config['DEBUG'] = True

graphql_url = os.getenv('HASURA_GRAPHQL_ENDPOINT')
load_dotenv()
app.register_blueprint(home)
app.register_blueprint(apps)
if __name__ == '__main__':
    app.run(debug=True)