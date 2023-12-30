from flask import Blueprint, render_template,request

admin = Blueprint('admin', __name__)

@admin.route('/admin')
def index():
    data = {'title': "noo.cash | Admin", 'year': date.today().year }
    return render_template('admin.html', data=data)

