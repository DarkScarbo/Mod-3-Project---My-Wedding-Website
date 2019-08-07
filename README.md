## Weadding Website
This is a wedding Webpage in which you can know all the plans for the different events that it includes. As a guest, you can confirm you assitence to the wedding and leave a message.

## Motivation
This is the third proyect for the Flatiron School Software Engineering bootcamp. The basic requirements for this project are:

1. Build a Single Page Application (**SPA**).
2. Have the frontend built with HTML, CSS, and JavaScript.
3. Have the frontend communicating with a backend API built with Ruby and Rails.

## Server
The backend it's built in Ruby on Rails with a PostgreSQL database, using an object-oriented programming approach. The app has 5 models: Wedding, Guest, Host, Event and Picture.

- A Weadding has many Events, Hosts and Guests .
- A Event belongs to a Wedding.
- A Guest belongs to a Wedding.
- A Guest has many hosts through Weddings.
- A Host belongs to a Wedding.
- A Host has many guests through Weddings.
- A Host has many Pictures.
- A Picture belongs to a Host.

## Client
The client-side of the application is built with vanilla JavaScript. The style is done by using and adapting a template.

## Initialization
1. Clone and open the project in a code editor.
2. Go into the Wedding-server folder.
3. Run `bundle install`.
4. Run `rails db:migrate` and `rails db:seed`.
5. Run `rails s`.
6. Open the file index.html in the Wedding-client folder with a web browser.

## Gif

Functionality:
![Functionality](https://github.com/DarkScarbo/Mod-3-Project---My-Wedding-Website/blob/master/Wedding_client/img/Wedding.gif)
