import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)


client = MongoClient(
    "mongodb://3.138.247.138:27017/", username="carlos", password="1234"
)
db = client["dbSemi"]


@app.route("/", methods=["GET"])
def hello_world():
    return "<h1>Funciona!</h1><h2> :D </h2>"


@app.route("/addmensaje", methods=["POST"])
def addsms():
    content = request.json
    item_doc = {"texto": content["texto"]}

    db["mensajes"].insert_one(item_doc)

    _items = db["mensajes"].find()
    datos = [item for item in _items]

    m = []
    for d in datos:
        m.append(d["texto"])

    respuesta = {}
    respuesta["estado"] = "ok"
    respuesta["mensajes"] = m

    return json.dumps(respuesta)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
