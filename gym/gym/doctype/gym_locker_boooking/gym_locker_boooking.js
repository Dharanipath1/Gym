// Copyright (c) 2023, Dharanipathi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Locker Boooking', {
	refresh: function (frm) {
		frm.set_query("locker", function () {
			return {
				filters: {
					available: 1
				}
			};
		});
	},

	onload: function (frm) {
	cur_frm.set_value("member_name",frappe.session.user,  frm.doc.__islocal ? 0 : 1);
	},
	
	refresh: function(frm) {
		if ( frm.doc.status == "Booked"  ) {
			frm.add_custom_button(__("Cancel Booking"), function () {
				frm.set_value("status", "Canceled");
				frappe.db.set_value("Gym Locker", frm.doc.locker ,{'available' : 1})
				frm.save()
			});
		}
	}
		
});