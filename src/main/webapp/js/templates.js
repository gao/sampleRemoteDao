Handlebars.templates = Handlebars.templates || {};


// template --- tmpl-TodoView ---
Handlebars.templates['tmpl-TodoView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"TodoView\">\n        <section id=\"todoapp\">\n          <header id=\"header\">\n            <h1>todos</h1>\n            <input id=\"new-todo\" placeholder=\"What needs to be done?\" autofocus>\n          </header>\n          <section id=\"main\">\n            <input id=\"toggle-all\" type=\"checkbox\">\n            <label for=\"toggle-all\">Mark all as complete</label>\n            <div class=\"taskListViewCtn\"></div>\n          </section>\n          <footer id=\"footer\">\n            <span id=\"todo-count\"></span>\n            <button id=\"clear-completed\">Clear completed</button>\n          </footer>\n        </section>\n        <footer id=\"info\">\n          <p>Double-click to edit a todo</p>\n          <p>App design &amp; styles from todoMVC</p>\n          <p>Created by <a href=\"http://www.jeremychone.com/\">Jeremy Chone</a></p>\n        </footer>\n      </div>";}
);

// template --- tmpl-TaskListView-todo-list ---
Handlebars.templates['tmpl-TaskListView-todo-list'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n         <li data-entity=\"Task\" data-entity-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n          <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ";
  stack1 = depth0.done;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(2, program2, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            <label>";
  foundHelper = helpers.title;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</label>\n            <button class=\"destroy\"></button>\n          </div>\n          <input class=\"edit\" value=\"some\">\n         </li>\n         ";
  return buffer;}
function program2(depth0,data) {
  
  
  return "checked=\"checked\"";}

  buffer += "<ul id=\"todo-list\" class=\"TaskListView\">\n         ";
  stack1 = depth0.tasks;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       </ul>";
  return buffer;}
);
