from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'dhdHGDHTYFJfydyiug' #Must add strong secret key

# admin dummy data
admins = {
    'admin@example.com': 'adminpassword'
}

# Configures The SQLite DB (Prototype DB)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cavlearn.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Defines a model for the DB
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    # Must add category for future filtering with the app.
    def __repr__(self):
        return f'<Book {self.title}>'

# Admin login 
@app.route('/admin_login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        # Check if admin exists and password is correct
        if email in admins and admins[email] == password:
            session['admin_email'] = email  # Store admin session info
            flash('Login successful! Redirecting to admin page...', 'success')
            return redirect(url_for('admin_add'))  # Redirect to the admin page
        else:
            flash('Invalid email or password', 'danger')
    
    return render_template('login.html')  # Render the login page again if not successful

@app.route('/admin_add')
def admin_add():
    # This is the page where admins are redirected after a successful login
    return render_template('add_book.html')  # Render the admin add page

# Creates the DB and Tables
with app.app_context():
    db.create_all()

# add books to db
@app.route('/add', methods=['POST'])
def add_book():
    title = request.form.get('title')
    author = request.form.get('author')
    description = request.form.get('description')

    new_book = Book(title=title, author=author, description=description)
    db.session.add(new_book)
    db.session.commit()

    return redirect(url_for('home'))

# Dummy user data
users = {
    'user1':'password1',
    'user2':'password2'
}

@app.route('/search')
def search():
    query = request.args.get('query')
    if query:
        results = [book for book in books if query.lower() in book['title'].lower()]
        return render_template('search_results.html', query=query, results=results)
    return redirect(url_for('home'))

    
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if user exits and password is correct
        if username in users and users[username] == password:
            session['username'] = username
            flash('Login successful!','success')
            return redirect(url_for('home1'))
        else:
            flash('Invalid username or password', 'danger')

    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    # Signup logic can be implemented here
    return render_template('signup.html')

@app.route('/my_library')
def my_library():
    return render_template('my_library.html')

@app.route('/category/<subject>')
def category(subject):
    # Your view logic here
    pass

@app.route('/catalog')
def catalog():
    # Your view logic here
    return render_template('catalog.html')

@app.route('/home')
def home1():
    return render_template('home.html')

@app.route('/account')
def account():
    return render_template('user.html')

@app.route('/index')
def home():
    books = Book.query.all()
    return render_template('index.html', books=books)

if __name__ == '__main__':
    app.run(debug=True)

# the below comments are for backend devs only
# Need to work on the sign in form
# must link SQLite db