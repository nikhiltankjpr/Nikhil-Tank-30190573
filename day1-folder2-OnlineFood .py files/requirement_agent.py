from langchain_core.prompts import ChatPromptTemplate
from llm import llm

prompt = ChatPromptTemplate.from_template("""
You are a Senior Business Analyst.

Requirement:
{requirement}

Analyze and provide:

1. Functional Requirements
2. Missing Requirements
3. Ambiguous Requirements
4. Validations
5. Edge Cases

Return structured output.
""")

requirement_agent = prompt | llm