# Copyright (c) 2023, Dharanipathi and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class GymTrainer(Document):
	def before_save(self):
		self.full_name = " ".join(filter(None, [self.first_name, self.last_name]))
	
	def validate(self):
		if self.email:
			self.validate_email_type(self.email)

	def validate_email_type(self, email):
		from frappe.utils import validate_email_address
		validate_email_address(email.strip(), True)

