import { Templating} from 'meteor/templating';
import valueList from '../imports/database/value';

Template.keep.helpers({
    keep : function(){
        return valueList.find();
    }   
})