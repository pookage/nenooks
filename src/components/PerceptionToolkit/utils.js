function setupPerceptionToolkit(button){
	window.PerceptionToolkit = window.PerceptionToolkit || {};
	window.PerceptionToolkit.config = {
	    // The location of the installed toolkit.
		root: 'node_modules/perception-toolkit',
		// The element used to launch the experience.
		button
	}
}//setup

export {
	setupPerceptionToolkit
};