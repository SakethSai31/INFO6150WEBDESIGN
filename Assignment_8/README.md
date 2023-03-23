# Assignment 8

## Node, MongoDB, and Express

In this assignment, I have utilized Node.js, MongoDB, and Postman to create four APIs. These APIs are described in detail below:

### 1. Create User - POST: `/user/create`

This API creates a new user with the parameters `fullName`, `EmailId`, and `Password`. The password is encrypted using `bcrypt`.

#### Validation

- Full Name: Only letters are allowed. Digits and special characters are not allowed. Length should be between 2 and 30 characters.
- Password: Letters, digits, and special characters (?=.*) are allowed. Length should be between 6 and 20 characters.
- Email: The email should contain an "@" symbol and a valid domain.

### 2. Update User Details - PUT: `/user/edit`

This API allows updating the user's name and password. The email cannot be updated. If the user is not present in the database, an appropriate error message will be displayed.

### 3. Delete User - DELETE: `/user/delete`

This API takes the email as a parameter and deletes all the details and the user profile from MongoDB.

### 4. Get All Users - GET: `/user/getAll`

This API does not require any parameters and fetches all the details of all the users from the database.


Made by Saketh Vootla - NUID: 001568984