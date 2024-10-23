#!/bin/bash
cwd=$(pwd)
cd $cwd/src
zip -r ../zotero-typst-cite.xpi * 
cd $cwd
