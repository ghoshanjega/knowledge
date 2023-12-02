from easychatgpt.chatgpt import ChatClient
import os


chat = ChatClient("gjaa@connect.ust.hk", "rQR.*Re*2wMyNuy")

answer = chat.interact("Introduce your self")

print(answer)


