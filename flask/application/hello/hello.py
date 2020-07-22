"""
A simple example of a blueprint for saying hello to a new website visitor.
"""
from flask import Blueprint, render_template, current_app


# TODO Update name of this variable, blueprint name, and module name to reflect the new component of
#   your project.
hello_blueprint = Blueprint('hello', __name__, template_folder='templates')


@hello_blueprint.route('/')
@hello_blueprint.route('/<name>')
def hello(name: str = None):
    """
    Say hello to a new user!

    :param name: optional, the name of the new user
    :return: A rendering of the hello page, with provided data.
    """
    current_app.logger.info("Name provided was: {}".format(name))
    return render_template('hello.html', name=name)
