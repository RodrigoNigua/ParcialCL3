FlowRouter.route('/',{
	name: 'home',
	action(){
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/vehiculo',{
	name: 'vehiculo',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Vehiculo'});
	}
});

<<<<<<< HEAD
<<<<<<< HEAD
FlowRouter.route('/frutas',{
	name: 'frutas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Frutas'});
}
});
=======
FlowRouter.route('/figuras',{
	name: 'figuras',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Figuras'});
	}
});

>>>>>>> c4b5c56a217b918fe269cab1d7210a648026509a
=======
FlowRouter.route('/libro',{
	name: 'libro',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Libro'});
	}
});
		
>>>>>>> d59b5988ed002d693d69a51c0455f42fbb429ec0

FlowRouter.route('/plantas',{
	name: 'plantas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Plantas'});

	}
});


>>>>>>> 681c49afa750b96f85a5feb67b0dba745ba4362e
FlowRouter.route('/deportes',{
	name: 'deportes',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Deportes'});

	}
<<<<<<< HEAD
});
=======
});
>>>>>>> d59b5988ed002d693d69a51c0455f42fbb429ec0
