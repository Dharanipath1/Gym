# Copyright (c) 2023, Dharanipathi and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class GymLockerBoooking(Document):
	def before_save(self):
		frappe.db.set_value("Gym Locker", self.locker ,{'available' : 0})

