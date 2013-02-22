(function($){
	brite.registerView("TaskListView",{
		
		// create the view
		create: function(){
			return app.taskDao.list().pipe(function(tasks){
				 return "<div class='TaskListView'>" + render("tmpl-TaskListView-todo-list",{tasks:tasks}) + "</div>";
			});
		},
		
		postDisplay: function(){
			var view = this;
			
			//when first load the data show the info
			$.when(app.taskDao.count(),app.taskDao.count({done:true})).done(function(total,doneCount){
				view.$el.trigger("COUNT_CHANGE",{total:total,doneCount:doneCount});
			});
		},
		
		events: {
			"click; .destroy": function(event){
				var entityRef = $(event.target).bEntity("Task");
				app.taskDao.delete(entityRef.id);
			}, 
			
			"change; input[type='checkbox']": function(event){
				var $check = $(event.target);
				var done = $check.prop("checked");
				var entityRef = $(event.target).bEntity("Task");
				app.taskDao.update({id:entityRef.id,done:done}); 
				
			}
		},
		
		daoEvents: {
			"dataChange; Task; delete" : function(event){
				refreshTodoList.call(this);
			},
			
			"dataChange; Task; create" : function(event){
				refreshTodoList.call(this);
			},
			
			"dataChange; Task; batchDelete" : function(event){
				refreshTodoList.call(this);
			},
			
			"dataChange; Task; batchUpdate" : function(event){
				refreshTodoList.call(this);
			}	
		}
		
	});
	
	function refreshTodoList(){
		var view = this;
		app.taskDao.list().pipe(function(tasks){
			var todoListHTML = render("tmpl-TaskListView-todo-list",{tasks:tasks});
			view.$el.html(todoListHTML);
		});	
	}
	
	
})(jQuery);