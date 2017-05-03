Evolent Health Contact List
======================================

This App was designed to maintain contact information. The nav bar at the top of the page will take you to either the "Contact List" or the "Add Contact" page. On the Contact List page you can click on any contact to access their information. From here you can either delete the contact or edit their information. On the update contact page you only need to fill out the boxes where you would like to have the information changed. Otherwise, the boxes default to their current values. On the Add Contact page, filling out the boxes and clicking the "Add Contact" button will add a new contact to your list.

Installation
------------

bundle && cd client && npm i

cd ..

bundle exec rake db:create db:migrate db:seed

rake start

Tech
------------

The app utilizes a react/redux/react-bootstrap front-end with a rails API back-end. The Foreman gem is used to manage the multiple processes. The React App runs on localhost:3000 and the Rails Server (API) runs on localhost:3001. You can boot the app with: "rake start".
