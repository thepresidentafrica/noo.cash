from flask import Blueprint, render_template
from datetime import date

apps = Blueprint("apps", __name__)


@apps.route("/apps/<app_name>")
def index(app_name):
    data = {
        "title": "apps platform",
        "app_name": app_name,
        "year": date.today().year,
    }
    return render_template("apps.html", data=data)
