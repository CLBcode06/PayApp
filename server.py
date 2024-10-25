#Importing Libaries
from flask import Flask, request, render_template

app = Flask(__name__)

#Will initially load the index.html when the website launches
@app.route('/')
def index():
    return render_template('index.html')

#When Clicked the website will redirect the user to the home.html
@app.route('/homePage')
def homePage():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(debug=True)