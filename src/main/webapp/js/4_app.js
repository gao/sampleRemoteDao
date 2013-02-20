var app = app || {};

// define the test data
(function($){
	//Remote URL
	app.remoteServiceURL = "http://localhost:8080/sampleRemoteDao";
	
	//app.taskDao = brite.registerDao(new brite.InMemoryDaoHandler("Task"));	
	app.taskDao = brite.registerDao(new brite.dao.RemoteDao("Task"));
})(jQuery);

// --------- Simple Render Wrapper Function ---------- //
(function(w){  
	Handlebars.templates = Handlebars.templates || {};
	
  function render(templateName,data){
    var tmpl = Handlebars.templates[templateName];
    if (!tmpl){
    	var tmplStr = $("#" + templateName).html();
    	tmpl = Handlebars.templates[templateName] = Handlebars.compile(tmplStr);
    	Handlebars.templates[templateName] = tmpl;
    }
    
    if (tmpl){
    	return tmpl(data);
    }else{
    	return "<small>Error: could not find template: " + templateName + "</small>";
    }
  }
  // put it in the global scope
  w.render = render;
})(window);
// --------- /Simple Render Wrapper Function ---------- //



