# Copyright (c) 2023, Dharanipathi and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator
from frappe.website.website_generator import WebsiteGenerator

class GymTrainerSubscription(WebsiteGenerator):
	def before_save(self):
		self.trainer_name = self.route