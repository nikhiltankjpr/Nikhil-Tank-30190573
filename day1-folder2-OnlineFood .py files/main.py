from requirement_agent import requirement_agent
from test_case_agent import test_case_chain
from test_data_agent import test_data_agent
from test_review_agent import test_review_agent
from bug_analysis_agent import bug_analysis_agent
from defect_report_agent import defect_report_agent

requirement = """
Online Food Ordering Application

A customer should be able to log in to a food delivery application,
search for a restaurant, add food items to the cart,
apply a coupon, select a delivery address,
make payment and place the order.

The application supports UPI,
credit/debit cards,
and Cash on Delivery.