import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { text: 'This is a task 1' },
    { text: 'This is a task 2' },
    { text: 'This is a task 3' },
  ],
});
