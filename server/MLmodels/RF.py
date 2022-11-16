import numpy as np
from sklearn.ensemble import RandomForestClassifier

class RF_train:

    def __init__(self, mode):
        self.mode = mode
        self.n_est = 500
        self.max_depth = None
        self.class_weight = 'balanced'

    def add_confi(self, n_estimator, max_depth, class_weight):
        self.n_est = n_estimator
        self.max_depth = max_depth
        self.class_weight = class_weight

    def train(self, x_train_, y_train_):

        x_train = np.copy(x_train_)
        y_train = np.copy(y_train_)

        if self.mode == 'noVI': 
            x_train = np.delete(x_train, 3, 1)
        elif self.mode == 'noAW':
            x_train = np.delete(x_train, 6, 1)
        elif self.mode == 'noBOTH':
            x_train = np.delete(x_train, [3,6], 1)

        self.clf = RandomForestClassifier(n_estimators = self.n_est, max_depth=self.max_depth, class_weight = self.class_weight)
        self.clf.fit(x_train, y_train)
    
    def predict(self, test):

        if self.mode == 'noVI':
            test = np.delete(test, 3, 1)
        elif self.mode == 'noAW':
            test = np.delete(test, 6, 1)
        elif self.mode == 'noBOTH':
            test = np.delete(test, [3,6], 1)
            
        pred_result = self.clf.predict(test)
        return pred_result
    
    def get_parameters(self):
        return self.n_est, self.max_depth, self.class_weight