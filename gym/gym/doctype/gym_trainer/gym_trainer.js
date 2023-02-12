// Copyright (c) 2023, Dharanipathi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Trainer', {
	before_save: function(frm) {
		var name = frm.doc.full_name
		frm.set_value("route", name);
	 }
});
