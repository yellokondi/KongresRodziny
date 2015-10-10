(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-10 blogShort\">\r\n    <h1>"
    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n    <img src=\""
    + alias4(((helper = (helper = helpers.ImageURI || (depth0 != null ? depth0.ImageURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImageURI","hash":{},"data":data}) : helper)))
    + "\" alt=\"article image\" class=\"pull-left img-responsive margin10 img-thumbnail\" />\r\n    <article>\r\n        <p>\r\n            "
    + ((stack1 = ((helper = (helper = helpers.FullText || (depth0 != null ? depth0.FullText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FullText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </p>\r\n    </article>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.Articles : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['conference'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr>\r\n	<td>"
    + alias4(((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ParticipantName","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias4(((helper = (helper = helpers.Place || (depth0 != null ? depth0.Place : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Place","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias4(((helper = (helper = helpers.MeetOn || (depth0 != null ? depth0.MeetOn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MeetOn","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias4(((helper = (helper = helpers.Topic || (depth0 != null ? depth0.Topic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Topic","hash":{},"data":data}) : helper)))
    + "</td>\r\n	<td>"
    + alias4(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</td>\r\n</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.Conferences : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['cooperator'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"img-responsive\">\r\n	<a href=\""
    + alias4(((helper = (helper = helpers.SiteUrl || (depth0 != null ? depth0.SiteUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SiteUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.SiteTitle || (depth0 != null ? depth0.SiteTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"SiteTitle","hash":{},"data":data}) : helper)))
    + "\" class=\"thumbnail\">\r\n		<img src=\""
    + alias4(((helper = (helper = helpers.LogoPath || (depth0 != null ? depth0.LogoPath : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LogoPath","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.ImageAlt || (depth0 != null ? depth0.ImageAlt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImageAlt","hash":{},"data":data}) : helper)))
    + "\" />\r\n	</a>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.Cooperators : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['event'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<tr>\r\n	<td>"
    + ((stack1 = ((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ParticipantName","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n	<td>"
    + ((stack1 = ((helper = (helper = helpers.WhereAt || (depth0 != null ? depth0.WhereAt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"WhereAt","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n	<td>"
    + ((stack1 = ((helper = (helper = helpers.When || (depth0 != null ? depth0.When : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"When","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n	<td>"
    + ((stack1 = ((helper = (helper = helpers.Topic || (depth0 != null ? depth0.Topic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Topic","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n	<td>"
    + ((stack1 = ((helper = (helper = helpers.Audience || (depth0 != null ? depth0.Audience : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Audience","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.Event : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['post'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-10 blogShort\">\r\n    <h1>"
    + ((stack1 = ((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\r\n    <a href=\""
    + alias4(((helper = (helper = helpers.FullArticleURL || (depth0 != null ? depth0.FullArticleURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FullArticleURL","hash":{},"data":data}) : helper)))
    + "\" class=\"thumbnail pull-left margin10\">\r\n        <img src=\""
    + alias4(((helper = (helper = helpers.ImageURI || (depth0 != null ? depth0.ImageURI : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImageURI","hash":{},"data":data}) : helper)))
    + "\" alt=\"post image\">\r\n    </a>\r\n    <article>\r\n        <p>\r\n            "
    + ((stack1 = ((helper = (helper = helpers.Slug || (depth0 != null ? depth0.Slug : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Slug","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n        </p>\r\n    </article>\r\n    <p class=\"pull-left marginBottom10\">\r\n        <i class=\"glyphicon glyphicon-user\"></i> <a href=\"#\">"
    + alias4(((helper = (helper = helpers.UserName || (depth0 != null ? depth0.UserName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UserName","hash":{},"data":data}) : helper)))
    + "</a>\r\n        | <i class=\"glyphicon glyphicon-calendar\"></i> "
    + alias4(((helper = (helper = helpers.CreatedOnDate || (depth0 != null ? depth0.CreatedOnDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"CreatedOnDate","hash":{},"data":data}) : helper)))
    + "\r\n        <!--| <i class=\"glyphicon glyphicon-comment\"></i> 3 Comments\r\n        | <i class=\"glyphicon glyphicon-share\"></i> <a href=\"#\">39 Shares</a>-->\r\n        | <i class=\"glyphicon glyphicon-tags\"></i> Tagi :\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Tags : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </p>\r\n    <a class=\"btn btn-blog pull-right marginBottom10\" href=\""
    + alias4(((helper = (helper = helpers.FullArticleURL || (depth0 != null ? depth0.FullArticleURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"FullArticleURL","hash":{},"data":data}) : helper)))
    + "\">CZYTAJ DALEJ</a>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\""
    + alias4(((helper = (helper = helpers.TagURL || (depth0 != null ? depth0.TagURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TagURL","hash":{},"data":data}) : helper)))
    + "\"><span class=\"label label-info\">"
    + alias4(((helper = (helper = helpers.TagName || (depth0 != null ? depth0.TagName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TagName","hash":{},"data":data}) : helper)))
    + "</span></a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.Posts : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['profile'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"row panel\">\r\n    <div class=\"col-md-8 col-xs-12\">\r\n        <img src=\""
    + alias4(((helper = (helper = helpers.ImageURL || (depth0 != null ? depth0.ImageURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImageURL","hash":{},"data":data}) : helper)))
    + "\" class=\"img-thumbnail picture hidden-xs\" />\r\n        <div class=\"header\">\r\n            <h1>"
    + alias4(((helper = (helper = helpers.ParticipantName || (depth0 != null ? depth0.ParticipantName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ParticipantName","hash":{},"data":data}) : helper)))
    + "</h1>\r\n            <h4>"
    + alias4(((helper = (helper = helpers.ParticipantTitle || (depth0 != null ? depth0.ParticipantTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ParticipantTitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n            <span>"
    + ((stack1 = ((helper = (helper = helpers.ParticipantBio || (depth0 != null ? depth0.ParticipantBio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ParticipantBio","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "﻿"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.Participants : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['workshop'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "					<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.RegisterUrl || (depth0 != null ? depth0.RegisterUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"RegisterUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-lg btn-primary\">Wpisz się</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "﻿<div>\r\n	<h2>"
    + alias4(((helper = (helper = helpers.Subject || (depth0 != null ? depth0.Subject : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Subject","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	<h3>"
    + alias4(((helper = (helper = helpers.Instructor || (depth0 != null ? depth0.Instructor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Instructor","hash":{},"data":data}) : helper)))
    + "</h3>\r\n	<div class=\"container\">\r\n		<div class=\"row\">\r\n			<div>\r\n				<h4>Miejsce:</h4>\r\n				<p>"
    + ((stack1 = ((helper = (helper = helpers.Place || (depth0 != null ? depth0.Place : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Place","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n				<h4>Termin</h4>\r\n				<p>"
    + ((stack1 = ((helper = (helper = helpers.MeetOn || (depth0 != null ? depth0.MeetOn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"MeetOn","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n				<h4>Prezentacja warsztatów</h4>\r\n				<p>"
    + ((stack1 = ((helper = (helper = helpers.Definition || (depth0 != null ? depth0.Definition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Definition","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n				<h4>Cel warsztatów i do kogo skierowane</h4>\r\n				<p>\r\n					"
    + ((stack1 = ((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n				</p>\r\n				<h4>Zasady uczestnictwa</h4>\r\n				<p>\r\n					"
    + ((stack1 = ((helper = (helper = helpers.Rules || (depth0 != null ? depth0.Rules : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Rules","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n				</p>\r\n				<h4>Pomoce</h4>\r\n				<p>\r\n					"
    + alias4(((helper = (helper = helpers.Help || (depth0 != null ? depth0.Help : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Help","hash":{},"data":data}) : helper)))
    + "\r\n				</p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.RegisterUrl : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
})();