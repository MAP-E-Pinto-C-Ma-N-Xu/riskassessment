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

        if (attr['vulnerability'] == -1) and (attr['awareness'] == -1):
            del attr["vulnerability"]
            del attr['awareness']
            param["mode"] = "noBOTH"
        elif attr['vulnerability'] == -1 :
            del attr["vulnerability"]
            param["mode"] = "noVI"
        elif attr['awareness'] == -1 :
            del attr['awareness']
            param["mode"] = "noAW"
        else:
            param["mode"] = "all"
        
        if(param["model"] == 0):
            param["model"] = 'nn'
            para1 = param["hiddenLayers"]
            para1 = (para1,para1,para1)
            
            para2 = param["actFunction"]
            if para2 == 0:
                para2 = "relu"
            elif para2 == 1:
                para2 = "tanh"
            elif para2 == 2:
                para2 = "logistic"
            elif para2 == 3:
                para2 = "identity"

            para3 = param["learningRate"]

        elif(param["model"] == 1):
            param["model"] = 'svm'
            para1 = param["kernel"]
            if para1 == 0:
                para1 = "linear"
            elif para1 == 1:
                para1 = "poly"
            elif para1 == 2:
                para1 = "rbf"
            elif para1 == 3:
                para1 = "sigmoid"
            elif para1 == 4:
                para1 = "precomputed"
            para2 = float(param["regul"])

            para3 = param["gamma"]
        elif(param["model"] == 2):
            param["model"] = 'rf'
            para1 = param["estimators"]
            para2 = param["depth"]
            para3 = param["split"]

        
        
        result = helper.modify_train_predict(attr,param["model"], param["mode"], para1, para2, para3)

        resp = jsonify(attr,param["model"], param["mode"], para1, para2, para3)

        return jsonify(result)

    
@api.route('/check')
class Welcome(Resource):
    def get(self):
        return "Running"






