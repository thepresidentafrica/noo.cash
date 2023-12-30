from flask import Blueprint, render_template, request
from datetime import date

home = Blueprint("home", __name__)


@home.route("/")
def index():
    data = {"title": "noo.cash | apps platform", "year": date.today().year}
    return render_template("index.html", data=data)
