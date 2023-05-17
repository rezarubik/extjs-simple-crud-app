Ext.define("App1.view.main.Edit", {
  extend: "Ext.form.Panel",
  xtype: "edit-form",

  controller: "main",

  title: "Edit User",
  bodyPadding: 5,
  frame: true,
  width: 450,
  height: 250,
  alwaysOnTop: true,
  floating: true,
  closable: true,
  modal: true,
  id: "dataRecForm",
  // defaultType: 'numberfield',

  fieldDefaults: {
    labelWidth: 110,
    anchor: "100%",
  },

  items: [
    {
      xtype: "container",
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "ID",
          name: "upd_id",
          id: "upd_id",
          labelAlign: "top",
          cls: "field-margin",
          flex: 4,
          readOnly: true,
        },
        {
          xtype: "textfield",
          fieldLabel: "Name",
          name: "upd_name",
          id: "upd_name",
          labelAlign: "top",
          cls: "field-margin",
          flex: 4,
        },
        {
          xtype: "textfield",
          fieldLabel: "Email",
          name: "upd_email",
          id: "upd_email",
          labelAlign: "top",
          cls: "field-margin",
          flex: 4,
        },
      ],
    },
  ],
  buttons: [
    {
      text: "Update",
      handler: "onUpdate",
    },
    {
      text: "Delete",
      handler: "onDelete",
    },
    {
      text: "Cancel",
      handler: "onCancel",
    },
  ],
});
