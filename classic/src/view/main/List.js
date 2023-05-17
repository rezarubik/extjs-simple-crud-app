/**
 * This view is an example list of people.
 */
Ext.define("App1.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",
  id: "dataList",

  requires: ["App1.store.Personnel", "App1.view.main.Edit"],

  title: "Personnel",

  store: {
    type: "personnel",
  },

  columns: [
    { text: "ID", dataIndex: "id", flex: 4 },
    { text: "Name", dataIndex: "nama", flex: 4 },
    { text: "Email", dataIndex: "email", flex: 4 },
  ],

  listeners: {
    itemdblclick: "onItemSelected", //note: ke MainController
    //select: 'onItemSelected'
    // itemdblclick: function(dv, record, item, index, e) {
    //     //alert('working');
    //     console.log('>>',record);
    // }
  },
});
