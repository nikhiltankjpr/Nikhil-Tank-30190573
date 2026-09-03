from langchain_core.prompts import ChatPromptTemplate
from llm import llm

prompt = ChatPromptTemplate.from_template("""
You are a QA Test Data Expert.

Requirement:
{requirement}

Test Cases:
{test_cases}

Generate:

1. Valid Test Data
2. Invalid Test Data
3. Boundary Value Data
4. Coupon Data
5. Payment Data

Use table format.
""")

test_data_agent = prompt | llm