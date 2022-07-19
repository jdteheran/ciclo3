from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hola mundo, curso de ciclo 3'
