import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import valueList from '../imports/database/value';

Meteor.startup(() => {

    (valueList.find().count());
});
