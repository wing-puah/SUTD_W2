Passing a variable from node.js to html

https://stackoverflow.com/questions/37991995/passing-a-variable-from-node-js-to-html/51084510

https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

Create a simple database with userid, login, password, and a few other
attributes of your choice. You can use mockaroo.com if necessary.
• Make sure that two different users have different logins.

• Create a simple HTML document with a form asking for login and password.

• After submission, these credentials must be passed to a nodejs web server which returns an error if login and/or password are empty, are not alphanumeric or are too long.

• If the credentials do not trigger an error, the web server send a SQL query to the database requesting the information about the user.

• If the user exists, the user should be able to view his details in his/her browser.

• If the user does not exist, an error message should be sent back.

• Optional: you can add other features of your choice. For example, you can allow a new user to create an account, update or to delete his/her record.
