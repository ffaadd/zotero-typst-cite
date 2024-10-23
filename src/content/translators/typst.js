function doExport(){
  var item;
  while (item = Zotero.nextItem()) {
	Zotero.write("#cite(<"+ item.citationKey +">)");
  }
}
