// Copyright (c) 2023, Dharanipathi and contributors
// For license information, please see license.txt

frappe.ui.form.on("Membership", {  
	refresh: function (frm) {
		frm.set_query("membership_type", function () {
			return {
				filters: {
					status: "Active"
				}
			};
		});
	},
	start_date: function (frm) {
        frm.set_value(
            "end_date",
           frappe.datetime.add_days(frm.doc.start_date, frm.doc.period_of_time)
        );
    },
	refresh: function(frm) {
		if ( frm.doc.status == "Active" && frm.doc.end_date != null ) {
			frm.add_custom_button(__("Cancel Subscription"), function () {
				frm.set_value("status", "Canceled");
				frm.save();
				
			});
		}
		if (frm.doc.status == "Canceled") {
			frm.add_custom_button(__("Reactivate"), function () {
				frm.set_value("membership_type","");
				frm.set_value("start_date","");
				frm.set_value("status", "Active");
			});
		}
	}
});
