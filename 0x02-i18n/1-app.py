#!/usr/bin/env python3
"""
 1. Basic Babel setup
"""
from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/', strict_slashes=False)
def index() -> str:
    """render the 0-index page"""
    return render_template('0-index.html')


if __name__ == "__main__":
    app.run()
