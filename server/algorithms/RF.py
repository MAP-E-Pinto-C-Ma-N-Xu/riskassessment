import numpy as np
from sklearn.ensemble import RandomForestClassifier

class RF_train:

    def __init__(self, mode):
        self.mode = mode
        self.n_est = 500
        self.max_depth = None
        self.min_samples_split = 2
        self.clf = RandomForestClassifier(n_estimators = self.n_est, max_depth=self.max_depth, min_samples_split = self.min_samples_split)

    def add_confi(self, n_estimator, max_depth, min_samples_split):

        if not isinstance(n_estimator, int) : raise TypeError('Please enter a int number for RF etimators')
        self.n_est = n_estimator

        if not isinstance(max_depth, int) : raise TypeError('Please enter a int number for RF depths')
        self.max_depth = max_depth

        if not isinstance(min_samples_split, int): raise TypeError('Please enter a positive int number to split the samples ')
        self.min_samples_split = min_samples_split

    def train(self, x_train_, y_train_):

        x_train = np.copy(x_train_)
        y_train = np.copy(y_train_)

        if self.mode == 'noVI': 
            x_train = np.delete(x_train, 3, 1)
        elif self.mode == 'noAW':
            x_train = np.delete(x_train, 6, 1)
        elif self.mode == 'noBOTH':
            x_train = np.delete(x_train, [3,6], 1)

        self.clf.fit(x_train, y_train)
    
    def predict(self, test):

        # if self.mode == 'noVI':
        #     test = np.delete(test, 3, 1)
        # elif self.mode == 'noAW':
        #     test = np.delete(test, 6, 1)
        # elif self.mode == 'noBOTH':
        #     test = np.delete(test, [3,6], 1)
            
        pred_result = self.clf.predict(test)
        return pred_result
    
    def get_parameters(self):
        return self.n_est, self.max_depth, self.min_samples_split
    
    def get_model(self):
        return self.clf