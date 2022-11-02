from flask import Flask
from flask_restful import Api, Resource, reqparse
import pickle
import numpy as np


app = Flask(__name__)
api = Api(app)





class SvmModel(Resource):
    def post(self,mode):
        svm_model_args = reqparse.RequestParser()
        svm_model_args.add_argument("fields", type=int)
        svm_model_args.add_argument("data storage", type=int)
        svm_model_args.add_argument("access control", type=int)
        svm_model_args.add_argument("vulnerability", type=int)
        svm_model_args.add_argument("it supprot", type=int)
        svm_model_args.add_argument("investment", type=float)
        svm_model_args.add_argument("awareness", type=int)
        svm_model_args.add_argument("employee number", type=int)
        svm_model_args.add_argument("revenue", type=float)

        args = svm_model_args.parse_args()
        float_features = [float(x) for x in args.values()]
        features = [np.array(float_features)]
        svm_default = pickle.load(open('MLmodels/svm_all.pkl',"rb"))
        raw_prediction = svm_default.predict(features)
        result = {"result":list(raw_prediction)}
        return result



class Welcome(Resource):
    def get(self):
        return "Server running"


api.add_resource(Welcome,"/")
api.add_resource(SvmModel, "/svmmodel/<int:mode>")


if __name__ == "__main__":
    app.run(debug=True)

