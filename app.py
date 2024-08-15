from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify

app = Flask(__name__)
app.secret_key = 'dhdHGDHTYFJfydyiug' #Must add strong secret key

# Dummy user data
users = {
    'user1':'password1',
    'user2':'password2'
}

@app.route('/search')
def search():
    query = request.args.get('query')

    if not query:  # Check if the query is None or empty
        flash('Please enter a search term.', 'warning')
        return redirect(url_for('home'))

    # Dummy book data (replace this with a database query in a real app)
    books = [
        {'title': 'Introduction to Algorithms', 'author': 'Thomas H. Cormen'},
        {'title': 'Principles of Economics', 'author': 'N. Gregory Mankiw'},
        {'title': 'Good to Great', 'author': 'Jim Collins'},
        # Add more books here
    ]

    # Filter books based on the query
    results = [book for book in books if query.lower() in book['title'].lower()]

    return render_template('search_results.html', query=query, results=results)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if user exits and password is correct
        if username in users and users[username] == password:
            session['username'] = username
            flash('Login successful!','success')
            return redirect(url_for('home'))
        else:
            flash('Invalid username or password', 'danger')

    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    # Signup logic can be implemented here
    return render_template('signup.html')

@app.route('/')
def home():
    books = [
        {
            'img_src': 'assets/orbook.jpeg',
            'alt_text': 'Opertion Research book',
            'download_link': '#',
            'save_link': '#',
        },
        {
            'img_src': 'assets/eco101.jpeg',
            'alt_text': 'Economics book',
            'download_link': '#',
            'save_link': '#',
        },
        {
            'img_src': 'assets/orbook.jpeg',
            'alt_text': 'Business Administration book',
            'download_link': '#',
            'save_link': '#',
        },
        {
            'img_src': 'assets/th-1111058214.jpg',
            'alt_text':'Black Hat Python',
            'download_link': '#',
            'save_link': '#',
        }
    ]
    return render_template('index.html', books=books)

if __name__ == '__main__':
    app.run(debug=True)

#Try to optomize the code
#to run app do: python app.py