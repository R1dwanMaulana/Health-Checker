(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(e,t,l){"use strict";l.r(t);l(6);var r=l(7),n=l(2),o=l(232),c=l(231);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(c.c)("required",v(v({},o.d),{},{message:"tidak boleh kosong"})),Object(c.c)("max_value",v(v({},o.b),{},{message:"{_field_} maksimal 6 meter"})),Object(c.c)("min_value",v(v({},o.c),{},{message:"{_field_} minimal 2 meter"})),Object(c.c)("double",v(v({},o.a),{},{message:"gunakan tanda (.) untuk desimal"}));var m={name:"FormChecklist",components:{ValidationObserver:c.a,ValidationProvider:c.b},data:()=>({loading:!1,snackbar:!1,timeout:3e3,g1:null,g2:null,g3:null,g4:null,g5:null,g6:null,g7:null,g8:null,g9:null,g10:null,g11:null,g12:null,g13:null,g14:null,predict:0,submitted:!1,g1s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g2s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g3s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g4s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g5s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g6s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g7s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g8s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g9s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g10s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g11s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g12s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g13s:[{text:"Iya",value:1},{text:"Tidak",value:0}],g14s:[{text:"Iya",value:1},{text:"Tidak",value:0}]}),methods:{modelPredict(){var e=this;return Object(r.a)((function*(){try{e.loading=!0,e.snackbar=!0,yield new Promise((e=>setTimeout(e,5e3))),e.predict=164974.23423571*e.length-148047.27476719278+76671.12127056*e.width+227707.434326*e.bathroom+-56106.94865448*e.table+28947.18630694*e.chair+117698.12077464*e.kitchen+600114.34157571*e.chooseAc+56860.15723041*e.chooseWifi+-18779.72174119*e.motorcyleParking+71576.69697222*e.carParking+-17839.86082162*e.location}catch(e){console.log(e)}finally{e.loading=!1}}))()}}},f=l(38),k=l(107),x=l.n(k),y=l(135),_=l(229),h=l(246),C=l(245),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"submit-form"},[e.submitted?e._e():l("div",[l("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var r=t.invalid;return[l("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Lemas dan cepat lelah")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Lemas dan cepat lelah",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g1s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g1,callback:function(t){e.g1=t},expression:"g1"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Sakit kepala dan pusing")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Sakit kepala dan pusing",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g2s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g2,callback:function(t){e.g2=t},expression:"g2"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Sering mengantuk")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Sering mengantuk",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g3s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g3,callback:function(t){e.g3=t},expression:"g3"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Kulit terlihat pucat dan kekuningan")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Kulit terlihat pucat dan kekuningan",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g4s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g4,callback:function(t){e.g4=t},expression:"g4"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Detak jantung tidak teratur")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Detak jantung tidak teratur",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g5s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g5,callback:function(t){e.g5=t},expression:"g5"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Nafas pendek")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Nafas pendek",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g6s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g6,callback:function(t){e.g6=t},expression:"g6"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Nyeri dada")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Nyeri dada",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g7s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g7,callback:function(t){e.g7=t},expression:"g7"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Dingin di tangan dan kaki")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Dingin di tangan dan kaki",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g8s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g8,callback:function(t){e.g8=t},expression:"g8"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Mudah lebam atau memar")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Mudah lebam atau memar",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g9s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g9,callback:function(t){e.g9=t},expression:"g9"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Luka sulit sembuh")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Luka sulit sembuh",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g10s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g10,callback:function(t){e.g10=t},expression:"g10"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Mudah mengalami infeksi dan demam")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Mudah mengalami infeksi",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g11s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g11,callback:function(t){e.g11=t},expression:"g11"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Demam")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Demam",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g12s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g12,callback:function(t){e.g12=t},expression:"g12"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Bagian mata menguning")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Bagian mata menguning",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g13s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g13,callback:function(t){e.g13=t},expression:"g13"}})]}}],null,!0)})],1)],1),e._v(" "),l("div",{staticClass:"d-flex justify-space-between"},[l("p",{staticClass:"mt-8"},[e._v("Perut tidak nyaman")]),e._v(" "),l("v-col",{staticClass:"d-flex mt-2",attrs:{cols:"4",sm:"3"}},[l("validation-provider",{attrs:{name:"Perut tidak nyaman",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[l("v-select",{attrs:{items:e.g14s,"error-messages":r,required:"",dense:"",label:"Pilih"},model:{value:e.g14,callback:function(t){e.g14=t},expression:"g14"}})]}}],null,!0)})],1)],1),e._v(" "),l("v-btn",{staticClass:"mt-8 rounded-lg white--text",attrs:{color:"pink lighten-1",elevation:"5",loading:e.loading,disabled:r},on:{click:function(t){return e.modelPredict()}}},[e._v("\n          Cek\n        ")]),e._v(" "),l("p",{staticClass:"mt-6 grey lighten-3 black--text rounded-md px-3 py-2"},[e._v("\n          Jenis penyakit anda adalah\n          ")])],1)]}}],null,!1,672291046)}),e._v(" "),l("v-snackbar",{attrs:{color:"primary",text:"",timeout:e.timeout,disabled:e.invalid,elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("Sedang mencari harga kost untuk Anda.")])],1)])}),[],!1,null,null,null),j=component.exports;x()(component,{VBtn:y.a,VCol:_.a,VSelect:h.a,VSnackbar:C.a});var w={components:{FormChecklist:j},head:{title:"Identifikasi - Health Check | Aplikasi Identifikasi Penyakit Anemia",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Menu Identifikasi ini digunakan untuk memilih gejala yang sedang dialami"},{name:"format-detection",content:"telephone=no"},{name:"description",content:"Aplikasi identifikasi penyakit anemia"},{property:"og:title",content:"Identifikasi - Health Check | Aplikasi Identifikasi Penyakit Anemia"},{property:"og:description",content:"Menu Identifikasi ini digunakan untuk memilih gejala yang sedang dialami"}]}},P=l(230),O=Object(f.a)(w,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-row",{staticClass:"mx-1",attrs:{justify:"center",align:"center"}},[l("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[l("h3",{staticClass:"mb-8 text-center"},[e._v("Cek Jenis Penyakit Anemia")]),e._v(" "),l("form-checklist")],1)],1)}),[],!1,null,null,null);t.default=O.exports;x()(O,{VCol:_.a,VRow:P.a})}}]);