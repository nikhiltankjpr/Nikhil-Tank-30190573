from langchain_core.prompts import ChatPromptTemplate
from llm import llm

prompt = ChatPromptTemplate.from_template("""
You are a Defect Management Specialist.

Requirement:
{requirement}

Bug:
{bug}

Analysis:
{analysis}

Generate:

Defect ID
Summary
Module
Precondition
Steps To Reproduce
Expected Result
Actual Result
Severity
Priority
Root Cause
Business Impact
Recommendation

Create a professional defect report.
""")

defect_report_agent = prompt | llm