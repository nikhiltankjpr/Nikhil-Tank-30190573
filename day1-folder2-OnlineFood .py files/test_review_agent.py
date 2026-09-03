from langchain_core.prompts import ChatPromptTemplate
from llm import llm

prompt = ChatPromptTemplate.from_template("""
You are a QA Review Expert.

Requirement:
{requirement}

Analysis:
{analysis}

Test Cases:
{test_cases}

Test Data:
{test_data}

Review:

1. Coverage Analysis
2. Missing Test Scenarios
3. Risks
4. Suggested Improvements
5. Final QA Review

Provide detailed feedback.
""")

test_review_agent = prompt | llm