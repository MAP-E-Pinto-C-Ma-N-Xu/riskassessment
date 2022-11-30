import pickle
import numpy as np
import pandas as pd
from sklearn import svm
from sklearn import metrics
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from Data_Preprocessor import Label_Processor
from Model import main_model

# classifier,_ = main_model('nn','all')
# pickle.dump(classifier,open("nn_all.pkl","wb"))

# classifier,_ = main_model('nn','noVI')
# pickle.dump(classifier,open("nn_noVI.pkl","wb"))

# classifier,_ = main_model('nn','noAW')
# pickle.dump(classifier,open("nn_noAW.pkl","wb"))

# classifier,_ = main_model('nn','noBOTH')
# pickle.dump(classifier,open("nn_noBOTH.pkl","wb"))

classifier,_ = main_model('svm','all')
pickle.dump(classifier,open("svm_all.pkl","wb"))

classifier,_ = main_model('svm','noVI')
pickle.dump(classifier,open("svm_noVI.pkl","wb"))

classifier,_ = main_model('svm','noAW')
pickle.dump(classifier,open("svm_noAW.pkl","wb"))

classifier,_ = main_model('svm','noBOTH')
pickle.dump(classifier,open("svm_noBOTH.pkl","wb"))

classifier,_ = main_model('rf','all')
pickle.dump(classifier ,open("rf_all.pkl","wb"))

classifier,_ = main_model('rf','noVI')
pickle.dump(classifier,open("rf_noVI.pkl","wb"))

classifier,_ = main_model('rf','noAW')
pickle.dump(classifier,open("rf_noAW.pkl","wb"))

classifier,_ = main_model('rf','noBOTH')
pickle.dump(classifier,open("rf_noBOTH.pkl","wb"))




