# usermanagement
Create a user management page that should function as the following.

1) The page should look like 01-UserManagement-main_page.png. If the user will click on the hamburger icon on the top left, it will close the menu
2) The page will list all the users that has been already created.
3) User can click on the trash can icon to delete an existing user.
4) User can click on Add User button create a new user which should bring the new user screen.
5) clicking user name in the list will bring the edit user screen where user information and roles can be changed and the changes can be saved,

Create the page and the rest api's that can be used to implement the functionality. The user information, roles, etc can be saved in json files, sqlite database or any other database that the candidate is comfortable with.

# Technologies used

```bash
python 3
Django
Django Rest Framwork
Angular 7
Mysql
```

## Installation
Using brew install Python 3.7.4

```bash
brew install python3.7.4
```

Install python virtualenv

```bash
pip3 install virtualenv
```

Clone repository

```bash
git clone https://github.com/mayurtakawale88/usermanagement.git
```

Go to repository directory and create virtual environment and run the virtual environment

```bash
virtualenv usermanagement
source ./usermanagement/bin/activate
```

Install project requirments

```bash
pip install requirments.txt
```

Run migration

```bash
python manage.py migrate
```

Please add roles and there description from mysql itself



