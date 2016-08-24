import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';



import './home.html';

Template.home.helpers({
  isOwner() {
    return this.owner === Meteor.Meteor.userId();
  },
});
