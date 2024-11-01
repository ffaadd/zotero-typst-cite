function doExport(){
  var item;
  while (item = Zotero.nextItem()) {
	Zotero.write("@"+ item.citationKey);
  }
}
