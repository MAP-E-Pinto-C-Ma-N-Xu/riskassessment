import numpy as np
import pandas as pd

def Risk_ge(Data):
  ## Data Processing
  Data_Pro = np.zeros((Data.shape[0],8))

  # Assign Attack Frequency F
  Data_Pro[:,0][Data[:,0] == 0] = 0.384
  Data_Pro[:,0][Data[:,0] == 1] = 0.208
  Data_Pro[:,0][Data[:,0] == 2] = 0.407
  Data_Pro[:,0][Data[:,0] == 3] = 0.407

  #  Access Control
  Data_Pro[:,1] =  np.power(1/2,np.abs(Data[:,2]))

  # Vulnerability
  Data_Pro[:,2] = Data[:,3]/10

  # Employ + Aware
  em_ratio = Data[:,7] /np.max(Data[:,7])
  Data_Pro[:,3] = np.power(em_ratio, Data[:,6] + 1)

  # IT Support 
  Data_Pro[:,4] = Data[:,4]/2
  ideal_in = 13.7
  Data_Pro[:,5] = (Data[:,8]/np.max(Data[:,8])) * (Data[:,5] - ideal_in)/ideal_in

  # data storage
  Data_Pro[:,6] = Data[:,1]/2

  # Generating Risk
  Risk = Data_Pro[:,0] * (Data_Pro[:,1] + Data_Pro[:,2] + Data_Pro[:,3] - Data_Pro[:,4] - Data_Pro[:,5] - Data_Pro[:,6]) + np.random.normal(0,0.01, Data.shape[0])

  return Risk

train_set = pd.read_csv('syndatasets/train_with_noise.csv')
test_set = pd.read_csv('syndatasets/test_with_noise.csv')
train = train_set.values
test = test_set.values
train_o = pd.read_csv('syndatasets/train_without_noise.csv').values
test_o = pd.read_csv('syndatasets/test_without_noise.csv').values

y_train = Risk_ge(train_o)
y_test = Risk_ge(test_o)

pd_ = pd.DataFrame(y_train, columns=["Risk Level"])
pd_.to_csv(f'train_label',index=False)

pd_ = pd.DataFrame(y_test, columns=["Risk Level"])
pd_.to_csv(f'test_label',index=False)

