from flask import Blueprint, render_template
from datetime import date

admin = Blueprint("admin", __name__)


@admin.route("/admin")
def index():
    data = {
        "title": "apps platform",
        "year": date.today().year,
    }
    return render_template("admin.html", data=data)
