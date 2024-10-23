function log(msg) {
	Zotero.log(msg);
}

async function install({ id, version, rootURI }) {
	const json = Zotero.File.getContentsFromURL(rootURI + "/content/translators/typst.json");
	const code = Zotero.File.getContentsFromURL(rootURI + "/content/translators/typst.js");
	const header = JSON.parse(json);
        await Zotero.Translators.save(header, code);
        await Zotero.Translators.reinit();
	log("Typst Translator installed")
}

function startup({ id, version, rootURI }) {
}

function shutdown() {
}

async function uninstall({ id, version, rootURI }) {
	const json = Zotero.File.getContentsFromURL(rootURI + "/content/translators/typst.json");
	const header = JSON.parse(json);
	const destFile = Zotero.getTranslatorsDirectory()
	destFile.append(`${header.label}.js`)
	log(destFile)
	if(destFile.exists()){
		await destFile.remove(false)
        	await Zotero.Translators.reinit();
		log("Typst Translator removed")
	}else{
		log("Typst Translator file not found")
	}
}
