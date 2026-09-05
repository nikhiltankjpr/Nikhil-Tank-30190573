from langchain_core.prompts import ChatPromptTemplate
from llm import llm

prompt = ChatPromptTemplate.from_template("""
You are a Senior QA Lead.

Requirement:
{requirement}

Bug:
{bug}

Perform:

1. Root Cause Analysis
2. Requirement Violated
3. Expected Behaviour
4. Actual Behaviour
5. Severity
6. Priority
7. Business Impact
8. Recommended Fix

Return structured output.
""")

bug_analysis_agent = prompt | llm
`