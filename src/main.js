const { app, BrowserWindow } = require('electron');
function crearVentanaPrincipal() {
	let ventanaPrincipal = new BrowserWindow({
		width: 800 /* ancho */,
		height: 600 /* alto */,
	});
	ventanaPrincipal.loadFile('src/views/index.html');
}
app.whenReady().then(crearVentanaPrincipal);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
app.on('activate', function () {
	if (BrowserWindow.getAllWindows().length === 0) {
		crearVentanaPrincipal();
	}
});
