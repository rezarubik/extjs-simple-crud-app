Ext.define("App1.store.Personnel", {
  extend: "Ext.data.Store",

  alias: "store.personnel",
  storeId: "personnel",

  model: "App1.model.Personnel",

  // start: New data dynamic from api
  proxy: {
    type: "ajax",
    url: "http://ci3restserver.test/api/mahasiswa",
    method: "get",
    useDefaultXhrHeader: false,
    reader: {
      type: "json",
      rootProperty: "data",
      namaProperty: "nama",
      emailProperty: "email",
    },
  },
  // end: New data dynamic from api

  // start: Old data static
  //   data: {
  //     items: [
  //       { id: 101, name: "John", email: "jeanluc.picard@enterprise.com" },
  //       { id: 102, name: "Worf", email: "worf.moghsson@enterprise.com" },
  //       { id: 103, name: "Deanna", email: "deanna.troi@enterprise.com" },
  //       { id: 104, name: "Data", email: "mr.data@enterprise.com" },
  //       { id: 105, name: "Reza", email: "reza@gmail.com" },
  //     ],
  //   },

  //   proxy: {
  //     type: "memory",
  //     reader: {
  //       type: "json",
  //       rootProperty: "items",
  //     },
  //   },
  // end: Old data static
});
