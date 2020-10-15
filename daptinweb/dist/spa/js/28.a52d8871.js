(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"339e":function(t,n,a){"use strict";a.r(n);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page-container",{staticStyle:{height:"100vh",overflow:"hidden"}},[n("q-dialog",{attrs:{persistent:""},model:{value:e.newNamePrompt,callback:function(t){e.newNamePrompt=t},expression:"newNamePrompt"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Name")])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{attrs:{dense:"",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createNew()}},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Create"},on:{click:function(t){return e.createNew()}}})],1)],1)],1),n("q-menu",{attrs:{"context-menu":""}},[n("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(){e.newNamePrompt=!0,e.newName="",e.newNameType="file"}}},[n("q-item-section",[e._v("New file")])],1),n("q-separator"),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(){e.newNamePrompt=!0,e.newName="",e.newNameType="folder"}}},[n("q-item-section",[e._v("New folder")])],1),n("q-separator")],1)],1),n("q-page",[n("user-header-bar",{staticStyle:{"border-bottom":"1px solid black"},attrs:{buttons:{before:[{icon:"fas fa-search",click:function(){}}],after:[{icon:"card"===e.viewMode?"fas fa-th-list":"fas fa-th-large",click:function(){e.viewMode="card"===e.viewMode?"table":"card"}},{icon:"fas fa-sync-alt",click:e.refreshData}]},title:"Files"},on:{"show-uploader":e.showUploader}}),n("div",{staticClass:"row",staticStyle:{height:"100vh","overflow-y":"scroll"}},[n("div",{staticClass:"col-2 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xs-12"},[e.selectedFile?n("q-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[n("q-card-section",[n("span",{staticClass:"text-bold"},[e._v(e._s(e.selectedFile.name))]),n("br")]),n("q-card-section",[e._v("\n            Size "),n("span",{staticClass:"text-bold"},[e._v(e._s(parseInt(e.selectedFile.document_content[0].size/1024))+" Kb")]),n("br"),e._v("\n            Type "),n("span",{staticClass:"text-bold"},[e._v(e._s(e.selectedFile.mime_type))])]),n("q-card-section",[n("q-list",{attrs:{separator:"",bordered:""}},[n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.fileDownload(e.selectedFile)}}},[n("q-item-section",[e._v("Download")])],1),e.isEditable(e.selectedFile)?n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.openEditor(e.selectedFile)}}},[n("q-item-section",[e._v("Open")])],1):e._e(),e.isViewable(e.selectedFile)?n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.openViewer(e.selectedFile)}}},[n("q-item-section",[e._v("View")])],1):e._e()],1)],1)],1):e._e(),n("q-card",{attrs:{flat:""}},[n("q-card-section",[n("q-list",{attrs:{bordered:"",separator:""}},[n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push("/apps/document/new")}}},[n("q-item-section",[e._v("New document")])],1),n("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push("/apps/spreadsheet/new")}}},[n("q-item-section",[e._v("New spreadsheet")])],1),n("q-item",{attrs:{clickable:""},on:{click:function(){e.newNamePrompt=!0,e.newName="",e.newNameType="file"}}},[n("q-item-section",[e._v("New file")])],1)],1)],1),n("q-card-section")],1),n("q-card",{staticStyle:{border:"1px dashed black","font-size":"10px","box-shadow":"none"}},[n("file-upload",{ref:"upload",staticStyle:{height:"300px",width:"100%","text-align":"left"},attrs:{multiple:!0,drop:!0,"drop-directory":!0,"post-action":"/post.method","put-action":"/put.method"},on:{"input-file":e.uploadFile},model:{value:e.uploadedFiles,callback:function(t){e.uploadedFiles=t},expression:"uploadedFiles"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row q-pa-xs"},[n("div",{staticClass:"col-12 "},[n("table",{staticStyle:{width:"100%"}},[e.uploadedFiles.length>0?n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),n("th",{staticStyle:{"text-align":"right"}},[e._v("Size")]),n("th",{staticStyle:{"text-align":"right"}},[e._v("Status")])])]):e._e(),n("tbody",e._l(e.uploadedFiles,(function(t){return n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v(" "+e._s(t.name))]),n("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(parseInt(t.size/1024))+" Kb")]),n("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(t.status))])])})),0)])])]),n("div",{staticClass:"row",staticStyle:{padding:"10px"}},[n("div",{staticClass:"col-12",staticStyle:{height:"100%"}},[0===e.uploadedFiles.length?n("span",{staticClass:"vertical-middle"},[e._v("\n                Click here to select files, or drag and drop files here to upload")]):e._e()])])])])],1)],1),n("div",{staticClass:"col-10 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xs-12"},["table"===e.viewMode?n("paginated-table-view",{attrs:{items:e.files},on:{"item-deleted":e.itemDelete,"item-rename":e.itemRename,"item-double-clicked":e.fileDblClicked,"item-clicked":e.fileClicked}}):e._e(),"card"===e.viewMode?n("paginated-card-view",{attrs:{items:e.files},on:{"item-deleted":e.itemDelete,"item-rename":e.itemRename,"item-clicked":e.fileClicked,"item-double-clicked":e.fileDblClicked}}):e._e()],1)])],1)],1)},o=[],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("456d"),a("551c"),a("06db"),a("aef6"),a("7f7f"),a("28a5"),a("9523")),s=a.n(r),c=(a("34ef"),a("2f62"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){for(var t=window.atob(e),n=t.length,a=new Uint8Array(n),i=0;i<n;i++){var o=t.charCodeAt(i);a[i]=o}return a}function u(e,t,n){var a=new Blob([n],{type:t}),i=document.createElement("a");i.href=window.URL.createObjectURL(a);var o=e;i.download=o,i.click()}var f={name:"FileBrowser",watch:{currentPath:function(e){console.log("Current path changed",e),localStorage.setItem("_last_current_path",e)}},methods:d(d({itemRename:function(e){console.log("rename item",e)},fileDblClicked:function(e){console.log("Item double click",e)},isEditable:function(e){var t=["ddoc","dsheet"],n="";return e.document_name.indexOf(".")>-1&&(n=e.document_name.split(".")[1]),console.log("Check file extension",n),t.filter((function(e){return e===n})).length>0},isViewable:function(e){var t=["jpg","png","gif","txt","pdf","mp4","mp3","wav","mkv"],n="";return e.document_name.indexOf(".")>-1&&(n=e.document_name.split(".")[1]),t.filter((function(e){return e===n})).length>0},openEditor:function(e,t){var n=e.document_name.split(".")[1];switch(n){case"ddoc":return void this.$router.push("/apps/document/"+e.reference_id);case"dsheet":return void this.$router.push("/apps/spreadsheet/"+e.reference_id)}},openViewer:function(e,t){var n=e.document_name.split(".")[1];switch(n){case"ddoc":return void this.$router.push("/apps/document/"+e.reference_id);case"dsheet":return void this.$router.push("/apps/spreadsheet/"+e.reference_id)}},itemDelete:function(e){console.log("Delete file",e);var t=this;this.deleteRow({tableName:"document",reference_id:e.reference_id}).then((function(){t.refreshData()})).catch((function(e){t.$q.notify({message:e[0].title})}))},fileClicked:function(e){console.log("file clicked",e),this.selectedFile=e,e.is_dir&&this.fileDownload(e)},fileDownload:function(e){var t=this;if(console.log("File clicked",e),e.is_dir){if("."===e.name)t.refreshData();else if(".."===e.name){var n=this.currentPath.split("/");n.length>1&&n.pop();var a=n.join("/");console.log("one level up %s",a),this.currentPath=a}else t.currentPath=e.document_path+e.name;t.refreshData()}else t.$q.loading=!0,t.loadData({tableName:"document",params:{query:JSON.stringify([{column:"reference_id",operator:"is",value:e.reference_id}]),included_relations:"document_content",page:{size:1}}}).then((function(e){t.$q.loading=!1;var n=e.data[0];u(n.document_name,n.mime_type,m(e.data[0].document_content[0].contents))}))},createNew:function(){console.log("Create ",this.newNameType,this.newName,this.currentPath);var e=this,t={document_name:this.newName,tableName:"document",document_extension:this.newName.indexOf(".")>-1?this.newName.split(".")[1]:"",mime_type:"",document_path:this.currentPath+"/",document_content:[{name:this.newName,type:"text/plain",path:this.currentPath,contents:"data:base64,"+btoa("")}]};"folder"===this.newNameType&&(t.document_extension="folder",t.document_content=[]),this.createRow(t).then((function(t){e.refreshData(),e.newNamePrompt=!1})).catch((function(t){console.log("Failed to create",t),e.$q.notify({message:JSON.stringify(t)})}))}},Object(c["b"])(["loadData","createRow","loadModel","deleteRow"])),{},{refreshData:function(){var e=this;e.selectedFile=null,e.loadData({tableName:"document",params:{query:JSON.stringify([{column:"document_path",operator:"is",value:e.currentPath+"/"}]),page:{size:100}}}).then((function(t){console.log("Documents ",t),e.files=t.data.map((function(e){return e.icon="fas fa-file",e.name=e.document_name,e.path=e.document_path,e.name.endsWith("xlsx")||e.name.endsWith("xls")?e.icon="fas fa-file-excel":e.name.endsWith(".doc")||e.name.endsWith("docx")?e.icon="fas fa-file-word":e.name.endsWith("dsheet")?e.icon="fas fa-border-none":e.name.endsWith("ddoc")?e.icon="fas fa-file-alt":e.name.endsWith("ppt")||e.name.endsWith("pptx")?e.icon="fas fa-file-powerpoint":e.name.endsWith("pdf")?e.icon="fas fa-file-pdf":e.name.endsWith("txt")||e.name.endsWith("yaml")||e.name.endsWith("json")?e.icon="fas fa-file-alt":e.name.endsWith("html")||e.name.endsWith("xml")||e.name.endsWith("css")?e.icon="fas fa-file-code":e.name.endsWith("csv")?e.icon="fas fa-file-csv":e.name.endsWith("jpg")||e.name.endsWith("tiff")||e.name.endsWith("gif")||e.name.endsWith("png")?e.icon="fas fa-image":e.name.endsWith("mp3")||e.name.endsWith("wav")||e.name.endsWith("riff")||e.name.endsWith("ogg")?e.icon="fas fa-file-audio":e.name.endsWith("mp4")||e.name.endsWith("mkv")||e.name.endsWith("riff")||e.name.endsWith("m4a")?e.icon="fas fa-file-video":(e.name.endsWith("zip")||e.name.endsWith("rar")||e.name.endsWith("gz")||e.name.endsWith("tar"))&&(e.icon="fas fa-file-archive"),"folder"===e.document_extension&&(e.icon="fas fa-folder",e.is_dir=!0,e.color="rgb(224, 135, 94)"),e})),""!==e.currentPath&&(e.files.unshift({name:"..",path:"..",icon:"fas fa-folder",is_dir:!0,color:"rgb(224, 135, 94)"}),e.files.unshift({name:".",path:".",icon:"fas fa-folder",is_dir:!0,color:"rgb(224, 135, 94)"}))}))},ensureDirectory:function(e){var t=this;if("/"!==e&&!t.directoryEnsureCache[e]){t.directoryEnsureCache[e]=!0;var n=e.split("/"),a=n[n.length-1];n.pop();var i=n.join("/")+"/";console.log("Ensure directory",e);var o=[{column:"document_name",operator:"is",value:a},{column:"document_path",operator:"is",value:i},{column:"document_extension",operator:"is",value:"folder"}];console.log("Document search query",o),t.loadData({tableName:"document",params:{query:JSON.stringify(o)}}).then((function(n){if(console.log("Ensure directory result",n),0===n.data.length){console.log("Directory does not exist",e);var o={document_name:a,tableName:"document",document_extension:"folder",mime_type:"",document_path:i,document_content:[]};console.log("Create folder request",o),t.createRow(o).then((function(e){t.refreshData()})).catch((function(e){console.log("Failed to create folder",e),t.$q.notify({message:"Failed to create folder: "+JSON.stringify(e)})}))}}))}},uploadFile:function(t,n){var a=this;t.status="Queued";var i=function(i){return new Promise((function(o,r){var s=n||i.name,c=(i.type,new FileReader);t.status="Reading",c.onload=function(e){t.status="Uploading";var s=a.currentPath+"/";if(i.webkitRelativePath&&i.webkitRelativePath.length>0){var c=i.webkitRelativePath.split("/");c.pop(),s=a.currentPath+"/"+c.join("/")+"/"}var l=s.split("/");l.length>2&&(l.pop(),a.ensureDirectory(l.join("/")));var d={tableName:"document",document_content:[{name:n||i.name,contents:e.target.result,type:i.type,path:s}],document_name:n||i.name,document_path:s,mime_type:i.type,document_extension:i.name.indexOf(".")>-1?i.name.split(".")[1]:""};a.createRow(d).then((function(){t.status="Uploaded",a.refreshData(),o()})).catch(r)},c.onerror=function(){console.log("Failed to load file onerror",e,arguments),r(s)},c.readAsDataURL(i)}))};return i(t.file)},showUploader:function(){console.log("show uploader",this.showUploadComponent);var e=this;this.uploadedFiles=[],e.$refs.upload.$el.click()}}),data:function(){return d(d({searchInput:""},Object(c["c"])(["endpoint"])),{},{directoryEnsureCache:{},newNamePrompt:!1,viewMode:"card",uploadedFiles:[],newName:"",newNameType:"",currentPath:"",selectedFile:null,showSearchInput:!1,files:[],showUploadComponent:!1,viewParameters:{tableName:"document"},containerId:"id-"+(new Date).getMilliseconds(),screenWidth:(window.screen.width<1200?window.screen.width:1200)+"px"})},mounted:function(){var e=this;this.containerId="id-"+(new Date).getMilliseconds(),console.log("Mounted FilesBrowser",this.containerId);var t=localStorage.getItem("_last_current_path");t&&(this.currentPath=t),e.refreshData(),document.querySelector("html").ondragenter=function(e){return e.stopPropagation(),!1},document.querySelector("html").ondragover=function(e){return e.stopPropagation(),!1},document.ondrop=function(t){if(console.log("File(s) dropped"),t.preventDefault(),t.dataTransfer.items){for(var n=0;n<t.dataTransfer.items.length;n++)if("file"===t.dataTransfer.items[n].kind){var a=t.dataTransfer.items[n].getAsFile();console.log("... file["+n+"].name = "+a.name),e.uploadFile({file:a})}}else for(n=0;n<t.dataTransfer.files.length;n++)console.log("... file["+n+"].name = "+t.dataTransfer.files[n].name),e.uploadFile({file:t.dataTransfer.files[n]})},document.onpaste=function(t){var n=(t.clipboardData||t.originalEvent.clipboardData).items;for(var a in console.log("Items",n),n){var i=n[a];if(console.log("Items",a,i,i),window.item=i,"file"===i.kind){var o=i.getAsFile();console.log("Upload blob",o);var r=o.name.split("."),s=r[0]+" pasted at "+(new Date).toLocaleString()+"."+r[1];e.uploadFile({file:o},s)}}}}},p=f,h=a("2877"),w=a("09e3"),v=a("24e8"),g=a("f09f"),b=a("a370"),_=a("27f9"),y=a("4b7e"),k=a("9c40"),q=a("4e73"),x=a("1c1c"),N=a("66e5"),D=a("4074"),C=a("eb85"),P=a("9989"),F=a("068f"),S=a("de5e"),W=a("7f67"),O=a("eebe"),j=a.n(O),R=Object(h["a"])(p,i,o,!1,null,null,null);n["default"]=R.exports;j()(R,"components",{QPageContainer:w["a"],QDialog:v["a"],QCard:g["a"],QCardSection:b["a"],QInput:_["a"],QCardActions:y["a"],QBtn:k["a"],QMenu:q["a"],QList:x["a"],QItem:N["a"],QItemSection:D["a"],QSeparator:C["a"],QPage:P["a"],QImg:F["a"],QPageSticky:S["a"]}),j()(R,"directives",{ClosePopup:W["a"]})}}]);