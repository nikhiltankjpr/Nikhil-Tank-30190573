from dotenv import load_dotenv
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

load_dotenv()

llm = HuggingFaceEndpoint(
    repo_id="mistralai/Mistral-7B-Instruct-v0.3"
)

chat = ChatHuggingFace(llm=llm)

response = chat.invoke("Hello, introduce yourself.")
print(response.content)