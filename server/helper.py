import pickle
import numpy as np

def dicToList(userdata):


    inputlist = []
    inputlist.append(userdata['fields'])
    inputlist.append(userdata['dataStorage'])
    inputlist.append(userdata['accessControl'])
    inputlist.append(userdata['vulnerability'])
    inputlist.append(userdata['itSupport'])
    inputlist.append(userdata['investment'])
    inputlist.append(userdata['awareness'])
    inputlist.append(userdata['employeeNumber'])
    inputlist.append(userdata['revenue'])

    return 




def pickle_to_predict(userdata,classifierpkl):
    


    float_features = [float(x) for x in userdata.values()]
    features = [np.array(float_features)]
    classifier = pickle.load(open(classifierpkl,"rb"))
    raw_prediction = classifier.predict(features)
    result = {"result":int(raw_prediction)}

    return result
