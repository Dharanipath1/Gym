# Copyright (c) 2023, Dharanipathi and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils.data import (
	add_days,
	add_to_date,
	cint,
	cstr,
	date_diff,
	flt,
	get_last_day,
	getdate,
	nowdate,
)

class Membership(Document):
	def set_status(self):
		if self.end_date and getdate() > getdate(self.end_date):
			self.status = "Overdue"
		self.save()
	
