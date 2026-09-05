from dotenv import load_dotenv
from langchain_huggingface import HuggingFaceEndpoint

load_dotenv()

llm = HuggingFaceEndpoint(
    repo_id="mistralai/Mistral-7B-Instruct-v0.2",
    temperature=0.3
)

response = llm.invoke("What is software testing?")

print(response)