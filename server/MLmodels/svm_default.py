import pickle
import numpy as np
import pandas as pd
from sklearn import svm
from sklearn import metrics
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from Data_Preprocessor import Label_Processor
from main import main_model

classifier,_ = main_model('nn','all')
pickle.dump(classifier,open("nn_all.pkl","wb"))

classifier,_ = main_model('nn','noVI')
pickle.dump(classifier,open("nn_noVI.pkl","wb"))

classifier,_ = main_model('nn','noAW')
pickle.dump(classifier,open("nn_noAW.pkl","wb"))

classifier,_ = main_model('nn','noBOTH')
pickle.dump(classifier,open("nn_noBOTH.pkl","wb"))





