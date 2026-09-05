from langchain_core.prompts import ChatPromptTemplate
from llm import llm

prompt = ChatPromptTemplate.from_template("""
You are a Senior QA Engineer.

Requirement:
{requirement}

Requirement Analysis:
{analysis}

Generate:

1. Positive Test Cases
2. Negative Test Cases
3. Cart Test Cases
4. SAVE20 Coupon Test Cases
5. Boundary Value Test Cases
6. Payment Test Cases
7. Successful Order Test Cases
8. Failed Order Test Cases

Format:

Test Case ID
Scenario
Steps
Expected Result
Priority
""")

test_case_chain = prompt | llm