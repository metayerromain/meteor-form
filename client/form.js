import { Templating} from 'meteor/templating';
import valueList from '../imports/database/value';

Template.form.events({
    'submit form' : function(event, template){
        event.preventDefault();
        var valueGit = event.target.value.value;
        console.log(valueGit)
        valueList.insert({
            name : valueGit
        })
    }
})
