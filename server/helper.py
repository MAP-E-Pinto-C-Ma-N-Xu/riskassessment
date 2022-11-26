import pickle
import numpy as np

def dto(data):

    
    userdatadto = {}
    userdatadto['fields'] = data['fields']
    userdatadto['dataStorage'] = data['dataStorage']
    userdatadto['accessControl'] = data['accessControl']
    userdatadto['vulnerability'] = data['vulnerability']
    userdatadto['itSupport'] = data['itSupport']
    userdatadto['investment'] = data['investment']
    userdatadto['awareness'] = data['awareness']
    userdatadto['employeeNumber'] = data['employeeNumber']
    userdatadto['revenue'] = data['revenue']

    return userdatadto



def pickle_to_predict(userdata,classifierpkl):

    float_features = [float(x) for x in userdata.values()]
    features = [np.array(float_features)]
    classifier = pickle.load(open(classifierpkl,"rb"))
    raw_prediction = classifier.predict(features)
    result = {"result":int(raw_prediction)}

    return result


