/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("App1.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  config: {
    stores: ["personnel"],
  },

  requires: [
    "App1.model.Personnel",
    "App1.view.main.Edit",
    "App1.store.Personnel",
  ],

  onItemSelected: function (sender, record) {
    console.log("onItemSelected row");
    var form = Ext.create("App1.view.main.Edit");

    // note: getCmp harus sama dengan id yg ada di main/Edit.js
    Ext.getCmp("upd_id").setValue(record.data.id);
    Ext.getCmp("upd_name").setValue(record.data.nama);
    Ext.getCmp("upd_email").setValue(record.data.email);

    form.show();
  },

  onCancel: function () {
    this.getView().destroy();
  },

  onDelete: function () {
    var id = Ext.getCmp("upd_id").getValue();
    var store = Ext.getStore("personnel");
    var record = store.getById(id);

    Ext.MessageBox.confirm("Confirm", "Are you sure?", function (btn) {
      if (btn == "yes") {
        record.erase({
          success: function () {
            store.remove(record);
            store.sync();
          },
        });
      }
    });

    this.getView().destroy();
  },

  onUpdate: function (record) {
    var rec_id, store, record, name_, email_;

    rec_id = Ext.getCmp("upd_id").getValue();
    name_ = Ext.getCmp("upd_name").getValue();
    email_ = Ext.getCmp("upd_email").getValue();

    // console.log(`rec_id: ${rec_id}, name_: ${name_}, email_: ${email_}`);

    store = Ext.getStore("personnel");
    record = store.getById(rec_id);

    record.data.nama = name_;
    record.data.email = email_;

    // console.log(record);
    // note: data yg diinput dan akan dikirimkan ke api
    let data = record.data;
    // note: new
    let url = "http://ci3restserver.test/api/mahasiswa";
    Ext.Ajax.request({
      url: url,
      method: "PUT",
      params: data,
      success: function (resp) {
        let response = Ext.decode(resp.responseText);
        if (response.status) {
          Ext.Msg.alert(response.message);
          store.load();
        }
      },
      failure: function (resp) {
        let response = Ext.decode(resp.responseText);
        Ext.Msg.alert(response.message);
      },
    });
    // note: old
    // store.sync();

    Ext.getCmp("dataList").getView().refresh();

    this.getView().destroy();
    //console.log('store: ', store);
  },

  onAdd: function () {
    var rec_id, name_, email_, store;

    rec_id = Ext.getCmp("id").getValue();
    name_ = Ext.getCmp("name").getValue();
    email_ = Ext.getCmp("email").getValue();

    store = Ext.getStore("personnel");
    store.insert(0, [{ id: rec_id, name: name_, email: email_ }]);
    store.sync();

    Ext.getCmp("addUserRec").reset();

    Ext.Msg.alert("Success", "New user has been added.", Ext.emptyFn);

    console.log("store: ", store);
  },
});
