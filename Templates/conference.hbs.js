var conference = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<tr>\r\n	<td>"
    + alias3(((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ParticipantName","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias3(((helper = (helper = helpers.Place || (depth0 != null ? depth0.Place : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Place","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias3(((helper = (helper = helpers.MeetOn || (depth0 != null ? depth0.MeetOn : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"MeetOn","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias3(((helper = (helper = helpers.Topic || (depth0 != null ? depth0.Topic : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Topic","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias3(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</td>\r\n</tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Conferences : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});