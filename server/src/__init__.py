from flask import Flask, jsonify, request
from flask_restx import Resource, Api, fields
from flask_cors import CORS
import numpy as np
import helper


# instantiate the app
app = Flask(__name__)
CORS(app)
#cors = CORS()
#cors.init_app(app, resources={r"*": {"origins": "*"}})
api = Api(app)






@api.route('/svm')
class SVM(Resource):
    def post(self):
        
        data = request.json
        data = helper.dto(data)

        if (data['vulnerability'] == -1) and (data['awareness'] == -1):
            del data["vulnerability"]
            del data['awareness']

            result = helper.pickle_to_predict(data,'./MLmodels/svm_noBOTH.pkl')
            result["mode"] = "no both"

        elif data['vulnerability'] == -1 :
            del data["vulnerability"]
            result = helper.pickle_to_predict(data,'./MLmodels/svm_noVI.pkl')  
            result["mode"] = "no vulnerability"      
        
        elif data['awareness'] == -1 :
            del data['awareness']
            result = helper.pickle_to_predict(data,'./MLmodels/svm_noAW.pkl')  
            result["mode"] = "no awareness"

        else:
            result = helper.pickle_to_predict(data,'./MLmodels/svm_all.pkl')
            result["mode"] = "default"
        
        
        result["model"] = "SVM"
        return jsonify(result)

@api.route('/nn')
class NN(Resource):
    def post(self):

        data = request.json

        

        if (data['vulnerability'] == -1) and (data['awareness'] == -1):
            del data["vulnerability"]
            del data['awareness']

            result = helper.pickle_to_predict(data,'./MLmodels/svm_noBOTH.pkl')
            result["mode"] = "no both"
            

        elif data['vulnerability'] == -1 :
            del data["vulnerability"]
            result = helper.pickle_to_predict(data,'./MLmodels/svm_noVI.pkl')
            result["mode"] = "no vulnerability"
        
        
        elif data['awareness'] == -1 :
            del data['awareness']
            result = helper.pickle_to_predict(data,'./MLmodels/svm_noAW.pkl')  
            result["mode"] = "no awareness"
             
        else:
            result = helper.pickle_to_predict(data,'./MLmodels/svm_all.pkl')
            result["mode"] = "default"
        
        
        result["model"] = "NN"
        return jsonify(result)


@api.route('/rf')
class RF(Resource):
    def post(self):

        data = request.json

        

        if (data['vulnerability'] == -1) and (data['awareness'] == -1):
            del data["vulnerability"]
            del data['awareness']

            result = helper.pickle_to_predict(data,'./MLmodels/svm_noBOTH.pkl')
            result["mode"] = "no both"

        elif data['vulnerability'] == -1 :
            del data["vulnerability"]
            result = helper.pickle_to_predict(data,'./MLmodels/svm_noVI.pkl')
            result["mode"] = "no vulnerability"        
        
        elif data['awareness'] == -1 :
            del data['awareness']
            result = helper.pickle_to_predict(data,'./MLmodels/svm_noAW.pkl')
            result["mode"] = "no awareness"   
        else:
            result = helper.pickle_to_predict(data,'./MLmodels/svm_all.pkl')
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

        

 

@api.route('/check')
class Welcome(Resource):
    def get(self):
        return "Running"




import pickle
import numpy as np

def dto(data):

    return userdatadto



def pickle_to_predict(userdata,classifierpkl):

    float_features = [float(x) for x in userdata.values()]
    features = [np.array(float_features)]
    classifier = pickle.load(open(classifierpkl,"rb"))
    raw_prediction = classifier.predict(features)
    result = {"result":int(raw_prediction)}

    return result





