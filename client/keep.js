import { Templating} from 'meteor/templating';
import valueList from '../imports/database/value';

Template.keep.helpers({
    keep : function(){
        return valueList.find();
    } 
})
Template.keep.events({
    'click .remove': function(){
        valueList.remove( this._id);
    }
})
