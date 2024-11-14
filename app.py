from flask import Flask, request, jsonify
from "flask_cors" import CORS # type: ignore

app = Flask(__name__)
CORS(app)  # Permite acesso de diferentes origens (Cross-Origin Resource Sharing)

@app.route("/chatbot", methods=["POST"])
def chatbot():
    user_message = request.json.get("message")
    
    # Simulação de resposta da lucy
    if user_message:
        response = f"olá : {user_message}"
    else:
        response = "ola, como posso ajudar?."




if __name__ == "__main__":
    app.run(debug=True)