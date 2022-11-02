import pickle
import numpy as np
import pandas as pd
from sklearn import svm
from sklearn import metrics
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from Data_Preprocessor import Label_Processor



pickle.dump(classifier,open("svm_all.pkl","wb"))




