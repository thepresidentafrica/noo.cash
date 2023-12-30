from flask import Blueprint, render_template
from datetime import date

legal = Blueprint("legal", __name__)

@legal.route("/legal")
def index():
    data = {"title": "noo.cash | Legal", "year": date.today().year}
    return render_template("legal.html", data=data)

@legal.route("/legal/<option>")
def option(option):
    """
    Route for handling legal requests.

    Args:
        option (str): The option chosen for the legal request.

    Returns:
        flask.Response: The rendered legal.html template with the provided data.

    Raises:
        None
    """
    data = {"title": "noo.cash | Legal", "option":option, "year": date.today().year}
    return render_template("legal.html", data=data)