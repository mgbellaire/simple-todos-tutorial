import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1} });
  },
});

Template.body.events({
  'submit .new-task' () {
    // Prevent default browser form submit.
    event.preventDefault();

    // Get value from form element.
    const target = event.target;
    const text = target.text.value;

    // Insert the new task into the collection.
    Tasks.insert({
      text,
      createdAt: new Date(),
    });

    // Clear the form.
    target.text.value = '';
  },
});
