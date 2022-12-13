from flask import Flask, jsonify, request
from flask_restx import Resource, Api, fields
from flask_cors import CORS
import numpy as np
import helper



# instantiate the app
app = Flask(__name__)
CORS(app)
api = Api(app)


@api.route('/svm')
class SVM(Resource):
    def post(self):
        
        data = request.json
        data = helper.dto(data)

        if (data['vulnerability'] == -1) and (data['awareness'] == -1):
            del data["vulnerability"]
            del data['awareness']

            result = helper.pickle_to_predict(data,'./pickle/default/svm_noBOTH.pkl')
            result["mode"] = "noBoth"

        elif data['vulnerability'] == -1 :
            del data["vulnerability"]
            result = helper.pickle_to_predict(data,'./pickle/default/svm_noVI.pkl')  
            result["mode"] = "noVulnerability"      
        
        elif data['awareness'] == -1 :
            del data['awareness']
            result = helper.pickle_to_predict(data,'./pickle/default/svm_noAW.pkl')  
            result["mode"] = "noAwareness"

        else:
            result = helper.pickle_to_predict(data,'./pickle/default/svm_all.pkl')
            result["mode"] = "default"
        
        
        result["model"] = "SVM"
        return jsonify(result)

@api.route('/nn')
class NN(Resource):
    def post(self):

        data = request.json
        data = helper.dto(data)

        

        if (data['vulnerability'] == -1) and (data['awareness'] == -1):
            del data["vulnerability"]
            del data['awareness']

            result = helper.pickle_to_predict(data,'./pickle/default/nn_noBOTH.pkl')
            result["mode"] = "noBoth"
            

        elif data['vulnerability'] == -1 :
            del data["vulnerability"]
            result = helper.pickle_to_predict(data,'./pickle/default/nn_noVI.pkl')
            result["mode"] = "noVulnerability"
        
        
        elif data['awareness'] == -1 :
            del data['awareness']
            result = helper.pickle_to_predict(data,'./pickle/default/nn_noAW.pkl')  
            result["mode"] = "noAwareness"
             
        else:
            result = helper.pickle_to_predict(data,'./pickle/default/nn_all.pkl')
            result["mode"] = "default"
        
        
        result["model"] = "NN"
        return jsonify(result)


@api.route('/rf')
class RF(Resource):
    def post(self):

        data = request.json
        data = helper.dto(data)

        

        if (data['vulnerability'] == -1) and (data['awareness'] == -1):
            del data["vulnerability"]
            del data['awareness']

            result = helper.pickle_to_predict(data,'./pickle/default/svm_noBOTH.pkl')
            result["mode"] = "noBoth"

        elif data['vulnerability'] == -1 :
            del data["vulnerability"]
            result = helper.pickle_to_predict(data,'./pickle/default/svm_noVI.pkl')
            result["mode"] = "noVulnerability"
        
        elif data['awareness'] == -1 :
            del data['awareness']
            result = helper.pickle_to_predict(data,'./pickle/default/svm_noAW.pkl')
            result["mode"] = "noAwareness"   
        else:
            result = helper.pickle_to_predict(data,'./pickle/default/svm_all.pkl')
            result["mode"] = "default"
        

        result["model"] = "RF"
        return jsonify(result)

@api.route('/test')
class Test(Resource):
    def post(self):

        data = request.json
        resp = helper.dto(data)

        resp = jsonify(resp)
    
        return resp
    

@api.route('/modif')
class Modif(Resource):
    def put(self):
        data = request.json

        param,attr = helper.conver_modif(data)
        #helper.modify_train(model, mode, para1, para2, para3)

        resp = jsonify(param)

        return resp

    
@api.route('/check')
class Welcome(Resource):
    def get(self):
        return "Running"






