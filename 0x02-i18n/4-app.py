#!/usr/bin/env python3
"""
 2. Get locale from request
"""
from flask import Flask, request
from flask import render_template
from flask_babel import Babel


class Config(object):
    """
    configuration class
    """
    LANGUAGES = ['en', 'fr']
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale() -> str:
    """
    Gets locale from request object
    """
    locale = request.args.get('locale', '').strip()
    if locale and locale in Config.LANGUAGES:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/', strict_slashes=False)
def index() -> str:
    """render the 4-index page"""
    return render_template('4-index.html')


if __name__ == "__main__":
    app.run()
